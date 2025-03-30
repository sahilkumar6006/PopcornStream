
import React from "react";
import CustomCard from "./Card";

export interface LiveStreamCardProps {
  title: string;
  channel: string;
  thumbnail: string;
  viewerCount: number;
  isLive?: boolean;
  className?: string;
  tags?: string[];
}

const LiveStreamCard: React.FC<LiveStreamCardProps> = ({
  title,
  channel,
  thumbnail,
  viewerCount,
  isLive = true,
  className,
  tags = [],
}) => {
  const formattedViewerCount = viewerCount > 1000 
    ? `${(viewerCount / 1000).toFixed(1)}K` 
    : viewerCount.toString();

  return (
    <CustomCard
      className={`max-w-xs w-full ${className || ""}`}
      imageUrl={thumbnail}
      isLive={isLive}
      stats={`${formattedViewerCount} viewers`}
    >
      <h3 className="text-white font-medium text-base line-clamp-2 mb-1">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">{channel}</p>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-800 text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </CustomCard>
  );
};

export default LiveStreamCard;