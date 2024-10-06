import { Heading, Img, RatingBar } from "./..";
import React from "react";

interface Props {
  className?: string;
  userDescription?: React.ReactNode;
  userReviewCount?: React.ReactNode;
  reviewDate?: React.ReactNode;
  userName?: React.ReactNode;
  userJobTitle?: React.ReactNode;
}

export default function UserProfile6({
  userDescription = "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
  userReviewCount = "4.5 review",
  reviewDate = "02 June 2022",
  userName = "Taylor Wilson",
  userJobTitle = "Product Manager - Static Mania",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center gap-[2.50rem] px-[1.88rem] py-[2.38rem] sm:p-[1.25rem] border-blue_gray-100_01 border border-solid bg-white-a700 flex-1 rounded-[20px]`}
    >
      <Heading
        size="heading2xl"
        as="h4"
        className="w-full text-[1.50rem] font-semibold leading-[165%] text-gray-600_02 md:text-[1.38rem]"
      >
        {userDescription}
      </Heading>
      <div className="flex flex-col gap-[1.50rem] self-stretch">
        <div className="flex gap-[3.13rem] sm:flex-col">
          <div className="flex items-center gap-[0.63rem]">
            <RatingBar value={1} isEditable={true} size={24} starCount={4} className="flex gap-[0.63rem]" />
            <Heading
              size="headinglg"
              as="h5"
              className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-600_02"
            >
              {userReviewCount}
            </Heading>
          </div>
          <Heading
            size="headinglg"
            as="h5"
            className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-600_02"
          >
            {reviewDate}
          </Heading>
        </div>
        <div className="flex items-center gap-[1.00rem]">
          <Img
            src="images/img_ellipse_2695.png"
            alt="Profile Image"
            className="h-[5.00rem] w-[5.00rem] rounded-[40px] object-cover"
          />
          <div className="flex flex-1 flex-col items-start justify-center gap-[0.25rem]">
            <Heading
              size="heading3xl"
              as="h3"
              className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
            >
              {userName}
            </Heading>
            <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-900">
              {userJobTitle}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
