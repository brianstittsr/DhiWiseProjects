import { Heading } from "../../components";
import UserProfile4 from "../../components/UserProfile4";
import React, { Suspense } from "react";

const teamLeadersGrid = [
  { userImage: "images/img_rectangle_5596.png", userName: "Kausar Pial", userTitle: "CEO" },
  { userImage: "images/img_rectangle_5597.png", userName: "Floyd Miles", userTitle: "President of Sales" },
  { userImage: "images/img_rectangle_5598.png", userName: "Darlene Robertson", userTitle: "Marketing Coordinator" },
  { userImage: "images/img_rectangle_5599.png", userName: "Guy Hawkins", userTitle: "Marketing Coordinator" },
  { userImage: "images/img_rectangle_5600.png", userName: "Jerome Bell", userTitle: "Marketing Coordinator" },
  { userImage: "images/img_rectangle_5601.png", userName: "Ralph Edwards", userTitle: "Marketing Coordinator" },
  { userImage: "images/img_rectangle_5602.png", userName: "Arlene McCoy", userTitle: "Marketing Coordinator" },
  { userImage: "images/img_rectangle_5603.png", userName: "Devon Lane", userTitle: "Marketing Coordinator" },
  { userImage: "images/img_rectangle_5604.png", userName: "Courtney Henry", userTitle: "Marketing Coordinator" },
  { userImage: "images/img_rectangle_5605.png", userName: "Bessie Cooper", userTitle: "Marketing Coordinator" },
  { userImage: "images/img_rectangle_5606.png", userName: "Cody Fisher", userTitle: "Marketing Coordinator" },
  { userImage: "images/img_rectangle_5607.png", userName: "Cody Fisher", userTitle: "Marketing Coordinator" },
];

export default function TeamSection() {
  return (
    <>
      {/* team section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[3.63rem] md:px-[1.25rem] sm:gap-[1.81rem]">
          <Heading
            size="heading4xl"
            as="h2"
            className="text-[2.25rem] font-extrabold tracking-[0.00rem] text-gray-900 md:text-[2.13rem] sm:text-[2.00rem]"
          >
            Relasto Team members
          </Heading>
          <div className="grid grid-cols-4 justify-center gap-[1.50rem] self-stretch md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {teamLeadersGrid.map((d, index) => (
                <UserProfile4 {...d} key={"membersGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
