import React from "react";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-a700 shadow-xs",
    gray_900: "bg-gray-900 text-white-a700",
  },
  outline: {
    gray_600_02: "border-gray-600_02 border border-solid text-gray-900",
    gray_700: "border-gray-700 border border-solid text-gray-900",
    blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-gray-900",
    blue_gray_100_02: "border-blue_gray-100_02 border border-solid text-gray-900",
  },
} as const;
const sizes = {
  xs: "h-[1.50rem] px-[0.13rem]",
  "2xl": "h-[3.75rem] px-[0.88rem]",
  xl: "h-[3.50rem] px-[2.13rem] text-[1.00rem]",
  "3xl": "h-[3.75rem] px-[2.13rem] text-[1.13rem]",
  sm: "h-[2.38rem] px-[0.88rem] text-[0.88rem]",
  md: "h-[2.63rem] px-[1.50rem] text-[1.00rem]",
  lg: "h-[3.00rem] px-[1.50rem] text-[1.00rem]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
