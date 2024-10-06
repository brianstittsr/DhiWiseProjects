import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PerformanceDescription from "../../components/PerformanceDescription";
import { ReactTable } from "../../components/ReactTable";
import RecentNewsSection from "./RecentNewsSection";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const tableData = [
  {
    fullNameRow: "Zakir Hossen",
    titleRow: "UI, UX Designer",
    emailRow: "uxdesigner@gmail.com",
    phoneRow: "+88 222 5554 444",
  },
  {
    fullNameRow: "Zakir Hossen",
    titleRow: "UI, UX Designer",
    emailRow: "uxdesigner@gmail.com",
    phoneRow: "+88 222 5554 444",
  },
  {
    fullNameRow: "Zakir Hossen",
    titleRow: "UI, UX Designer",
    emailRow: "uxdesigner@gmail.com",
    phoneRow: "+88 222 5554 444",
  },
  {
    fullNameRow: "Zakir Hossen",
    titleRow: "UI, UX Designer",
    emailRow: "uxdesigner@gmail.com",
    phoneRow: "+88 222 5554 444",
  },
];

type TableRowType = {
  fullNameRow: string;
  titleRow: string;
  emailRow: string;
  phoneRow: string;
};

export default function BlogDetailsPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("fullNameRow", {
        cell: (info) => (
          <div className="flex">
            <Heading as="h6" className="w-[42%] text-[1.00rem] font-semibold leading-[100%] text-gray-600_02">
              {info.getValue<string>()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading size="headingxs" as="p" className="text-[0.75rem] font-semibold text-gray-900">
              Full Name
            </Heading>
          </div>
        ),
        meta: { width: "14.63rem" },
      }),
      tableColumnHelper.accessor("titleRow", {
        cell: (info) => (
          <div className="flex">
            <Heading as="h6" className="w-[50%] text-[1.00rem] font-semibold leading-[100%] text-gray-600_02">
              {info.getValue<string>()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading size="headingxs" as="p" className="text-[0.75rem] font-semibold text-gray-900">
              Title
            </Heading>
          </div>
        ),
        meta: { width: "14.63rem" },
      }),
      tableColumnHelper.accessor("emailRow", {
        cell: (info) => (
          <div className="flex">
            <Heading as="h6" className="w-[76%] text-[1.00rem] font-semibold leading-[100%] text-gray-600_02">
              {info.getValue<string>()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading size="headingxs" as="p" className="text-[0.75rem] font-semibold text-gray-900">
              Email Address
            </Heading>
          </div>
        ),
        meta: { width: "14.63rem" },
      }),
      tableColumnHelper.accessor("phoneRow", {
        cell: (info) => (
          <div className="flex">
            <Heading as="h6" className="w-[62%] text-[1.00rem] font-semibold leading-[100%] text-gray-600_02">
              {info.getValue<string>()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <Heading size="headingxs" as="p" className="text-[0.75rem] font-semibold text-gray-900">
              Phone Number
            </Heading>
          </div>
        ),
        meta: { width: "13.38rem" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog Details - Dining Room Decor Trends for Spring</title>
        <meta
          name="description"
          content="Explore the latest dining room decor trends for spring. Learn about static websites, their advantages, and when to use them for your online presence."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[6.88rem] bg-gray-50_01 md:gap-[5.13rem] sm:gap-[3.44rem]">
        {/* header section */}
        <Header />

        {/* main content section */}
        <div className="flex flex-col items-center">
          <div className="container-xs md:px-[1.25rem]">
            <div className="flex flex-col items-start gap-[2.13rem]">
              <Heading
                size="heading4xl"
                as="h1"
                className="mt-[0.25rem] text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
              >
                10 Delightful Dining Room Decor Trends for Spring
              </Heading>
              <div className="flex flex-col gap-[5.25rem] self-stretch md:gap-[3.94rem] sm:gap-[2.63rem]">
                <div className="flex items-center gap-[1.00rem] md:flex-col">
                  <div className="flex flex-1 flex-col gap-[1.50rem] md:self-stretch">
                    <Img
                      src="images/img_rectangle_5618_550x996.png"
                      alt="Article Image"
                      className="h-[34.38rem] rounded-[10px] object-cover"
                    />
                    <Text as="p" className="text-[1.13rem] font-normal leading-[180%] text-gray-600_02">
                      <>
                        What a time we are living in! A lot of things are coming back, bringing back nostalgia.
                        Wondering why I am talking about nostalgia and all? Especially when it is supposed to be an
                        article on websites! Well, because some old famous website technology is coming back too. Yes, I
                        am talking about static websites.
                        <br />
                        Long ago, almost all websites were used to be static sites during the early days of the
                        internet. Then dynamic sites came and blew the space. A lot of websites shifted to it. Obviously
                        dynamic sites have their advantages. But static sites are making a comeback. And it’s coming
                        stronger than before. In this article, you will cover the basics of static websites like what is
                        a static website, what are the advantages, and when you should use a static website. Let’s kick
                        things off.
                      </>
                    </Text>
                  </div>
                  <div className="mb-[4.13rem] flex w-[16%] flex-col gap-[1.00rem] self-end md:w-full md:self-auto">
                    <Img
                      src="images/img_facebook_blue_gray_100_01.svg"
                      alt="Facebook Image"
                      className="h-[2.00rem] w-[2.00rem]"
                    />
                    <div className="flex items-center">
                      <Img src="images/img_user_gray_900.svg" alt="User Image" className="h-[2.00rem] w-[2.00rem]" />
                      <div className="flex h-[1.50rem] items-center bg-[url(/public/images/img_frame_1000001658.svg)] bg-cover bg-no-repeat md:h-auto">
                        <Heading size="headingxs" as="h2" className="text-[0.75rem] font-semibold text-gray-900">
                          Share this
                        </Heading>
                      </div>
                    </div>
                    <Img src="images/img_trash.svg" alt="Trash Image" className="h-[2.00rem] w-[2.00rem]" />
                    <Img
                      src="images/img_user_blue_gray_100_01.svg"
                      alt="User Image"
                      className="h-[2.00rem] w-[2.00rem]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[3.00rem]">
                  <div className="flex flex-col items-start justify-center gap-[1.00rem]">
                    <Heading
                      size="heading3xl"
                      as="h3"
                      className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                    >
                      Blockquotes
                    </Heading>
                    <Text as="p" className="text-[1.13rem] font-normal text-gray-600_02">
                      Blockquotes can be nested. Add a &gt;&gt; in front of the paragraph you want to nest.
                    </Text>
                  </div>
                  <div className="flex flex-col items-start gap-[3.00rem]">
                    <div className="flex w-[82%] flex-col items-start justify-center gap-[1.00rem] rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 p-[1.88rem] md:w-full sm:p-[1.25rem]">
                      <Heading
                        size="headinglg"
                        as="h4"
                        className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900"
                      >
                        Performance: Faster Loading Speed
                      </Heading>
                      <div className="flex flex-col gap-[1.13rem] self-stretch">
                        <Text as="p" className="text-[1.13rem] font-normal leading-[180%] text-gray-600_02">
                          Static websites are way faster than dynamic ones. As they don’t have a back-end system, there
                          is no time loss due to database connection. Instead, the lightweight, pre-rendered HTML files
                          load incredibly fast.
                        </Text>
                        <Text as="p" className="text-[1.13rem] font-normal leading-[180%] text-gray-600_02">
                          But why fast loading is important? According to Neil Patel, 47% of people on the internet
                          expect a web page to load in less than 2 seconds.
                        </Text>
                      </div>
                    </div>
                    <div className="mr-[12.88rem] flex flex-col gap-[2.50rem] self-stretch rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[3.13rem] py-[2.38rem] md:mr-0 md:px-[1.25rem] sm:p-[1.25rem]">
                      <PerformanceDescription />
                      <PerformanceDescription
                        performanceTitle="Performance: Faster Loading Speed"
                        firstDescription="Dynamic site CMS like WordPress has a greater dependency. They require an operating system like Linux"
                        secondDescription="Unlike dynamic websites, you don’t have to depend on plugins to add functionalities to your static site. Instead, you can create or include features directly into files. Or, you can insert widgets using a snippet."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[1.50rem]">
                  <div className="flex flex-col items-start justify-center gap-[0.63rem] self-stretch">
                    <Heading
                      size="heading3xl"
                      as="h5"
                      className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                    >
                      Images
                    </Heading>
                    <Text
                      as="p"
                      className="w-[82%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full"
                    >
                      Being a fast loading and more secure website, you can choose a static website for beginner to
                      medium level workload. Hopefully, you have got the answer to what is a static website and why
                      should you use it. Decide carefully does static sites are enough for your need.
                    </Text>
                  </div>
                  <Img
                    src="images/img_rectangle_5619_532x996.png"
                    alt="Secondary Image"
                    className="h-[33.25rem] w-[82%] rounded-[10px] object-contain"
                  />
                </div>
                <div className="flex flex-col items-start gap-[0.88rem]">
                  <Heading
                    size="heading3xl"
                    as="h6"
                    className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                  >
                    Lists
                  </Heading>
                  <div className="flex flex-col self-stretch">
                    <Text
                      as="p"
                      className="w-[82%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full"
                    >
                      Being a fast loading and more secure website, you can choose a static website for beginner to
                      medium level workload. Hopefully, you have got the answer to what is a static website and why
                      should you use it. Decide carefully does static sites are enough for your need.
                    </Text>
                    <div className="mt-[1.38rem] flex flex-col gap-[1.38rem]">
                      <div className="mt-[0.25rem] flex items-start gap-[0.75rem]">
                        <div className="mt-[0.25rem] h-[0.63rem] w-[0.63rem] rounded-[5px] bg-gray-600_02" />
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="self-center text-[1.13rem] font-semibold text-gray-600_02"
                        >
                          Performance: Faster Loading Speed
                        </Heading>
                      </div>
                      <div className="flex items-start gap-[0.75rem]">
                        <div className="mt-[0.25rem] h-[0.63rem] w-[0.63rem] rounded-[5px] bg-gray-600_02" />
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="self-center text-[1.13rem] font-semibold text-gray-600_02"
                        >
                          Less Server-side Dependencies
                        </Heading>
                      </div>
                      <div className="flex items-start gap-[0.75rem] sm:flex-col">
                        <div className="mt-[0.25rem] h-[0.63rem] w-[0.63rem] rounded-[5px] bg-gray-600_02 sm:mt-0" />
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="self-center text-[1.13rem] font-semibold text-gray-600_02"
                        >
                          Flexibility: More Freedom to Develop Websites
                        </Heading>
                      </div>
                      <div className="flex items-start gap-[0.75rem]">
                        <div className="mt-[0.25rem] h-[0.63rem] w-[0.63rem] rounded-[5px] bg-gray-600_02" />
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="self-center text-[1.13rem] font-semibold text-gray-600_02"
                        >
                          Security: A More Secure Website
                        </Heading>
                      </div>
                      <div className="flex items-start gap-[0.75rem] sm:flex-col">
                        <div className="mt-[0.25rem] h-[0.63rem] w-[0.63rem] rounded-[5px] bg-gray-600_02 sm:mt-0" />
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="self-center text-[1.13rem] font-semibold text-gray-600_02"
                        >
                          Scalability: Capability to Handle Massive Traffic
                        </Heading>
                      </div>
                      <div className="flex items-start gap-[0.75rem] sm:flex-col">
                        <div className="mt-[0.25rem] h-[0.63rem] w-[0.63rem] rounded-[5px] bg-gray-600_02 sm:mt-0" />
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="self-center text-[1.13rem] font-semibold text-gray-600_02"
                        >
                          Hosting and Pricing: Saves Your Budget For Good
                        </Heading>
                      </div>
                    </div>
                    <div className="mt-[3.75rem] flex flex-col gap-[1.00rem]">
                      <div className="flex flex-wrap gap-[1.00rem]">
                        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-600_02">
                          01.
                        </Heading>
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="self-end text-[1.13rem] font-semibold text-gray-600_02"
                        >
                          Performance: Faster Loading Speed
                        </Heading>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-[0.88rem]">
                          <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-600_02">
                            02.
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="h6"
                            className="self-end text-[1.13rem] font-semibold text-gray-600_02"
                          >
                            Less Server-side Dependencies
                          </Heading>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-[0.75rem]">
                          <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-600_02">
                            03.
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="h6"
                            className="self-end text-[1.13rem] font-semibold text-gray-600_02"
                          >
                            Flexibility: More Freedom to Develop Websites
                          </Heading>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-[0.75rem]">
                          <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-600_02">
                            04.
                          </Heading>
                          <Heading
                            size="headingmd"
                            as="h6"
                            className="self-end text-[1.13rem] font-semibold text-gray-600_02"
                          >
                            Security: A More Secure Website
                          </Heading>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-[0.75rem]">
                        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-600_02">
                          05.
                        </Heading>
                        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-600_02">
                          Scalability: Capability to Handle Massive Traffic
                        </Heading>
                      </div>
                      <div className="flex flex-wrap gap-[0.75rem]">
                        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-bold text-gray-600_02">
                          06.
                        </Heading>
                        <Heading size="headingmd" as="h6" className="text-[1.13rem] font-semibold text-gray-600_02">
                          Hosting and Pricing: Saves Your Budget For Good
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[0.88rem]">
                  <Heading
                    size="heading3xl"
                    as="h3"
                    className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                  >
                    Link
                  </Heading>
                  <Text as="p" className="w-[82%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
                    <>
                      Yes, a static website may have all its benefits, but is it suitable for you? That’s a big
                      question. It depends on why you are going to build a website, what purpose it will serve. That’s
                      why you must when you should use a static website.
                      <br />
                      The followings are the common applications where using the static website is the best choice. -
                      Blog sites- - Small business websites - Websites Under-Development - Personal Portfolio sites -
                      Websites that contain basic information
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-start gap-[2.38rem]">
                  <div className="flex flex-col items-start justify-center gap-[0.88rem] self-stretch">
                    <Heading
                      size="heading3xl"
                      as="h3"
                      className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                    >
                      Tables
                    </Heading>
                    <Text
                      as="p"
                      className="w-[82%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full"
                    >
                      The followings are the common applications where using the static website is the best choice. -
                      Blog sites- - Small business websites.
                    </Text>
                  </div>
                  <div className="flex w-[82%] justify-center rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 px-[2.50rem] py-[3.13rem] md:w-full md:py-[1.25rem] sm:p-[1.25rem]">
                    <ReactTable
                      bodyProps={{ className: "before:content-['-'] before:opacity-0 before:leading-[1.63rem]" }}
                      cellProps={{ className: "border-blue_gray-100_01 border-b border-dashed" }}
                      className="w-full py-[0.63rem] sm:block sm:overflow-x-auto sm:whitespace-nowrap"
                      columns={tableColumns}
                      data={tableData}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[1.25rem]">
                  <Heading
                    size="heading2xl"
                    as="h4"
                    className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
                  >
                    Writen by
                  </Heading>
                  <div className="flex items-center gap-[0.75rem] self-stretch sm:flex-col">
                    <div className="flex w-[24%] items-center gap-[1.50rem] sm:w-full">
                      <Img
                        src="images/img_profile_picture.png"
                        alt="Profile Image"
                        className="h-[6.25rem] w-[6.25rem] rounded-[50px] object-cover"
                      />
                      <div className="flex flex-1 flex-col items-center gap-[0.25rem]">
                        <Heading
                          size="heading2xl"
                          as="h4"
                          className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
                        >
                          Kristin Watson
                        </Heading>
                        <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-600_02">
                          Co-founder and CDO
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center gap-[0.38rem] px-[0.75rem] sm:self-stretch">
                      <div className="h-[0.50rem] w-[0.50rem] rounded bg-blue_gray-100_01" />
                      <Heading as="h6" className="mt-[0.25rem] self-end text-[1.00rem] font-semibold text-gray-600_02">
                        July 20, 2022
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* recent news section */}
        <RecentNewsSection />
        <div>
          {/* footer section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
