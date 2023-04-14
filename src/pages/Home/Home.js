import React from "react";
import TopBanner from "./TopBanner";
import Welcome from "./Welcome";
import MeetOurDoctors from "./MeetOurDoctors";
import OurServices from "./OurServices";

const Home = () => {
  return <div>
    <TopBanner />
    <Welcome />
    <OurServices />
    <MeetOurDoctors />
  </div>;
};

export default Home;
