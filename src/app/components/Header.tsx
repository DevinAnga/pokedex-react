"use client";
import Link from "next/link";

import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="bg-white w-full m-auto">
      <div className="lg:hidden block overflow-hidden z-10 text-grey bg-darkGrey relative text-xl grid grid-cols-2">
        <div>
          <span
            className="text-white border-r-2 border-black"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            hamburger icon
          </span>
        </div>
        <a
          href="#"
          className="text-white text-xs p-[15px] justify-self-end max-width-[50px] text-center border-l-2 border-black"
        >
          Log In
        </a>
      </div>
      {toggleMenu && (
        <div className="bg-white z-10 relative">
          <ul className="nav-list">
            <li className="border-l-[5px] border-[#e3350d] px-2.5 mobile before:content-['?'] before:p-5">
              <Link href="/">Pokédex</Link>
            </li>
            <li className="border-l-[5px] border-[#ee6b2f] px-2.5 mobile before:content-['?'] before:p-5">
              <a aria-label="Go to Games & Apps page" href="#">
                Video Games & Apps
              </a>
            </li>
            <li className="border-l-[5px] border-[#e6bc2f] px-2.5 mobile before:content-['?'] before:p-5">
              <a aria-label="Go to CCG page" href="#">
                Trading Card Game
              </a>
            </li>
            <li className="border-l-[5px] border-[#4dad5b] px-2.5 mobile before:content-['?'] before:p-5">
              <a aria-label="Go to TV shows page" href="#">
                Pokémon TV
              </a>
            </li>
            <li className="border-l-[5px] border-[#30a7d7] px-2.5 mobile before:content-['?'] before:p-5">
              <a aria-label="Go to Events page" href="#">
                Play! Pokémon Events
              </a>
            </li>
            <li className="border-l-[5px] border-[#1b53ba] px-2.5 mobile before:content-['?'] before:p-5 before:text-orange-900">
              <a aria-label="Go to News page" href="#">
                News
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="block w-full max-w-screen-lg m-auto bg-white hidden lg:block">
        <ul className="nav-list-desktop grid grid-cols-6">
          <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#e3350d] mobile before:content-['?'] before:p-5">
            <Link href="/">Pokédex</Link>
          </li>
          <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#ee6b2f] mobile before:content-['?'] before:p-5">
            <a aria-label="Go to Games & Apps page" href="#">
              Video Games & Apps
            </a>
          </li>
          <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#e6bc2f] mobile before:content-['?'] before:p-5">
            <a aria-label="Go to CCG page" href="#">
              Trading Card Game
            </a>
          </li>
          <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#4dad5b] mobile before:content-['?'] before:p-5">
            <a aria-label="Go to TV shows page" href="#">
              Pokémon TV
            </a>
          </li>
          <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#30a7d7] mobile before:content-['?'] before:p-5">
            <a aria-label="Go to Events page" href="#">
              Play! Pokémon Events
            </a>
          </li>
          <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#1b53ba] mobile before:content-['?'] before:p-5">
            <a aria-label="Go to News page" href="#">
              News
            </a>
          </li>
        </ul>
      </div>
      <h3 className="text-3xl m-auto pt-5 pr-0 pb-4 pl-5 text-[#919191] w-max">
        Pokédex
      </h3>
      {toggleMenu && (
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-white z-0"></div>
      )}
    </header>
  );
}
