import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import React from "react";

export default function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Error 404</title>
        <meta
          name="description"
          content="Oops! Something went wrong. The page you're looking for can't be found. Return to the Homepage or explore Listings, Agents, and more."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[7.25rem] bg-gray-50_01 md:gap-[5.44rem] sm:gap-[3.63rem]">
        {/* navigation bar section */}
        <Header className="self-stretch" />

        {/* error message section */}
        <div className="container-xs mb-[0.25rem] flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
          <div className="flex w-[46%] flex-col gap-[1.88rem] md:w-full">
            <Img
              src="images/img_frame_1000001686.svg"
              alt="Image Frame"
              className="h-[30.00rem] w-[92%] object-contain"
            />
            <div className="mx-[6.75rem] flex flex-col items-start justify-center gap-[1.13rem] md:mx-0">
              <Heading
                size="heading3xl"
                as="h1"
                className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
              >
                Something wrong!
              </Heading>
              <Button
                color="gray_600_02"
                size="3xl"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="images/img_arrowright.svg"
                    alt="Arrow Right"
                    className="mb-[0.25rem] h-[1.25rem] w-[1.25rem]"
                  />
                }
                className="ml-[2.75rem] min-w-[9.75rem] gap-[0.63rem] rounded-[10px] !border px-[0.94rem] font-bold md:ml-0"
              >
                Homepage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
