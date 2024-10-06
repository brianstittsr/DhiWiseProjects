import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import SearchSection from "./SearchSection";
import React from "react";

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Get Answers</title>
        <meta
          name="description"
          content="Have questions? Find answers to common queries on our FAQ page. Learn more about property listings, agent services, and our platform's features."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[4.63rem] bg-gray-50_01 md:gap-[3.44rem] sm:gap-[2.31rem]">
        {/* header section */}
        <Header />

        {/* search section */}
        <SearchSection />
      </div>
    </>
  );
}
