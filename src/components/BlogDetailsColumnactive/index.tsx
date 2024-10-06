import { Img, Heading, Button } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function BlogDetailsColumnactive({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-[1.50rem]`}>
      <div className="flex flex-col gap-[0.75rem] self-stretch">
        <Img
          src="images/img_rectangle_5617_350x384.png"
          alt="Featured Image"
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
            Business
          </Button>
          <div className="flex flex-col gap-[0.88rem] self-stretch">
            <Heading
              size="heading2xl"
              as="h4"
              className="text-[1.50rem] font-bold leading-[135%] tracking-[0.00rem] text-gray-900"
            >
              10 Delightful Dining Room Decor Trends for Spring
            </Heading>
            <div className="flex items-center gap-[0.75rem]">
              <div className="flex w-[24%] items-center justify-center gap-[0.38rem]">
                <div className="h-[0.31rem] w-[0.31rem] rounded-sm bg-blue_gray-100_01" />
                <Heading size="headingxs" as="p" className="self-end text-[0.75rem] font-semibold text-gray-600_02">
                  July 20, 2022
                </Heading>
              </div>
              <div className="flex flex-1 items-center gap-[0.38rem] px-[0.75rem]">
                <div className="h-[0.31rem] w-[0.31rem] rounded-sm bg-blue_gray-100_01" />
                <Heading size="headingxs" as="p" className="text-[0.75rem] font-semibold text-gray-600_02">
                  7 min read
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[0.56rem] self-stretch">
        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-600_02">
          Continue Reading
        </Heading>
        <Img src="images/img_arrow_left_gray_600_02.svg" alt="Arrow Image" className="h-[1.50rem] w-[1.50rem]" />
      </div>
    </div>
  );
}
