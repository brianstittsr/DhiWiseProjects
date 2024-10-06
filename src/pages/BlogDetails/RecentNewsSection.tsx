import { Heading } from "../../components";
import BlogDetailsColumnactive from "../../components/BlogDetailsColumnactive";
import React, { Suspense } from "react";

export default function RecentNewsSection() {
  return (
    <>
      {/* recent news section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-[2.38rem] md:px-[1.25rem]">
          <Heading
            size="heading4xl"
            as="h2"
            className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
          >
            Recent News
          </Heading>
          <div className="flex gap-[1.50rem] self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {[...Array(3)].map((d, index) => (
                <BlogDetailsColumnactive key={"businessList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
