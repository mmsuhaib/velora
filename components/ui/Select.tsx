import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, id, className, options, placeholder, ...props }, ref) => {
    const selectId = id ?? props.name;
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={selectId} className="text-sm text-charcoal-soft">
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full appearance-none border-b border-line bg-transparent py-2.5 pr-8 text-base text-charcoal outline-none transition-colors duration-200 focus:border-charcoal",
              error && "border-red-800",
              className
            )}
            {...props}
          >
            {placeholder ? (
              <option value="" disabled>
                {placeholder}
              </option>
            ) : null}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-soft"
            aria-hidden
          />
        </div>
        {error ? <p className="text-sm text-red-800">{error}</p> : null}
      </div>
    );
  }
);
Select.displayName = "Select";

export default Select;
