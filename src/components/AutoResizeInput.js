// AutoResizeInput.js
import { useRef, useLayoutEffect } from "react";

export const AutoResizeInput = ({
  value,
  onChange,
  label,
  placeholder,
  className = "",
  minHeight = "38px",
  maxHeight = "200px",
}) => {
  const textareaRef = useRef(null);

  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";

      const scrollHeight = textareaRef.current.scrollHeight;

      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
          {label}
        </label>
      )}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={1}
        className={`w-full px-2 py-2 text-sm bg-slate-50 border border-slate-200 rounded outline-none focus:border-purple-400 focus:bg-white transition-colors resize-none overflow-hidden ${className}`}
        style={{
          minHeight,
          maxHeight,
          // If content exceeds maxHeight, show scrollbar
          overflowY: "auto",
        }}
      />
    </div>
  );
};
