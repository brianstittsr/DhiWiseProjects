import { SelectBox, Img, Button, Heading } from "../../components";
import UserProfile6 from "../../components/UserProfile6";
import React, { Suspense } from "react";

const customerReviewsList = [
  {
    userDescription:
      "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
    userReviewCount: "4.5 review",
    reviewDate: "02 June 2022",
    userName: "Taylor Wilson",
    userJobTitle: "Product Manager - Static Mania",
  },
  {
    userDescription:
      "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
    userReviewCount: "4.5 review",
    reviewDate: "02 June 2022",
    userName: "Taylor Wilson",
    userJobTitle: "Product Manager - Static Mania",
  },
  {
    userDescription:
      "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
    userReviewCount: "4.5 review",
    reviewDate: "02 June 2022",
    userName: "Taylor Wilson",
    userJobTitle: "Product Manager - Static Mania",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ClientReviews() {
  return (
    <>
      {/* client reviews section */}
      <div className="flex justify-center">
        <div className="container-xs flex justify-center md:px-[1.25rem]">
          <div className="flex w-full flex-col gap-[2.38rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 py-[1.88rem] sm:py-[1.25rem]">
            <div className="flex flex-col gap-[1.38rem]">
              <div className="flex items-center justify-between gap-[1.25rem] px-[2.63rem] md:px-[1.25rem]">
                <Heading
                  size="heading3xl"
                  as="h2"
                  className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                >
                  Clients Review
                </Heading>
                <Button
                  size="3xl"
                  shape="round"
                  rightIcon={
                    <Img
                      src="images/img_plus_white_a700.svg"
                      alt="Plus"
                      className="mb-[0.13rem] h-[1.25rem] w-[1.25rem]"
                    />
                  }
                  className="min-w-[11.88rem] gap-[0.63rem] rounded-[10px] px-[1.00rem] font-bold"
                >
                  Write a Reveiw
                </Button>
              </div>
              <div className="h-[0.06rem] bg-blue_gray-100_01" />
            </div>
            <div className="mx-[1.63rem] flex flex-col items-start gap-[1.50rem] md:mx-0">
              <div className="flex flex-col gap-[1.50rem] self-stretch">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {customerReviewsList.map((d, index) => (
                    <UserProfile6 {...d} key={"agentProfileList" + index} />
                  ))}
                </Suspense>
              </div>
              <SelectBox
                color="gray_600_02"
                size="xs"
                variant="outline"
                shape="round"
                indicator={
                  <Img src="images/img_arrowdown_gray_900.svg" alt="Arrow Down" className="h-[1.00rem] w-[1.00rem]" />
                }
                name="More Dropdown"
                placeholder={`See more`}
                options={dropDownOptions}
                className="w-[10%] rounded-[10px] !border font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
