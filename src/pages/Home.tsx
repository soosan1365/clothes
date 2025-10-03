import React from "react";
import Hero from "../components/Hero.js";
import LatestCollection from "../components/LatestCollection.js";

import BestSeller from "../components/BestSeller.js";
import OurPolicy from "../components/OurPolicy.js";

import NewsletterBox from "../components/NewsletterBox.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
