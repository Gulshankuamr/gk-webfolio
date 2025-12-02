import WorkExperience from "@/components/WorkExperience";
import React from "react";
import SplashCursor from "../about/SplashCursor";
// import FreelanceWork from "@/components/freelanceWork";

function page() {
  return (
    <div className="pt-5 bg-black">
      {/* <FreelanceWork /> */}
      <WorkExperience />

      <SplashCursor />
    </div>
  );
}

export default page;
