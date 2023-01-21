import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorkItem = ({
  title,
  role,
  backgroundImg,
  projectUrl,
  summary,
  buttoncta,
}) => {
  return (
    <div className="max-w-md bg-[#B8D8D8] overflow-hidden shadow-md ">
      <div className="px-3 py-4">
        <Image className="w-full rounded border" src={backgroundImg} alt="/" />
      </div>
      <div className="px-6 py-1">
        <span className="mr-2 mb-2 text-sm font-semibold text-transform: uppercase text-[#1b2213]">
          {role}
        </span>
      </div>

      <div className="px-6 py-1">
        <div className="mb-2 text-2xl font-bold text-transform: uppercase text-[#1b2213]">
          {title}
        </div>
        <p className="font-medium text-base text-[#1b2213]">{summary}</p>
      </div>

      <div className="px-3 py-4">
        <Link href={projectUrl}>
          <button className="w-full text-sm text-transform: uppercase rounded bg-[#3d3d3e] py-2 px-4 text-[#fff4eb] hover:bg-[#4f6367]">
            {buttoncta}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WorkItem;
