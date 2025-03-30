import React, { InputHTMLAttributes, forwardRef } from "react";
import { Search } from "lucide-react";

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
  fullWidth?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, label, icon, error, fullWidth = false, ...props }, ref) => {
    return (
      <div className={`relative ${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label
            className="block text-sm font-medium text-gray-300 mb-1"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}
          <input
            className={`bg-gray-800/70 border ${error ? "border-red-500" : "border-gray-700"} text-white placeholder-gray-400 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 ${icon ? "pl-10" : "pl-4"} hover:bg-gray-700/50 transition-colors duration-200 ${className || ""}`}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export const SearchInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    return <CustomInput icon={<Search size={18} />} placeholder="Search..." ref={ref} {...props} />;
  }
);

SearchInput.displayName = "SearchInput";

export default CustomInput;