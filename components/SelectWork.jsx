import Image from "next/image";
import Link from "next/link";
import React from "react";
import portfolioImg from "../public/assets/workitem/portfolio.jpg";
import mojImg from "../public/assets/workitem/moj.jpg";
import WorkItem from "./WorkItem";

const SelectWork = () => {
  return (
    <div id="selectwork" className="max-w-[1240px] h-auto pt-20 p-4 m-auto">
        <h1 className="uppercase py-5">Select Work</h1>
        <div className="grid md:grid-cols-2 gap-5">
          <WorkItem
            title="Portfolio"
            backgroundImg={portfolioImg}
            projectUrl="/portfolio"
            role="Developer"
          />
          <WorkItem
            title="Book a Secure Move"
            backgroundImg={mojImg}
            projectUrl="/bookasecuremove"
            role="Senior Product Manager"
          />
        </div>
      </div>
  );
};

export default SelectWork;
