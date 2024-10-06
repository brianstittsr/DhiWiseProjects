import { Heading, Img } from "../../components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div className="flex justify-center self-stretch">
        <div className="container-xs flex justify-center gap-[1.50rem] md:flex-col md:px-[1.25rem]">
          <Img
            src="images/img_rectangle_5610.png"
            alt="Main Image"
            className="h-[34.38rem] w-[66%] rounded-[10px] object-contain md:w-full"
          />
          <div className="flex w-[32%] flex-col gap-[1.50rem] md:w-full">
            <Img
              src="images/img_rectangle_5611.png"
              alt="First Image"
              className="h-[16.38rem] rounded-[10px] object-cover"
            />
            <div className="relative h-[16.38rem] content-center md:h-auto">
              <Img
                src="images/img_rectangle_5612.png"
                alt="Second Image"
                className="mx-auto h-[16.38rem] w-full flex-1 rounded-[10px] object-cover"
              />
              <div className="absolute bottom-[0.94rem] right-[1.00rem] m-auto flex gap-[0.38rem] rounded-[10px] bg-white-a700 p-[0.50rem]">
                <Img src="images/img_checkmark_gray_900.svg" alt="Checkmark Icon" className="h-[1.50rem] w-[1.50rem]" />
                <Heading size="headingmd" as="h1" className="text-[1.13rem] font-bold text-gray-900">
                  3 more
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
