import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactInfoSection from "./ContactInfoSection";
import React from "react";

export default function ContactPagePage() {
  return (
    <>
      <Helmet>
        <title>Get in Touch with Relasto Real Estate - Contact Us Today</title>
        <meta
          name="description"
          content="Reach out to Relasto Real Estate for all your property needs in Los Angeles, CA. Our team is ready to assist you with any inquiries. Send us a message or visit our office at 1421 San Pedro St. Let's connect!"
        />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col gap-[6.25rem] bg-gray-50_01 md:gap-[4.69rem] sm:gap-[3.13rem]">
        {/* navigation section */}
        <div className="flex flex-col gap-[3.75rem] sm:gap-[1.88rem]">
          {/* header section */}
          <div>
            <Header />
          </div>

          {/* contact info section */}
          <ContactInfoSection />
        </div>

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
}
