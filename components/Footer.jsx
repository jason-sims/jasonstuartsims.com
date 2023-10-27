import React from 'react';

const Footer = () => {
  return (
    <div className="py-3 w-full flex justify-center transition ease-in-out delay-150 bg-[#D8B8B8] hover:bg-[#e3cdcd] hover:-translate-y-1 hover:scale-200  duration-300 ">
      <a
        href="mailto:jasonstuartsims@outlook.com"
        target="_blank"
        rel="noreferrer"
      >
        <div className="text-[#1b2213] text-center  text-2xl font-bold text-transform: uppercase ">
          Get in Touch
        </div>
      </a>
    </div>
  );
};

export default Footer;
