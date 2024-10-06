import { Text, Heading } from "../../components";
import React from "react";

export default function ContentSection() {
  return (
    <>
      {/* content section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[3.75rem] md:px-[1.25rem] sm:gap-[1.88rem]">
          <div className="flex flex-col gap-[2.50rem]">
            <div className="flex flex-col items-start gap-[0.63rem]">
              <Heading
                size="heading5xl"
                as="h1"
                className="text-[2.88rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.63rem] sm:text-[2.25rem]"
              >
                License
              </Heading>
              <Text as="p" className="text-[1.13rem] font-normal text-gray-600_02">
                Last updated: January 2020
              </Text>
            </div>
            <Text as="p" className="w-[82%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
              <>
                Your content remains yours, which means that you retain any intellectual property rights that you have
                in your content. For example, you have intellectual property rights in the creative content you make,
                such as reviews you write. Or you may have the right to share someone else’s creative content if they’ve
                given you their permission.
                <br />
                We need your permission if your intellectual property rights restrict our use of your content. You
                provide Google with that permission through this license.
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-[2.38rem]">
            <div className="flex flex-col items-start gap-[1.75rem]">
              <Heading
                size="heading2xl"
                as="h2"
                className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
              >
                What’s covered
              </Heading>
              <Text as="p" className="text-[1.13rem] font-normal text-gray-600_02">
                This license covers your content if that content is protected by intellectual property rights.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center gap-[1.38rem]">
              <Heading
                size="heading2xl"
                as="h3"
                className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
              >
                What’s not covered
              </Heading>
              <Text as="p" className="w-[82%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
                We use cookies to recognize and monitor users, their on-site behavior, and their preferences for
                accessing their website. These cookies include the IP and time of visits by visitors. Visitors to
                Relasto that do not want cookies put on their browsers should configure their browsers to reject cookies
                before using the Relasto website.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center gap-[1.25rem]">
              <Heading
                size="heading2xl"
                as="h4"
                className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
              >
                Price Updates
              </Heading>
              <Text as="p" className="w-[82%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
                <>
                  We will need to update this policy from time to time to ensure that it remains up-to-date with the
                  latest legal requirements and any improvements to our privacy management practices.
                  <br />
                  When we change the policy, we will make sure that we inform you, if any, of such changes. A copy of
                  this policy’s latest version will always be available at this page.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center gap-[2.00rem]">
              <Heading
                size="heading2xl"
                as="h5"
                className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
              >
                Refund Policy
              </Heading>
              <Text as="p" className="w-[82%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
                But why fast loading is important? According to Neil Patel, 47% of people on the internet expect a web
                page to load in less than 2 seconds.
              </Text>
              <Text as="p" className="w-[82%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
                Static websites are way faster than dynamic ones. As they don’t have a back-end system, there is no time
                loss due to database connection. Instead, the lightweight, pre-rendered HTML files load incredibly fast.
              </Text>
              <Text as="p" className="text-[1.13rem] font-normal text-gray-600_02">
                You may not disclose any information about your order including, but not limited to, Order ID, download
                connection, etc.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
