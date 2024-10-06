import { Text, Heading } from "../../components";
import React from "react";

export default function PrivacyPolicyContent() {
  return (
    <>
      {/* privacy policy content section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[3.75rem] md:px-[1.25rem] sm:gap-[1.88rem]">
          <div className="flex flex-col gap-[2.50rem]">
            <div className="flex flex-col items-start gap-[0.25rem]">
              <a href="#" className="mt-[0.38rem] md:text-[2.63rem] sm:text-[2.25rem]">
                <Heading
                  size="heading5xl"
                  as="h1"
                  className="text-[2.88rem] font-extrabold tracking-[0.00rem] text-gray-900"
                >
                  Privacy Policy
                </Heading>
              </a>
              <Text as="p" className="text-[1.13rem] font-normal text-gray-600_02">
                Last updated: January 2020
              </Text>
            </div>
            <Text as="p" className="w-[88%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
              <>
                Hi, welcome to our privacy policy which applies to our customers. This policy sets out how if you are a
                Relasto.com user or visitor to our site, we treat your personal information.
                <br />
                Last updated on March 01, 2020.
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-[2.38rem]">
            <div className="flex flex-col items-start justify-center gap-[1.25rem]">
              <Heading
                size="heading2xl"
                as="h2"
                className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
              >
                1. The type of personal information we collect
              </Heading>
              <Text as="p" className="w-[88%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
                <>
                  Hi, welcome to our privacy policy which applies to our customers. This policy sets out how if you are
                  a Relasto.com user or visitor to our site, we treat your personal information.
                  <br />
                  Last updated on March 01, 2020.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center gap-[1.25rem]">
              <Heading
                size="heading2xl"
                as="h3"
                className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
              >
                2. Cookies and web analytics
              </Heading>
              <Text as="p" className="w-[88%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
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
                3. When do we need to update this policy?
              </Heading>
              <Text as="p" className="w-[88%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
                <>
                  We will need to update this policy from time to time to ensure that it remains up-to-date with the
                  latest legal requirements and any improvements to our privacy management practices.
                  <br />
                  When we change the policy, we will make sure that we inform you, if any, of such changes. A copy of
                  this policy’s latest version will always be available at this page.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center gap-[1.75rem]">
              <Heading
                size="heading2xl"
                as="h5"
                className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
              >
                4. Registration
              </Heading>
              <Text as="p" className="w-[88%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
                <>
                  To use our Service you will need to create an account and complete the registration process at
                  https://Relasto.com/signup (Registration).
                  <br />
                  <br />
                  At Registration, you will select logon credentials for each user of the Service, which may be an
                  employee of the Subscriber or other individuals authorised by the Subscriber to use the Service
                  (Authorised User). Logon details should only be used by the Authorised User to whom they are assigned
                  and cannot be shared with any third parties (including another Authorised User). You are solely
                  responsible for the confidentiality and use of all logon details for your account and those assigned
                  to Authorised Users, as well as for any use or misuse of the Service using Subscriber’s or any
                  Authorised Users’ logon details. You shall notify us immediately if you become aware of any loss,
                  theft or unauthorised use of any logon details, and we reserve the right to delete or change them at
                  any time and for any reason.
                  <br />
                  <br />
                  You warrant and represent to us that the details you provide to us during Registration are accurate,
                  complete and up-to-date. We will hold and treat such information in accordance with the terms of our
                  Privacy Policy.
                  <br />
                  If you or your Participants use a mobile telephone to access our Service, we may need to send SMS
                  messages. You may opt out of this service by replying STOP to the SMS message or by contacting us at
                  support@Relasto.com.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center gap-[1.25rem]">
              <Heading
                size="heading2xl"
                as="h6"
                className="text-[1.50rem] font-bold tracking-[0.00rem] text-gray-900 md:text-[1.38rem]"
              >
                5. Marketing Choices regarding your personal data
              </Heading>
              <Text as="p" className="w-[88%] text-[1.13rem] font-normal leading-[180%] text-gray-600_02 md:w-full">
                Where we have your permission to do so (e.g. if you subscribed to one of our email lists or indicated
                that you are interested in receiving deals or information from us), we will send you email marketing
                messages about products and services which we feel may be of interest to you. You can ‘opt-out’ of such
                communications if you would prefer not to receive them in the future by using the “unsubscribe” facility
                provided in the communication itself.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
