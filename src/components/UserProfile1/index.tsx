import { Heading, Button, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userPrice?: React.ReactNode;
  userOwnershipDetails?: React.ReactNode;
}

export default function UserProfile1({
  userPrice = "$15.4M",
  userOwnershipDetails = (
    <>
      Owned from
      <br />
      Properties transactions
    </>
  ),
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start w-[26%] md:w-full gap-[1.13rem]`}>
      <Button color="white_A700" size="2xl" shape="circle" className="w-[3.75rem] rounded-[30px] px-[0.88rem]">
        <Img src="images/img_frame.svg" />
      </Button>
      <div className="flex flex-col items-start justify-center gap-[0.75rem] self-stretch">
        <Heading size="heading5xl" as="h1" className="text-[2.88rem] font-extrabold tracking-[0.00rem] text-gray-900">
          {userPrice}
        </Heading>
        <Heading
          size="headinglg"
          as="h5"
          className="text-[1.25rem] font-semibold leading-[140%] tracking-[0.00rem] text-blue_gray-600"
        >
          {userOwnershipDetails}
        </Heading>
      </div>
    </div>
  );
}
