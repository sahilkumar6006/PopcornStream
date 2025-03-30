import React from "react";

export interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  footerContent?: React.ReactNode;
  badge?: string;
  stats?: string;
  isLive?: boolean;
  aspectRatio?: "video" | "square" | "auto";
  overlay?: boolean;
  hover?: boolean;
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  (
    {
      className,
      children,
      title,
      subtitle,
      imageUrl,
      footerContent,
      badge,
      stats,
      isLive = false,
      aspectRatio = "video",
      overlay = false,
      hover = true,
      ...props
    },
    ref
  ) => {
    const aspectRatioClass = {
      video: "aspect-video",
      square: "aspect-square",
      auto: "",
    };

    return (
      <div
        className={`rounded-lg overflow-hidden bg-gray-900 border border-gray-800 transition-all duration-300 ${hover ? "hover:translate-y-[-4px] hover:shadow-lg hover:shadow-black/30" : ""} ${className || ""}`}
        ref={ref}
        {...props}
      >
        {imageUrl && (
          <div className="relative">
            <div className={`overflow-hidden ${aspectRatioClass[aspectRatio]}`}>
              <img
                src={imageUrl}
                alt={title || "Card image"}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            {badge && (
              <div className="absolute top-2 right-2">
                <span className="bg-gray-900/80 text-white text-xs font-medium px-2.5 py-1 rounded">
                  {badge}
                </span>
              </div>
            )}
            
            {isLive && (
              <div className="absolute top-2 left-2">
                <span className="bg-red-600 text-white text-xs font-medium px-2.5 py-1 rounded flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                  LIVE
                </span>
              </div>
            )}
            
            {stats && (
              <div className="absolute bottom-2 right-2">
                <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {stats}
                </span>
              </div>
            )}
            
            {overlay && title && (
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">{title}</h3>
                {subtitle && <p className="text-gray-300 text-sm">{subtitle}</p>}
              </div>
            )}
          </div>
        )}
        
        {!overlay && (title || subtitle) && (
          <div className="p-4">
            {title && <h3 className="text-white font-medium text-lg">{title}</h3>}
            {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
            {children}
          </div>
        )}
        
        {!overlay && !title && !subtitle && children && (
          <div className="p-4">{children}</div>
        )}
        
        {footerContent && (
          <div className="border-t border-gray-800 px-4 py-3 text-sm text-gray-400">
            {footerContent}
          </div>
        )}
      </div>
    );
  }
);

CustomCard.displayName = "CustomCard";

export default CustomCard;