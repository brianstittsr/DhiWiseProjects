import { Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  bookmarkImage?: string;
  bedroomText?: React.ReactNode;
  userImage?: string;
  bathText?: React.ReactNode;
}

export default function PropertyDetails2({
  bookmarkImage = "images/img_bookmark.svg",
  bedroomText = "3 Bed Room",
  userImage = "images/img_user.svg",
  bathText = "1 Bath",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-[1.25rem] flex-1`}>
      <div className="flex items-center gap-[0.56rem]">
        <Img src={bookmarkImage} alt="Bedroom Icon" className="h-[1.00rem] w-[1.00rem]" />
        <Heading size="headingxs" as="p" className="text-[0.75rem] font-semibold text-gray-700">
          {bedroomText}
        </Heading>
      </div>
      <div className="flex items-center gap-[0.56rem]">
        <Img src={userImage} alt="Bathroom Icon" className="h-[1.00rem] w-[1.00rem]" />
        <Heading size="headingxs" as="p" className="text-[0.75rem] font-semibold text-gray-700">
          {bathText}
        </Heading>
      </div>
    </div>
  );
}
