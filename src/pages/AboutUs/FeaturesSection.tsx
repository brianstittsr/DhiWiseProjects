import { Heading, Button, Img } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const financialSummaryList = [
  {
    userPrice: "$15.4M",
    userOwnershipDetails: (
      <>
        Owned from
        <br />
        Properties transactions
      </>
    ),
  },
  { userPrice: "25K+", userOwnershipDetails: "Properties for Buy & sell Successfully" },
  {
    userPrice: "$15.4M",
    userOwnershipDetails: (
      <>
        Owned from
        <br />
        Properties transactions
      </>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <>
      {/* features section */}
      <div>
        <div className="flex justify-center bg-gray-50 py-[3.13rem] md:py-[1.25rem]">
          <div className="container-xs flex items-start justify-between gap-[1.25rem] md:flex-col md:px-[1.25rem]">
            <div className="flex w-[72%] gap-[6.25rem] self-center md:w-full md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {financialSummaryList.map((d, index) => (
                  <UserProfile1 {...d} key={"priceList" + index} />
                ))}
              </Suspense>
            </div>
            <div className="flex w-[18%] flex-col items-start gap-[1.13rem] md:w-full">
              <Button color="white_A700" size="2xl" shape="circle" className="w-[3.75rem] rounded-[30px] px-[0.88rem]">
                <Img src="images/img_settings_orange_a700_60x60.svg" />
              </Button>
              <Heading
                size="heading5xl"
                as="h2"
                className="text-[2.88rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.63rem] sm:text-[2.25rem]"
              >
                600+
              </Heading>
              <Heading
                size="headinglg"
                as="h3"
                className="text-[1.25rem] font-semibold tracking-[0.00rem] text-blue_gray-600"
              >
                Reagular Clients
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
