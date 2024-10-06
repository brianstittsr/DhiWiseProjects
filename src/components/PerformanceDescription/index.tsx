import { Text, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  performanceTitle?: React.ReactNode;
  firstDescription?: React.ReactNode;
  secondDescription?: React.ReactNode;
}

export default function PerformanceDescription({
  performanceTitle = "Performance: Faster Loading Speed",
  firstDescription = "Static websites are way faster than dynamic ones. As they don’t have a back-end system, there is no time loss due to database connection. Instead, the lightweight, pre-rendered HTML files load incredibly fast.",
  secondDescription = "But why fast loading is important? According to Neil Patel, 47% of people on the internet expect a web page to load in less than 2 seconds.",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start justify-center gap-[1.00rem] flex-1`}>
      <Heading
        size="headinglg"
        as="h5"
        className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900 sm:text-[1.06rem]"
      >
        {performanceTitle}
      </Heading>
      <div className="flex flex-col gap-[1.13rem] self-stretch sm:gap-[1.13rem]">
        <Text as="p" className="text-[1.13rem] font-normal leading-[180%] text-gray-600_02 sm:text-[0.94rem]">
          {firstDescription}
        </Text>
        <Text as="p" className="text-[1.13rem] font-normal leading-[180%] text-gray-600_02 sm:text-[0.94rem]">
          {secondDescription}
        </Text>
      </div>
    </div>
  );
}
