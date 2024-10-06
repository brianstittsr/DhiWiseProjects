import { Heading, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
  parkingInfo?: React.ReactNode;
  noInfoText?: React.ReactNode;
  outdoorInfo?: React.ReactNode;
  noInfoTextOne?: React.ReactNode;
  acInfo?: React.ReactNode;
  noInfoTextTwo?: React.ReactNode;
  yearBuiltInfo?: React.ReactNode;
  zipcodeInfo?: React.ReactNode;
}

export default function PropertyDetails1({
  parkingInfo = "Parking",
  noInfoText = "No Info",
  outdoorInfo = "Outdoor",
  noInfoTextOne = "No Info",
  acInfo = "A/C",
  noInfoTextTwo = "No Info",
  yearBuiltInfo = "Year Built",
  zipcodeInfo = "2021",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[38%] md:w-full gap-[0.63rem]`}>
      <div className="flex items-center justify-center self-stretch">
        <div className="flex flex-1 items-center gap-[0.63rem]">
          <div className="h-[0.50rem] w-[0.50rem] rounded bg-gray-600_02" />
          <Text as="p" className="mt-[0.25rem] self-end text-[1.13rem] font-normal text-gray-600_02">
            {parkingInfo}
          </Text>
        </div>
        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-900">
          {noInfoText}
        </Heading>
      </div>
      <div className="flex items-center justify-center self-stretch">
        <div className="flex flex-1 items-center gap-[0.63rem]">
          <div className="h-[0.50rem] w-[0.50rem] rounded bg-gray-600_02" />
          <Text as="p" className="text-[1.13rem] font-normal text-gray-600_02">
            {outdoorInfo}
          </Text>
        </div>
        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-900">
          {noInfoTextOne}
        </Heading>
      </div>
      <div className="flex items-center justify-center self-stretch">
        <div className="flex flex-1 items-center gap-[0.63rem]">
          <div className="h-[0.50rem] w-[0.50rem] rounded bg-gray-600_02" />
          <Text as="p" className="text-[1.13rem] font-normal text-gray-600_02">
            {acInfo}
          </Text>
        </div>
        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-900">
          {noInfoTextTwo}
        </Heading>
      </div>
      <div className="flex items-center justify-center self-stretch">
        <div className="flex flex-1 items-center gap-[0.63rem]">
          <div className="h-[0.50rem] w-[0.50rem] rounded bg-gray-600_02" />
          <Text as="p" className="text-[1.13rem] font-normal text-gray-600_02">
            {yearBuiltInfo}
          </Text>
        </div>
        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-900">
          {zipcodeInfo}
        </Heading>
      </div>
    </div>
  );
}
