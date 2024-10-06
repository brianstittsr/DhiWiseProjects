import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;
const variants = {
  tarWhite: "!border-blue_gray-100_01 border border-solid bg-white-a700",
} as const;
const sizes = {
  xs: "h-[9.50rem] p-[1.13rem] text-[1.13rem]",
} as const;

type TextAreaProps = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
  }>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { className = "", name = "", placeholder = "", shape, size = "xs", variant = "tarWhite", onChange, ...restProps },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

export { TextArea };
