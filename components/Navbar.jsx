import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import NavLogo from '../public/assets/navLogo.png';

const navItems = [
  {
    path: '/#about',
    name: 'About',
  },
  {
    path: '/#selectwork',
    name: 'Select Work',
  },
  {
    path: 'mailto:jasonstuartsims@outlook.com',
    name: 'Contact',
  },
];

export default function Navbar() {
  let pathname = usePathname() || '/';

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100]">
      <div className=" flex justify-between items-center w-full h-full bg-[#28282B] px-5">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width={50}
            height={50}
            className="cursor-pointer rounded hover:scale-110 hover:border-[#D8B8B8] hover:border-4 duration-300 "
          />
        </Link>

        <div>
          <ul className="hidden md:flex">
            {navItems.map((item, index) => {
              return (
                <Link
                  key={item.path}
                  className={
                    'mx-5 font-medium text-lg hover:underline decoration-4 decoration-[#D8B8B8]'
                  }
                  href={item.path}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </ul>

          <div
            onClick={handleNav}
            className="cursor-pointer hover:scale-105 md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? ' fixed left-0 top-0 w-1/5 min-h-full min-w-fit bg-[#B8D8D8] text-[#28282B] pl-3 pt-3 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div>
          <div className="p-5 flex w-full items-center justify-between">
            <Link href="/">
              <h1 className="pr-10 uppercase text-[#28282B] text-lg hover:underline decoration-4 decoration-[#D8B8B8]">
                Jason Sims
              </h1>
            </Link>
            <div
              onClick={handleNav}
              className="border-1 rounded border-[#28282B] p-2 cursor-pointer hover:scale-110 hover:border-[#D8B8B8] hover:border-2 duration-300"
            >
              <AiOutlineClose />
            </div>
          </div>
        </div>
        <div className="m-4 font-medium text-lg">
          <div className="flex">
            <ul className>
              {navItems.map((item, index) => {
                return (
                  <li
                    key={item.path}
                    className={
                      'py-5 hover:underline decoration-4 decoration-[#D8B8B8]'
                    }
                  >
                    <Link href={item.path}>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-10 flex space-x-10 justify-left">
            <a
              href="https://www.linkedin.com/in/jasonstuartsims/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 rounded border-[#28282B] p-3 cursor-pointer hover:scale-105 hover:border-[#D8B8B8] hover:border-4 duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <div>
              <a
                href="https://github.com/jason-sims"
                target="_blank"
                rel="noreferrer"
              >
                <div className="border-2 rounded border-[#28282B] p-3 cursor-pointer hover:scale-105 hover:border-[#D8B8B8] hover:border-4 duration-300">
                  <FaGithub />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
