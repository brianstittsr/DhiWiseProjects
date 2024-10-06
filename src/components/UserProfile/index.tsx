import { Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userLocationText?: React.ReactNode;
}

export default function UserProfile({
  userImage = "images/img_settings.svg",
  userLocationText = (
    <>
      Search <br />
      your location
    </>
  ),
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-full gap-[1.25rem] px-[1.88rem] py-[2.25rem] sm:p-[1.25rem] bg-deep_orange-50 rounded-[20px]`}
    >
      <Img src={userImage} alt="Settings Image" className="h-[1.88rem] w-[1.88rem]" />
      <Heading
        size="heading3xl"
        as="h3"
        className="w-full text-[1.75rem] font-extrabold leading-[135%] tracking-[0.00rem] text-gray-900"
      >
        {userLocationText}
      </Heading>
    </div>
  );
}
