import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const inputId = id ?? props.name;
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="text-sm text-charcoal-soft">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "border-b border-line bg-transparent py-2.5 text-base text-charcoal outline-none transition-colors duration-200 placeholder:text-charcoal-soft/50 focus:border-charcoal",
            error && "border-red-800",
            className
          )}
          {...props}
        />
        {error ? <p className="text-sm text-red-800">{error}</p> : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
