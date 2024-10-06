import React from "react";
import Select, { Props } from "react-select";

const shapes = {
  round: "rounded-[10px]",
} as const;
const variants = {
  outline: {
    gray_600_02: "border-gray-600_02 border border-solid text-gray-900",
  },
  fill: {
    white_A700: "bg-white-a700 text-gray-700",
  },
} as const;
const sizes = {
  xs: "h-[3.00rem] pl-[1.13rem] pr-[2.13rem] text-[1.00rem]",
  sm: "h-[3.75rem] pl-[1.00rem] pr-[2.13rem] text-[1.13rem]",
} as const;

type selectOptionType = { value: string; label: string };
type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    [x: string]: any;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: keyof (typeof variants)[keyof typeof variants];
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            indicatorsContainer: (provided) => ({
              ...provided,
              padding: undefined,
              flexShrink: undefined,
              width: "max-content",
              "& > div": { padding: 0 },
            }),
            container: (provided) => ({
              ...provided,
              zIndex: 0,
              alignItems: "center",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "none !important",
              minHeight: "auto",
              width: "100%",
              flexWrap: undefined,
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              display: "flex",
              minWidth: "max-content",
              width: "100%",
              backgroundColor: state.isSelected ? "#191919" : "transparent",
              color: state.isSelected ? "#ffffff" : "inherit",
              "&:hover": {
                backgroundColor: "#191919",
                color: "#ffffff",
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
              display: "flex",
              flexWrap: undefined,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            menu: (base) => ({ ...base, minWidth: "max-content", width: "max-content" }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  },
);

export { SelectBox };
