import React from "react";

const sizes = {
  texts: "text-[1.13rem] font-normal not-italic sm:text-[0.94rem]",
  textmd: "text-[1.25rem] font-normal not-italic sm:text-[1.06rem]",
  textxs: "text-[0.88rem] font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "texts",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600_02 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
