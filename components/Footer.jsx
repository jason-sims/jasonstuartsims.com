import React from 'react';

const Footer = () => {
  return (
    <div className="py-4 w-full flex justify-center transition ease-in-out delay-150 bg-[#28282B] hover:-translate-y-1 hover:scale-200 hover:bg-[#8FC4EE] duration-300 ">
      <a
        href="mailto:jason_sims84@hotmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="hover:border-b-4 hover:border-[#F5F5F5] uppercase italic text-center  ">
          Get in touch
        </h2>
      </a>
    </div>
  );
};

export default Footer;
