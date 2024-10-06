import { Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  priceText?: React.ReactNode;
  paymentMethodText?: React.ReactNode;
}

export default function ProductPriceInfo({
  priceText = "$649,900",
  paymentMethodText = "Online / Cash Payment",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[48%] md:w-full gap-[0.25rem] px-[1.50rem] py-[0.38rem] sm:px-[1.25rem] border border-solid bg-white-a700 rounded-[10px]`}
    >
      <Heading size="heading2xl" as="h4" className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900">
        {priceText}
      </Heading>
      <Heading size="headingxs" as="p" className="text-[0.75rem] font-semibold text-gray-600_02">
        {paymentMethodText}
      </Heading>
    </div>
  );
}
