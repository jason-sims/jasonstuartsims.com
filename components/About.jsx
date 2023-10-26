import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.jpg';
import Timeline from './Timeline';

const About = () => {
  return (
    <div id="about">
      <div className="max-w-[1240px] h-auto pt-20 p-8 m-auto">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="w-8/12 h-auto m-auto sm:w-5/12 lg:w-8/12">
            <Image src={AboutImg} alt="/" />
          </div>
          <div>
            <h1 className="uppercase py-8">About Jason</h1>
            <p className="font-medium text-base pt-3">
              As an experienced Product Leader, I have a distinctive approach
              for building engaging products that bring joy for users and value
              for organisations.
            </p>
            <p className="font-medium text-base pt-3">
              Forever curious, I am passionate about understanding the customer
              journey, identifying opportunities and making timely, evidence
              based decisions that drive growth.
            </p>
            <p className="font-medium text-base pt-3">
              My experience spans across various domains, including healthcare,
              government, publishing, insurance, and consulting. I currently
              live in London with my partner and son.
            </p>

            <p className="font-medium text-base pt-3">
              In my free time you will find me coding, running, building DUPLO
              with my son, renovating and dreaming about my next sailing
              holiday.
            </p>
          </div>
        </div>
      </div>
      <Timeline></Timeline>
    </div>
  );
};

export default About;
