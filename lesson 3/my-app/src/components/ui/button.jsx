import React from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../../lib/utilities";

function Button({ content, onClick, disabled, loading, className }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        `rounded bg-blue-500 px-4 py-2 transition-all hover:bg-blue-700`,
        className,
        {
          "pointer-events-none select-none bg-red-500 bg-opacity-50":
            loading || disabled,
        },
      )}
    >
      {content}
    </button>
  );
}

export default Button;
