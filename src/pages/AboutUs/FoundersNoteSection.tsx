import { Heading, Text, Img } from "../../components";
import UserProfile3 from "../../components/UserProfile3";
import React, { Suspense } from "react";

const historicalMilestonesList = [
  {
    pointText: "1",
    titleText: "It all started in 1995",
    descriptionText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
  },
  {
    pointText: "2",
    titleText: "Donate launches in 2007",
    descriptionText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
  },
  {
    pointText: "3",
    titleText: "Relasto holds its initial public offering in 2008",
    descriptionText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
  },
];

export default function FoundersNoteSection() {
  return (
    <>
      {/* founders note section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[6.25rem] md:gap-[4.69rem] md:px-[1.25rem] sm:gap-[3.13rem]">
          <div className="mr-[3.38rem] flex items-center md:mr-0 md:flex-col">
            <div className="flex flex-1 flex-col gap-[3.50rem] md:self-stretch sm:gap-[1.75rem]">
              <div className="flex flex-col items-start justify-center gap-[1.13rem]">
                <Heading
                  size="heading4xl"
                  as="h2"
                  className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
                >
                  A note from our founders.
                </Heading>
                <Text as="p" className="w-[86%] text-[1.13rem] font-normal leading-[180%] text-gray-700 md:w-full">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour,
                </Text>
              </div>
              <div>
                <div className="mr-[5.25rem] flex flex-col gap-[1.88rem] md:mr-0">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {historicalMilestonesList.map((d, index) => (
                      <UserProfile3 {...d} key={"listPoints" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle_20_588x530.png"
              alt="Founder Image"
              className="h-[36.75rem] w-[46%] rounded-[10px] object-contain md:w-full"
            />
          </div>
          <div className="ml-[3.13rem] flex items-center md:ml-0 md:flex-col">
            <Img
              src="images/img_rectangle_20_588x496.png"
              alt="Vision Image"
              className="h-[36.75rem] w-[42%] rounded-[10px] object-contain md:w-full"
            />
            <div className="flex flex-1 flex-col items-end gap-[3.50rem] md:self-stretch sm:gap-[1.75rem]">
              <div className="flex w-[76%] flex-col items-start gap-[0.88rem] md:w-full">
                <Heading
                  size="heading4xl"
                  as="h3"
                  className="mt-[0.25rem] text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
                >
                  Our vision is simple.
                </Heading>
                <Text as="p" className="w-full text-[1.13rem] font-normal leading-[180%] text-gray-700">
                  <>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On the
                    other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                    demoralized by the charms of pleasure of the moment.
                    <br />
                    In a free hour, On the other hand, we denounce with righteous indignation and dislike men .
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.50rem]">
                <Heading
                  size="headinglg"
                  as="h4"
                  className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                >
                  Kausar Pial
                </Heading>
                <Heading size="headingmd" as="h5" className="text-[1.13rem] font-semibold text-gray-700">
                  CEO at Static Mania
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
