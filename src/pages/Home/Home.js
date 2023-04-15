import React from "react";
import TopBanner from "./TopBanner";
import Welcome from "./Welcome";
import MeetOurDoctors from "./MeetOurDoctors";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return <div>
    <TopBanner />
    <Welcome />
    <OurServices />
    <WhyChooseUs />
    <MeetOurDoctors />
  </div>;
};

export default Home;
