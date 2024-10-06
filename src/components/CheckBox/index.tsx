import React from "react";

const variants = {
  primary: "border-gray-900 border-2 border-solid   ",
} as const;
const sizes = {
  xs: "h-[1.13rem] w-[1.13rem] rounded",
  sm: "h-[1.50rem] w-[1.50rem]",
} as const;

type CheckboxProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    onChange: Function;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    onClick: () => void;
  }>;
const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "sm",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className + " flex items-center gap-[0.31rem] cursor-pointer"}>
          <input
            className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          {!!label && <label htmlFor={id}>{label}</label>}
        </div>
      </>
    );
  },
);

export { CheckBox };
