import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile2 from "../../components/UserProfile2";
import CallToAction from "./CallToAction";
import FeaturedProperties from "./FeaturedProperties";
import FeaturesOverview from "./FeaturesOverview";
import HeroSection from "./HeroSection";
import StatisticsSection from "./StatisticsSection";
import TestimonialsSlider from "./TestimonialsSlider";
import React, { Suspense } from "react";

const blogPostsList = [
  {
    userImage: "images/img_image_350x384.png",
    userTitle: "9 Easy-to-Ambitious DIY Projects to Improve Your Home",
    userActionText: "Read the Article",
  },
  {
    userImage: "images/img_image_6.png",
    userTitle: "Serie Shophouse Launch In July, Opportunity For Investors",
    userActionText: "Read the Article",
  },
  {
    userImage: "images/img_image_7.png",
    userTitle: "Looking for a New Place? Use This Time to Create Your Wishlist",
    userActionText: "Read the Article",
  },
];

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>Find Your Dream Property - Explore Listings & Agents</title>
        <meta
          name="description"
          content="Discover your perfect property with our extensive listings. Whether buying, selling, or renting, find ideal homes and commercial spaces with ease. Get started today!"
        />
      </Helmet>

      {/* landing page section */}
      <div className="flex w-full flex-col gap-[6.13rem] bg-white-a700 md:gap-[4.56rem] sm:gap-[3.06rem]">
        {/* main navigation section */}
        <div>
          {/* header section */}
          <div>
            <Header />
          </div>

          {/* hero section */}
          <HeroSection />
        </div>

        {/* features overview section */}
        <FeaturesOverview />

        {/* statistics section */}
        <StatisticsSection />

        {/* featured properties section */}
        <FeaturedProperties />

        {/* call to action section */}
        <CallToAction />

        {/* testimonials slider section */}
        <TestimonialsSlider />

        {/* latest news section */}
        <div className="flex justify-center bg-gray-900 py-[7.50rem] md:py-[1.25rem]">
          <div className="container-xs flex justify-center md:px-[1.25rem]">
            <div className="flex w-full flex-col gap-[7.38rem] md:gap-[5.50rem] sm:gap-[3.69rem]">
              <div className="flex flex-col gap-[3.75rem] sm:gap-[1.88rem]">
                <div className="flex items-center justify-center sm:flex-col">
                  <Heading
                    size="heading4xl"
                    as="h2"
                    className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-white-a700 md:text-[2.13rem] sm:text-[2.00rem]"
                  >
                    News & Consult
                  </Heading>
                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                    <div className="mb-[0.50rem] flex flex-1 justify-end gap-[0.50rem] self-end sm:self-stretch">
                      <Heading size="headingmd" as="h3" className="text-[1.13rem] font-bold text-orange-a700">
                        Explore All
                      </Heading>
                      <Img src="images/img_arrow_left.svg" alt="Arrow Image" className="h-[1.50rem] w-[1.50rem]" />
                    </div>
                  </a>
                </div>
                <div className="flex gap-[1.50rem] md:flex-col">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {blogPostsList.map((d, index) => (
                      <UserProfile2 {...d} key={"blogList" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center gap-[1.88rem] rounded-[10px] bg-gray-400_01 p-[2.50rem] sm:p-[1.25rem]">
                  <div className="flex w-[54%] flex-col items-center justify-center gap-[0.25rem] md:w-full">
                    <Heading
                      size="heading3xl"
                      as="h4"
                      className="text-[1.75rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[1.63rem] sm:text-[1.50rem]"
                    >
                      For Recent Update, News.
                    </Heading>
                    <Text
                      as="p"
                      className="self-stretch text-center text-[1.13rem] font-normal leading-[180%] text-gray-900"
                    >
                      We helps businesses customize, automate and scale up their ad production and delivery.
                    </Text>
                  </div>
                  <div className="flex w-[54%] justify-center gap-[0.50rem] md:w-full md:flex-col">
                    <Input
                      color="gray_50_02"
                      size="xs"
                      shape="round"
                      type="email"
                      name="Email Input"
                      placeholder={`Enter your Email`}
                      className="flex-grow rounded-[10px]"
                    />
                    <Button
                      shape="round"
                      className="min-w-[7.88rem] rounded-[10px] px-[1.50rem] font-semibold sm:px-[1.25rem]"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* newsletter signup section */}
        <div>
          {/* footer section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
