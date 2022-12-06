import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkItem = ({ title, role, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex h-auto w-full border border-white group hover:bg-gradient-to-r from-[#28282B] to-[#F5F5F5]">
      <Image className="group-hover:opacity-5" src={backgroundImg} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="justify-center content-center">
        <h2 className="text-[#28282B] uppercase text-4xl text-center">
          {title}
        </h2>
        <h3 className="text-[#28282B] uppercase pb-4 pt-2 text-center">
          {role}
        </h3>
        <div className="text-center">
        <Link href={projectUrl}>
        <button className="text-center rounded-none bg-[#D6D6DA] hover:bg-[#8FC4EE] text-[#28282B] font-semibold hover:text-[#28282B] py-2 px-4 border border-[#28282B] hover:border-transparent cursor-pointer">
            More Info
          </button>
              </Link>

        </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
