import React from 'react';

const Timeline = () => {
  return (
    <div id="timeline" className="max-w-[1240px] p-4 mx-auto">
      <div>
        <h1 className="uppercase py-5">Timeline</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 flex-auto">
        <div className="p-4 flex bg-[#F6FFF8] text-[#28282B] items-start justify-start">
          <p>2018 - Current</p>
          <p>Freelance Product Manager, London</p>
        </div>
        <div className="p-4 flex bg-[#F6FFF8] text-[#28282B] items-start justify-start">
          <p>2016 - 2018</p>
          <p> Product Manager @ psHEALTH, London</p>
        </div>
        <div className="p-4 flex bg-[#F6FFF8] text-[#28282B] items-start justify-start">
          <p>2014 - 2016</p>
          <p>Product Owner @ HealthConnex, Melbourne</p>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
