import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div className="w-full p-5 text-left md:pl-12">
      <div className="max-w-[1240px] h-screen flex justify-start items-center">
        <div>
          <p className="uppercase text-3xl py-2">Hello! I&apos;m</p>
          <h1 className="uppercase text-8xl py-2">Jason</h1>
          <h1 className="uppercase text-8xl py-2">Sims</h1>
          <p className="uppercase text-3xl py-2">Product Manager | Developer</p>
          <div className="flex py-2 space-x-10 justify-left">
            <a
              href="https://www.linkedin.com/in/jasonstuartsims/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 border-[#F5F5F5] p-3 cursor-pointer hover:scale-105 duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <div>
              <a
                href="https://github.com/jason-sims"
                target="_blank"
                rel="noreferrer"
              >
                <div className="border-2 border-[#F5F5F5] p-3 cursor-pointer hover:scale-105 duration-300">
                  <FaGithub />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
