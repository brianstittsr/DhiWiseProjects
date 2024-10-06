import { Img, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userTitle?: React.ReactNode;
  userActionText?: React.ReactNode;
}

export default function UserProfile2({
  userImage = "images/img_image_350x384.png",
  userTitle = "9 Easy-to-Ambitious DIY Projects to Improve Your Home",
  userActionText = "Read the Article",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-[1.50rem]`}>
      <Img src={userImage} alt="Featured Image" className="h-[21.88rem] w-full rounded-[10px] object-cover" />
      <div className="flex flex-col gap-[1.38rem] self-stretch">
        <Heading
          size="heading2xl"
          as="h4"
          className="text-[1.50rem] font-bold leading-[135%] tracking-[0.00rem] text-white-a700"
        >
          {userTitle}
        </Heading>
        <div className="flex gap-[0.50rem]">
          <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-deep_orange-400">
            {userActionText}
          </Heading>
          <Img src="images/img_arrow_left_deep_orange_400.svg" alt="Arrow Icon" className="h-[1.50rem] w-[1.50rem]" />
        </div>
      </div>
    </div>
  );
}
