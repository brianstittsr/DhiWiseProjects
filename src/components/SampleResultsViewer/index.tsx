import { Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  viewingMessage?: React.ReactNode;
  webUrl?: React.ReactNode;
  descriptionText?: React.ReactNode;
}

export default function SampleResultsViewer({
  viewingMessage = "You&#39;re viewing sample results.",
  webUrl = "https://relasto.com",
  descriptionText = "Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam autem suscipit culpa perspiciatis. Exercitationem dolorum dolore perferendis praesen…",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center gap-[1.25rem] flex-1`}>
      <div className="flex flex-col items-start justify-center gap-[0.63rem] self-stretch">
        <Heading size="headinglg" as="h5" className="text-[1.25rem] font-semibold tracking-[0.00rem] text-gray-900">
          {viewingMessage}
        </Heading>
        <div className="flex flex-col items-start gap-[0.25rem] self-stretch">
          <Heading as="h6" className="text-[1.00rem] font-semibold text-gray-600_02">
            {webUrl}
          </Heading>
          <Heading
            size="textxs"
            as="p"
            className="w-[64%] text-[0.88rem] font-normal leading-[150%] text-gray-600_02 md:w-full"
          >
            {descriptionText}
          </Heading>
        </div>
      </div>
      <div className="h-[0.06rem] w-full self-stretch bg-blue_gray-100_01" />
    </div>
  );
}
