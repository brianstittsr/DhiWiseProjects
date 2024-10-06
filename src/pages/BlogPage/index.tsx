import { Helmet } from "react-helmet";
import { Button, Img, SelectBox, Input, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CloseSVG } from "../../components/Input/close.tsx";
import UserProfile7 from "../../components/UserProfile7";
import React, { Suspense } from "react";

const blogPostsGrid = [
  {
    businessButton: "Business",
    titleText: "10 Delightful Dining Room Decor Trends for Spring",
    dateText: "July 20, 2022",
    timeText: "7 min read",
    continueReadingText: "Continue Reading",
  },
  {
    businessButton: "Business",
    titleText: "10 Delightful Dining Room Decor Trends for Spring",
    dateText: "July 20, 2022",
    timeText: "7 min read",
    continueReadingText: "Continue Reading",
  },
  {
    businessButton: "Business",
    titleText: "10 Delightful Dining Room Decor Trends for Spring",
    dateText: "July 20, 2022",
    timeText: "7 min read",
    continueReadingText: "Continue Reading",
  },
  {
    businessButton: "Business",
    titleText: "10 Delightful Dining Room Decor Trends for Spring",
    dateText: "July 20, 2022",
    timeText: "7 min read",
    continueReadingText: "Continue Reading",
  },
  {
    businessButton: "Business",
    titleText: "10 Delightful Dining Room Decor Trends for Spring",
    dateText: "July 20, 2022",
    timeText: "7 min read",
    continueReadingText: "Continue Reading",
  },
  {
    businessButton: "Business",
    titleText: "10 Delightful Dining Room Decor Trends for Spring",
    dateText: "July 20, 2022",
    timeText: "7 min read",
    continueReadingText: "Continue Reading",
  },
  {
    businessButton: "Business",
    titleText: "10 Delightful Dining Room Decor Trends for Spring",
    dateText: "July 20, 2022",
    timeText: "7 min read",
    continueReadingText: "Continue Reading",
  },
  {
    businessButton: "Business",
    titleText: "10 Delightful Dining Room Decor Trends for Spring",
    dateText: "July 20, 2022",
    timeText: "7 min read",
    continueReadingText: "Continue Reading",
  },
  {
    businessButton: "Business",
    titleText: "10 Delightful Dining Room Decor Trends for Spring",
    dateText: "July 20, 2022",
    timeText: "7 min read",
    continueReadingText: "Continue Reading",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function BlogPagePage() {
  const [searchBarValue5, setSearchBarValue5] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Real Estate News & Insights - Stay Updated with Relasto Blog</title>
        <meta
          name="description"
          content="Dive into the latest real estate news and blog articles on market trends, home decor, and more. Our expertly curated content keeps you informed and inspired. Explore our blog for valuable insights and tips."
        />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <div className="flex flex-col gap-[4.25rem] sm:gap-[2.13rem]">
          {/* header section */}
          <Header />
          <div className="flex flex-col items-center">
            {/* main content section */}
            <div className="container-xs md:px-[1.25rem]">
              <div className="flex flex-col gap-[3.50rem] sm:gap-[1.75rem]">
                <div className="flex flex-col gap-[3.75rem] sm:gap-[1.88rem]">
                  <div className="flex flex-col items-start gap-[1.13rem]">
                    <Heading
                      size="heading4xl"
                      as="h1"
                      className="mt-[0.25rem] text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
                    >
                      Real Estate News & Blogs
                    </Heading>
                    <div className="flex gap-[1.00rem] self-stretch md:flex-col">
                      <Input
                        shape="round"
                        name="Search Field"
                        placeholder={`Enter your address`}
                        value={searchBarValue5}
                        onChange={(e) => setSearchBarValue5(e.target.value)}
                        suffix={
                          searchBarValue5?.length > 0 ? (
                            <CloseSVG
                              onClick={() => setSearchBarValue5("")}
                              height={24}
                              width={24}
                              fillColor="#6e6e6eff"
                            />
                          ) : (
                            <Img
                              src="images/img_rewind_gray_600_02.svg"
                              alt="Rewind"
                              className="mb-[0.13rem] h-[1.50rem] w-[1.50rem]"
                            />
                          )
                        }
                        className="w-full gap-[2.13rem] rounded-[10px] border border-solid border-blue_gray-100_01 px-[1.00rem]"
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
                        name="Category Dropdown"
                        placeholder={`Category`}
                        options={dropDownOptions}
                        className="w-full rounded-[10px] border border-solid border-blue_gray-100_01 font-bold !text-gray-600_02"
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
                        name="Popular Dropdown"
                        placeholder={`Popular`}
                        options={dropDownOptions}
                        className="w-full rounded-[10px] border border-solid border-blue_gray-100_01 font-bold !text-gray-600_02"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-center gap-[1.50rem] gap-y-[1.63rem] md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {blogPostsGrid.map((d, index) => (
                        <UserProfile7 {...d} key={"blogGrid" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
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
        </div>
        <div>
          {/* footer section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
