import { Heading, Button, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function LandingPageCard({ ...props }: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full`}>
      <Img
        src="images/img_image_260x384.png"
        alt="Main Image"
        className="h-[16.25rem] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
      />
      <div className="flex flex-col gap-[1.50rem] self-stretch rounded-bl-[10px] rounded-br-[10px] border border-solid border-red-100_01 bg-gray-50_01 px-[1.25rem] py-[1.88rem] sm:py-[1.25rem]">
        <div className="flex items-center gap-[0.75rem]">
          <Img src="images/img_linkedin_gray_900.svg" alt="Linkedin Icon" className="h-[1.50rem] w-[1.50rem]" />
          <Heading as="h6" className="self-end text-[1.00rem] font-semibold text-gray-900">
            2861 62nd Ave, Oakland, CA 94605
          </Heading>
        </div>
        <div className="flex flex-col gap-[1.13rem]">
          <div className="flex justify-center">
            <div className="flex items-center gap-[0.75rem]">
              <Img src="images/img_bookmark.svg" alt="Bedroom Icon" className="h-[1.25rem] w-[1.25rem]" />
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                3 Bed Room
              </Heading>
            </div>
            <div className="flex flex-1 items-center gap-[0.75rem] px-[2.13rem] sm:px-[1.25rem]">
              <Img src="images/img_user.svg" alt="Bathroom Icon" className="h-[1.25rem] w-[1.25rem]" />
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                1 Bath
              </Heading>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center gap-[0.75rem]">
              <Img src="images/img_microphone.svg" alt="Square Footage Icon" className="h-[1.25rem] w-[1.25rem]" />
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                1,032 sqft
              </Heading>
            </div>
            <div className="flex flex-1 items-center gap-[0.75rem] px-[2.63rem] md:px-[1.25rem]">
              <Img src="images/img_user_gray_700.svg" alt="Family Icon" className="h-[1.25rem] w-[1.25rem]" />
              <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-700">
                Family
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[1.94rem]">
          <Button shape="round" className="min-w-[9.75rem] rounded-[10px] px-[1.88rem] font-semibold sm:px-[1.25rem]">
            View Details
          </Button>
          <Heading size="heading2xl" as="h4" className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900">
            $649,900
          </Heading>
        </div>
      </div>
    </div>
  );
}
