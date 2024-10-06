import { Img, Heading, Button } from "./..";
import React from "react";

interface Props {
  className?: string;
  businessButton?: string;
  titleText?: React.ReactNode;
  dateText?: React.ReactNode;
  timeText?: React.ReactNode;
  continueReadingText?: React.ReactNode;
}

export default function UserProfile7({
  businessButton = "Business",
  titleText = "10 Delightful Dining Room Decor Trends for Spring",
  dateText = "July 20, 2022",
  timeText = "7 min read",
  continueReadingText = "Continue Reading",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-[1.50rem]`}>
      <div className="flex flex-col gap-[0.75rem] self-stretch">
        <Img
          src="images/img_rectangle_5617_350x384.png"
          alt="Feature Image"
          className="h-[21.88rem] rounded-lg object-cover"
        />
        <div className="flex flex-col items-start gap-[0.50rem]">
          <Button
            color="blue_gray_100_01"
            size="sm"
            variant="outline"
            shape="round"
            className="min-w-[5.50rem] rounded-[10px] !border px-[0.81rem] font-semibold"
          >
            {businessButton}
          </Button>
          <div className="flex flex-col gap-[0.88rem] self-stretch">
            <Heading
              size="heading2xl"
              as="h4"
              className="text-[1.50rem] font-bold leading-[135%] tracking-[0.00rem] text-gray-900"
            >
              {titleText}
            </Heading>
            <div className="flex items-center gap-[0.75rem]">
              <div className="flex w-[24%] items-center justify-center gap-[0.38rem]">
                <div className="h-[0.31rem] w-[0.31rem] rounded-sm bg-blue_gray-100_01" />
                <Heading size="headingxs" as="p" className="self-end text-[0.75rem] font-semibold text-gray-600_02">
                  {dateText}
                </Heading>
              </div>
              <div className="flex flex-1 items-center gap-[0.38rem] px-[0.75rem]">
                <div className="h-[0.31rem] w-[0.31rem] rounded-sm bg-blue_gray-100_01" />
                <Heading size="headingxs" as="p" className="text-[0.75rem] font-semibold text-gray-600_02">
                  {timeText}
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[0.56rem] self-stretch">
        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-600_02">
          {continueReadingText}
        </Heading>
        <Img src="images/img_arrow_left_gray_600_02.svg" alt="Arrow Image" className="h-[1.50rem] w-[1.50rem]" />
      </div>
    </div>
  );
}
