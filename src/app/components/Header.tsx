"use client";

import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="bg-white w-full m-auto">
      <div className="block overflow-hidden z-10 text-grey bg-darkGrey relative text-xl">
        <a
          aria-label="Hamburger menu toggles menu"
          className="hamburger-icon icon"
          // onClick={toggleMenu}
        >
          <span
            className="lg:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            ssss
          </span>
          {toggleMenu && (
            <div className="bg-white">
              <ul className="nav-list">
                <li className="border-l-[5px] border-[#e3350d] px-2.5 mobile before:content-['?'] before:p-5">
                  <a
                    aria-label="Return to Pokedex page here"
                    href="./index.html"
                  >
                    Pokédex
                  </a>
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
          <i className="fa fa-bars"></i>
        </a>
        <a
          href="#"
          className="text-white bg-darkGrey text-xs p-[15px] justify-self-end max-width-[50px] text-center"
        >
          Log In
        </a>
      </div>
      <div className="block w-full max-w-screen-lg m-auto bg-white hidden lg:block">
        <ul className="nav-list-desktop grid grid-cols-6">
          <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#e3350d] mobile before:content-['?'] before:p-5">
            <a aria-label="Return to Pokedex page here" href="./index.html">
              Pokédex
            </a>
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
      <h3 className="text-3xl m-auto pt-5 pr-0 pb-4 pl-5 text-[#919191] max-w-screen-lg">
        Pokédex
      </h3>
    </header>
  );
}
