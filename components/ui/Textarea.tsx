import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className, rows = 5, ...props }, ref) => {
    const textareaId = id ?? props.name;
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={textareaId} className="text-sm text-charcoal-soft">
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            "resize-none border-b border-line bg-transparent py-2.5 text-base text-charcoal outline-none transition-colors duration-200 placeholder:text-charcoal-soft/50 focus:border-charcoal",
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
Textarea.displayName = "Textarea";

export default Textarea;
