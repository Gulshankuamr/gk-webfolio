import WorkExperience from "@/components/WorkExperience";
import React from "react";
// import SplashCursor from "../about/SplashCursor";
import MyFreelanceWork from "@/components/MyFreelanceWork";

function page() {
  return (
    <div className="pt-5 bg-black">
      <    MyFreelanceWork />
      <WorkExperience />

      {/* <SplashCursor /> */}
    </div>
  );
}

export default page;
