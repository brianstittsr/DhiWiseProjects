import { Button, Img, SelectBox, Input, Heading } from "../../components";
import { CloseSVG } from "../../components/Input/close.tsx";
import UserProfile5 from "../../components/UserProfile5";
import React, { Suspense } from "react";

const playerProfilesGrid = [
  {
    userImage: "images/img_rectangle_5615.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5616.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5614.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5614_282x282.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5617.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5618.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5619.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5620.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5621.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5622.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5623.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
  {
    userImage: "images/img_rectangle_5615_282x282.png",
    userName: "Bruno Fernandes",
    userReviewCount: "4.5 review",
    viewProfileButton: "View Profile",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AgentSearchSection() {
  const [searchBarValue18, setSearchBarValue18] = React.useState("");

  return (
    <>
      {/* agent search section */}
      <div className="flex flex-col items-center gap-[3.50rem] sm:gap-[1.75rem]">
        <div className="container-xs md:px-[1.25rem]">
          <div className="flex flex-col items-start gap-[1.13rem]">
            <Heading
              size="heading4xl"
              as="h1"
              className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
            >
              Some Nearby Good Agents
            </Heading>
            <div className="flex gap-[1.00rem] self-stretch md:flex-col">
              <Input
                shape="round"
                name="Address Search"
                placeholder={`Enter your address`}
                value={searchBarValue18}
                onChange={(e) => setSearchBarValue18(e.target.value)}
                suffix={
                  searchBarValue18?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue18("")} height={24} width={24} fillColor="#6e6e6eff" />
                  ) : (
                    <Img
                      src="images/img_rewind_gray_600_02.svg"
                      alt="Rewind"
                      className="mb-[0.13rem] h-[1.50rem] w-[1.50rem]"
                    />
                  )
                }
                className="w-[76%] gap-[2.13rem] rounded-[10px] border border-solid border-blue_gray-100_01 px-[1.00rem] md:w-full"
              />
              <SelectBox
                shape="round"
                indicator={
                  <Img
                    src="images/img_arrowdown_gray_600_02_1.svg"
                    alt="Arrow Down"
                    className="h-[1.50rem] w-[1.50rem]"
                  />
                }
                name="Review Dropdown"
                placeholder={`Review`}
                options={dropDownOptions}
                className="flex-grow rounded-[10px] border border-solid border-blue_gray-100_01 font-bold !text-gray-600_02"
              />
              <Button
                size="3xl"
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_rewind_white_a700.svg"
                    alt="Rewind"
                    className="mb-[0.13rem] h-[1.25rem] w-[1.25rem]"
                  />
                }
                className="flex-1 gap-[0.63rem] rounded-[10px] px-[1.13rem] font-bold md:self-stretch"
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* agent profiles section */}
        <div className="flex flex-col items-center self-stretch">
          <div className="container-xs flex flex-col gap-[3.75rem] md:px-[1.25rem] sm:gap-[1.88rem]">
            <div className="grid grid-cols-4 justify-center gap-[1.50rem] md:grid-cols-2 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {playerProfilesGrid.map((d, index) => (
                  <UserProfile5 {...d} key={"gridLayout" + index} />
                ))}
              </Suspense>
            </div>

            {/* pagination section */}
            <div className="flex justify-center sm:flex-col">
              <div className="flex flex-1 sm:self-stretch">
                <Button
                  color="gray_700"
                  variant="outline"
                  shape="round"
                  className="min-w-[3.00rem] rounded-[10px] !border px-[1.19rem] font-semibold"
                >
                  1
                </Button>
                <Button
                  color="blue_gray_100_02"
                  variant="outline"
                  shape="round"
                  className="ml-[0.25rem] min-w-[3.00rem] rounded-[10px] !border px-[1.06rem] font-semibold"
                >
                  2
                </Button>
                <Button
                  color="blue_gray_100_02"
                  variant="outline"
                  shape="round"
                  className="ml-[0.25rem] min-w-[3.00rem] rounded-[10px] !border px-[1.06rem] font-semibold"
                >
                  3
                </Button>
                <Button
                  color="blue_gray_100_02"
                  variant="outline"
                  shape="round"
                  className="ml-[0.25rem] min-w-[3.00rem] rounded-[10px] !border px-[1.06rem] font-semibold"
                >
                  4
                </Button>
                <Button
                  color="blue_gray_100_02"
                  variant="outline"
                  shape="round"
                  className="ml-[0.25rem] min-w-[3.00rem] rounded-[10px] !border px-[1.06rem] font-semibold"
                >
                  5
                </Button>
              </div>
              <Button
                color="blue_gray_100_02"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_arrowright.svg"
                    alt="Arrow Right"
                    className="mb-[0.25rem] h-[1.00rem] w-[1.00rem]"
                  />
                }
                className="min-w-[8.38rem] gap-[0.25rem] rounded-[10px] !border px-[1.06rem] font-semibold"
              >
                Next Page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
