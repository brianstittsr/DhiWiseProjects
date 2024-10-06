import { Button, Heading, RatingBar, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userName?: React.ReactNode;
  userReviewCount?: React.ReactNode;
  viewProfileButton?: string;
}

export default function UserProfile5({
  userImage = "images/img_rectangle_5615.png",
  userName = "Bruno Fernandes",
  userReviewCount = "4.5 review",
  viewProfileButton = "View Profile",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-full`}>
      <Img
        src={userImage}
        alt="Bruno Image"
        className="h-[17.63rem] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover"
      />
      <div className="flex flex-col items-start gap-[0.38rem] self-stretch rounded-bl-[10px] rounded-br-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[1.25rem] py-[0.88rem]">
        <Heading size="headinglg" as="h5" className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900">
          {userName}
        </Heading>
        <div className="flex items-center gap-[0.88rem] self-stretch">
          <RatingBar value={1} isEditable={true} size={16} className="flex gap-[0.63rem]" />
          <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-900">
            {userReviewCount}
          </Heading>
        </div>
        <Button
          color="blue_gray_100_01"
          variant="outline"
          shape="round"
          className="self-stretch rounded-[10px] !border px-[2.06rem] font-semibold sm:px-[1.25rem]"
        >
          {viewProfileButton}
        </Button>
      </div>
    </div>
  );
}
