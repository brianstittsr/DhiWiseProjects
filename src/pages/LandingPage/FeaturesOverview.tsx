import { Button, Text, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const searchOptionsGrid = [
  {
    userImage: "images/img_settings.svg",
    userLocationText: (
      <>
        Search <br />
        your location
      </>
    ),
  },
  {
    userImage: "images/img_settings_orange_a700.svg",
    userLocationText: (
      <>
        Visit <br />
        Appointment
      </>
    ),
  },
  {
    userImage: "images/img_thumbs_up.svg",
    userLocationText: (
      <>
        Get your <br />
        dream house
      </>
    ),
  },
  {
    userImage: "images/img_settings_orange_a700_30x30.svg",
    userLocationText: (
      <>
        Enjoy your <br />
        Appointment
      </>
    ),
  },
];

export default function FeaturesOverview() {
  return (
    <>
      {/* features overview section */}
      <div className="flex justify-center">
        <div className="container-xs flex justify-center gap-[1.50rem] md:flex-col md:px-[1.25rem]">
          <div className="flex w-full flex-col items-start justify-center gap-[3.00rem] rounded-[20px] bg-red-100 px-[3.13rem] py-[4.50rem] md:p-[1.25rem]">
            <div className="flex flex-col gap-[0.88rem] self-stretch">
              <Heading
                size="heading4xl"
                as="h2"
                className="text-[2.25rem] font-extrabold leading-[140%] tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
              >
                Simple & easy way to find your dream Appointment
              </Heading>
              <Text as="p" className="text-[1.13rem] font-normal leading-[180%] text-gray-900">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
              </Text>
            </div>
            <Button shape="round" className="min-w-[8.63rem] rounded-[10px] px-[1.50rem] font-semibold sm:px-[1.25rem]">
              Get Started
            </Button>
          </div>
          <div className="ml-[1.50rem] grid w-full grid-cols-2 gap-[1.50rem] md:ml-0 md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {searchOptionsGrid.map((d, index) => (
                <UserProfile {...d} key={"processGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
