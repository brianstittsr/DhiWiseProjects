import { Img, Text, Heading } from "../../components";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* hero section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[2.38rem] md:px-[1.25rem]">
          <div className="flex flex-col items-center gap-[1.00rem]">
            <Heading
              size="heading6xl"
              as="h1"
              className="text-center text-[3.38rem] font-extrabold leading-[140%] tracking-[-0.06rem] text-gray-900 md:text-[2.88rem] sm:text-[2.50rem]"
            >
              <>
                Reimagining real estate to <br />
                make it easier to unlock.
              </>
            </Heading>
            <Text as="p" className="self-stretch text-center text-[1.13rem] font-normal leading-[180%] text-gray-700">
              <>
                On the other hand, we denounce with righteous indignation and dislike men who <br />
                are so beguiled and demoralized by the charms of pleasure of the moment, <br />
                so blinded by desire, that they cannot foresee the pain and trouble.
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-[1.50rem]">
            <div className="flex gap-[1.50rem] md:flex-col">
              <Img
                src="images/img_rectangle_5592.png"
                alt="First Image"
                className="h-[25.00rem] w-[66%] rounded-[10px] object-contain md:w-full"
              />
              <Img
                src="images/img_rectangle_5593.png"
                alt="Second Image"
                className="h-[25.00rem] w-[32%] rounded-[10px] object-contain md:w-full"
              />
            </div>
            <div className="flex gap-[1.50rem] md:flex-col">
              <Img
                src="images/img_rectangle_5595.png"
                alt="Third Image"
                className="h-[25.00rem] w-[32%] rounded-[10px] object-contain md:w-full"
              />
              <Img
                src="images/img_rectangle_5594.png"
                alt="Fourth Image"
                className="h-[25.00rem] w-[66%] rounded-[10px] object-contain md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
