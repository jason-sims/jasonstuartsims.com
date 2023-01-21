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
            Hi, my name is Jason Stuart Sims. I am a Product Manager and
            aspiring Web Developer.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed pt-2">
            Growing up in a military family I completed high school in
            Australia. Originally passing on university, my first working decade
            was filled with roles in childcare, manufacturing, IT support,
            training and payroll. I went back to university to study a Bachelor
            of Business (Management & Leadership) whilst working full time and
            upon completion secured my first product role.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed pt-2">
            I have gained broad experience across the product life cycle
            developing products and services in healthcare, government,
            publishing, insurance and consulting.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed pt-2">
            I currently live in London, UK with my partner and son.
          </p>
          <p className="font-bold text-base text-justify leading-relaxed pt-2">
            Forever curious I want to understand the customer journey, identify
            opportunities and make timely, evidence based decisions that create
            successful products.
          </p>
          <p className="font-medium text-base text-justify leading-relaxed pt-2">
            In my spare time you will find me coding, renovating, spending time
            with my family and dreaming about a sailing holiday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
