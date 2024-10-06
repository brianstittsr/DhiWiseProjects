import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;

const variants = {
  fill: {
    white_A700: "bg-white-a700 text-gray-600_02",
    gray_50_02: "bg-gray-50_02 text-gray-700",
  },
} as const;

const sizes = {
  xs: "h-[3.00rem] pl-[1.00rem] pr-[2.13rem] text-[0.88rem]",
  sm: "h-[3.75rem] px-[1.00rem] text-[1.13rem]",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
  Partial<{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text font-semibold rounded-[10px]  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);

export { Input };
