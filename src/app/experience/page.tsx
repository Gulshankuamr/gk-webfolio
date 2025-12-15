import WorkExperience from "@/components/WorkExperience";
import React from "react";
// import SplashCursor from "../about/SplashCursor";
import MyFreelanceWork from "@/components/MyFreelanceWork";
import AiPortfolioAssistant from "@/components/AiPortfolioAssistant";

function page() {
  return (
    <div className="pt-5 bg-black">
      <    MyFreelanceWork />
      <WorkExperience />
      <AiPortfolioAssistant/>
      {/* <SplashCursor /> */}
    </div>
  );
}

export default page;
