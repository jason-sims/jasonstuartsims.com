import React from 'react';
import portfolioImg from '../public/assets/workitem/portfolio.jpg';
import mojImg from '../public/assets/workitem/moj.jpg';
import WorkItem from './WorkItem';

const SelectWork = () => {
  return (
    <div id="selectwork" className="max-w-[1240px] h-auto px-5 py-20 m-auto">
      <h1 className="uppercase pb-8 text-center text-[#B8D8D8] ">
        Select Work
      </h1>

      <div className="grid gap-5 place-items-center ">
        <WorkItem
          title="Book a Secure Move"
          backgroundImg={mojImg}
          projectUrl="/bookasecuremove"
          role="Senior Product Manager"
          summary="A service to request secure prisoner moves, complete complex risk assesments and monitor prisoner events in real time."
          buttoncta="Read the case study"
        />
        <WorkItem
          title="Portfolio"
          backgroundImg={portfolioImg}
          projectUrl="https://github.com/jason-sims/jasonstuartsims.com"
          role="Web Developer"
          summary="My portfolio site built using Next.js & Tailwind"
          buttoncta="Go to Github"
        />
      </div>
    </div>
  );
};

export default SelectWork;
