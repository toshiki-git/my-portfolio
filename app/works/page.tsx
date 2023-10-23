import React from "react";
import Header from "../components/Header/Header";
import Work from "../components/Works/Work";

const Works = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-3xl font-bold">Works</div>
      </div>
      <Work />
    </div>
  );
};

export default Works;
