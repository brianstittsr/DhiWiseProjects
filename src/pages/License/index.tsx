import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContentSection from "./ContentSection";
import React from "react";

export default function LicensePage() {
  return (
    <>
      <Helmet>
        <title>License Terms - Understanding Your Content Rights on Relasto.com</title>
        <meta
          name="description"
          content="Learn about your intellectual property rights and our license terms when you share content on Relasto.com. Stay updated with our policies for a secure experience."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[6.25rem] bg-gray-50_01 md:gap-[4.69rem] sm:gap-[3.13rem]">
        <div className="flex flex-col gap-[3.75rem] sm:gap-[1.88rem]">
          {/* header section */}
          <Header />

          {/* content section */}
          <ContentSection />
        </div>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}
