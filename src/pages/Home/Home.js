import React from "react";
import LatestNews from "./LatestNews";
import MeetOurDoctors from "./MeetOurDoctors";
import OurServices from "./OurServices";
import TopBanner from "./TopBanner";
import Welcome from "./Welcome";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return <div>
    <TopBanner />
    <Welcome />
    <OurServices />
    <WhyChooseUs />
    <MeetOurDoctors />
    <LatestNews />
  </div>;
};

export default Home;
