import { Input, Img, Heading } from "../../components";
import SampleResultsViewer from "../../components/SampleResultsViewer";
import React, { Suspense } from "react";

const sampleResultsList = [
  {
    viewingMessage: "You&#39;re viewing sample results.",
    webUrl: "https://relasto.com",
    descriptionText:
      "Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam autem suscipit culpa perspiciatis. Exercitationem dolorum dolore perferendis praesen…",
  },
  {
    viewingMessage: "Add CMS or Business Hosting and index your site to see real search results!",
    webUrl: "https://relasto.com",
    descriptionText:
      "Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam autem suscipit culpa perspiciatis. Exercitationem dolorum dolore perferendis praesen…",
  },
  {
    viewingMessage: "You&#39;re viewing sample results.",
    webUrl: "https://relasto.com",
    descriptionText:
      "Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam autem suscipit culpa perspiciatis. Exercitationem dolorum dolore perferendis praesen…",
  },
];

export default function SearchSection() {
  const [searchBarValue22, setSearchBarValue22] = React.useState("");

  return (
    <>
      {/* search section */}
      <div className="mb-[0.25rem] flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[2.00rem] md:px-[1.25rem]">
          <Heading
            size="heading5xl"
            as="h1"
            className="text-[2.88rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.63rem] sm:text-[2.25rem]"
          >
            Search Property / Anything
          </Heading>
          <div className="flex flex-col gap-[1.50rem] self-stretch">
            <Input
              shape="round"
              name="Search Input"
              placeholder={`Search Property / Anything`}
              value={searchBarValue22}
              onChange={(e) => setSearchBarValue22(e.target.value)}
              prefix={
                <Img
                  src="images/img_rewind_gray_600_02.svg"
                  alt="Rewind"
                  className="mb-[0.13rem] h-[1.50rem] w-[1.50rem]"
                />
              }
              suffix={
                searchBarValue22?.length > 0 ? (
                  <Img
                    src="images/img_icon_24px_filter.svg"
                    alt="Icon / 24px / Filter"
                    onClick={() => setSearchBarValue22("")}
                    className="mb-[0.13rem] h-[1.50rem] w-[1.50rem]"
                  />
                ) : null
              }
              className="gap-[0.88rem] rounded-[10px] border border-solid border-blue_gray-100_01 px-[1.63rem] sm:px-[1.25rem]"
            />
            <div className="rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-a700 p-[1.75rem] sm:p-[1.25rem]">
              {/* search results section */}
              <div className="flex flex-col gap-[1.13rem]">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {sampleResultsList.map((d, index) => (
                    <SampleResultsViewer {...d} key={"faqItems" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
