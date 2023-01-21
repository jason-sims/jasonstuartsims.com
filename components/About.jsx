import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id="about" className="max-w-[1240px] h-auto pt-20 p-6 m-auto">
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="w-8/12 h-auto m-auto sm:w-5/12 lg:w-8/12">
          <Image src={AboutImg} alt="/" />
        </div>
        <div>
          <h1 className="uppercase pb-8">About Jason</h1>
          <p className="font-medium text-base text-justify leading-relaxed pt-2">
            I am passionate about understanding user problems and grateful that
            there is a profession where I can both understand and solve them.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed pt-2">
            I grew up in a military family completing high school in Australia
            in 2001. Originally passing on university, my first working decade
            was filled with roles in childcare, manufacturing, IT support,
            training and payroll. In 2013 I completed a Bachelor of Business
            (Management & Leadership) and secured my first product owner role. I
            currently live in London, UK.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed pt-2">
            I have broad experience across the product life cycle developing
            products and services in healthcare, government, publishing,
            insurance and consulting. I am forever curious, I want to understand
            the entire customer journey and make timely, evidence based
            decisions.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed pt-2">
            In my spare time you will find me developing, renovating, spending
            time with my family and dreaming about a sailing holiday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
