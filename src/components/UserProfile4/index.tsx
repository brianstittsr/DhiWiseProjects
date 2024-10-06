import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userName?: React.ReactNode;
  userTitle?: React.ReactNode;
}

export default function UserProfile4({
  userImage = "images/img_rectangle_5596.png",
  userName = "Kausar Pial",
  userTitle = "CEO",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full gap-[1.00rem]`}>
      <Img src={userImage} alt="Profile Image" className="h-[17.63rem] w-full rounded-[10px] object-cover" />
      <div className="flex flex-col items-start justify-center gap-[0.13rem] self-stretch">
        <Heading size="headinglg" as="h5" className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900">
          {userName}
        </Heading>
        <Text as="p" className="text-[1.13rem] font-normal text-gray-700">
          {userTitle}
        </Text>
      </div>
    </div>
  );
}
