import React from "react";

const sizes = {
  textxs: "text-[1.00rem] font-medium sm:text-[0.81rem]",
  headingxs: "text-[0.75rem] font-semibold",
  headings: "text-[1.00rem] font-semibold sm:text-[0.81rem]",
  headingmd: "text-[1.13rem] font-bold sm:text-[0.94rem]",
  headinglg: "text-[1.19rem] font-bold sm:text-[1.00rem]",
  headingxl: "text-[1.25rem] font-extrabold sm:text-[1.06rem]",
  heading2xl: "text-[2.25rem] font-extrabold lg:text-[2.25rem] md:text-[2.13rem] sm:text-[1.88rem]",
  heading3xl: "text-[3.38rem] font-extrabold lg:text-[3.38rem] md:text-[2.88rem] sm:text-[2.81rem]",
  heading4xl: "text-[2.25rem] font-extrabold lg:text-[2.25rem] md:text-[2.13rem] sm:text-[1.88rem]",
  heading5xl: "text-[2.88rem] font-extrabold lg:text-[2.88rem] md:text-[2.63rem] sm:text-[2.44rem]",
  heading6xl: "text-[3.38rem] font-extrabold lg:text-[3.38rem] md:text-[2.88rem] sm:text-[2.81rem]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headings",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
