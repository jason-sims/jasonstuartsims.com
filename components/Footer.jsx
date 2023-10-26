import React from 'react';

const Footer = () => {
  return (
    <div className="py-6 w-full flex justify-center transition ease-in-out delay-150 bg-[#B8D8D8] hover:-translate-y-1 hover:scale-200  duration-300 ">
      <a
        href="mailto:jasonstuartsims@outlook.com"
        target="_blank"
        rel="noreferrer"
      >
        <div className="hover:border-b-4 text-[#1b2213] hover:border-[#FFFFFF] text-center mb-2 text-2xl font-bold text-transform: uppercase ">
          Get in Touch
        </div>
      </a>
    </div>
  );
};

export default Footer;
