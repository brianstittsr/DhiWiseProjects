import { Text, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  pointText?: React.ReactNode;
  titleText?: React.ReactNode;
  descriptionText?: React.ReactNode;
}

export default function UserProfile3({
  pointText = "1",
  titleText = "It all started in 1995",
  descriptionText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex sm:flex-col items-start gap-[1.63rem] flex-1`}>
      <Heading
        size="headingxl"
        as="h5"
        className="flex h-[2.13rem] w-[2.13rem] items-center justify-center rounded-[16px] border-2 border-solid border-gray-900 text-center text-[1.25rem] font-extrabold tracking-[0.00rem] text-gray-900"
      >
        {pointText}
      </Heading>
      <div className="flex flex-1 flex-col items-start justify-center gap-[1.00rem] self-center">
        <Heading size="headingxl" as="h5" className="text-[1.38rem] font-bold tracking-[0.00rem] text-gray-900">
          {titleText}
        </Heading>
        <Text as="p" className="w-full text-[1.13rem] font-normal leading-[180%] text-gray-700">
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}
