import Link from "next/link";
import Image from "next/image";
import bulbasaur from "../../public/bulbasaur.png";
import ivysaur from "../../public/ivysaur.png";
import venusaur from "../../public/venusaur.png";
import charmander from "../../public/charmander.png";
import charmeleon from "../../public/charmeleon.png";
import charizard from "../../public/charizard.png";
import squirtle from "../../public/squirtle.png";
import wartortle from "../../public/wartortle.png";
import blastoise from "../../public/blastoise.png";
import caterpie from "../../public/caterpie.png";
import metapod from "../../public/metapod.png";
import butterfree from "../../public/butterfree.png";
import PokemonCard from "./pokemon/pokemonCard/PokemonCard";
// function toggleMenu() {
//   const myLinks = document.getElementById("myLinks");
//   const navOverlay = document.getElementsByClassName("navigation-overlay")[0];
//   const body = document.getElementById("body");

//   if (myLinks.style.display === "block") {
//     myLinks.style.display = "none";
//     navOverlay.classList.add("hidden");
//     body.classList.remove("navOpened");
//   } else {
//     myLinks.style.display = "block";
//     navOverlay.classList.remove("hidden");
//     body.classList.add("navOpened");
//   }
// }

export default function Home() {
  return (
    <>
      <Link href="/bulbasaur">this page!</Link>
      <header className="bg-white w-full m-auto">
        <div className="block overflow-hidden z-10 text-grey bg-darkGrey relative text-xl">
          <a
            aria-label="Hamburger menu toggles menu"
            className="hamburger-icon icon"
            // onClick={toggleMenu}
          >
            <i className="fa fa-bars"></i>
          </a>
          <a
            href="#"
            className="text-white bg-darkGrey text-xs p-[15px] justify-self-end max-width-[50px] text-center"
          >
            Log In
          </a>
          <div className="bg-white">
            <ul className="nav-list">
              <li className="border-l-[5px] border-[#e3350d] px-2.5 mobile before:content-['?'] before:p-5">
                <a aria-label="Return to Pokedex page here" href="./index.html">
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
        </div>
        <div className="block w-full max-w-screen-lg m-auto bg-white">
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
      <section className="py-8 px-4 bg-darkGrey max-w-screen-lg m-auto">
        <div className="py-0 px-6 w-full max-w-screen-lg m-auto">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <div className="w-full">
                <form className="mb-4 grid grid-cols-1">
                  <div>
                    <label
                      className="text-white text-[1.625rem] pb-2.5"
                      htmlFor="search"
                    >
                      Name or Number
                    </label>
                  </div>
                  <div className="grid grid-flow-col auto-cols-max">
                    <input
                      className="border-solid rounded-md border-[#616161] border-2 h-12"
                      type="text"
                      placeholder=""
                      name="search"
                    />
                    <button
                      type="submit"
                      className="bg-[#de662f] text-white h-12 w-16 rounded-md text-lg ml-5"
                      aria-label="Click to search Pokedex using input text"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
                <span className="text-white text-lg">
                  Use the Advanced Search to explore Pokémon by type, weakness,
                  Ability, and more!
                </span>
              </div>
            </div>
            <div className="bg-[#4dad5b] rounded-md p-6">
              <span className="text-lg self-start">
                Search for a Pokémon by name or using its National Pokémon
                number.
              </span>
            </div>
          </div>
        </div>
      </section>
      <main className="bg-[#f3f3f3]">
        <div className="pt-10 bg-white max-w-screen-lg w-full m-auto">
          <div className="max-w-screen-lg w-full px-6 m-auto">
            <div className="grid grid-cols-1 gap-4 justify-center items-center max-w-[400px] mt-0 mx-auto mb-10 md:grid-cols-2 md:auto-cols-max md:w-[300px] md:justify-end">
              <label className="text-[#a4a4a4] text-xl" htmlFor="poke-search">
                Sort By
              </label>
              <select
                className="bg-[#313131] px-4 text-white text-base h-12 w-full rounded-md"
                name="poke-search"
              >
                <option value="lowest-number">Lowest Number (First)</option>
                <option value="highest-number">Highest Number (First)</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <PokemonCard
                name="Bulbasaur"
                imgSrc={bulbasaur}
                types={["Grass", "Poison"]}
              />
              <PokemonCard
                name="Ivysaur"
                imgSrc={ivysaur}
                types={["Grass", "Poison"]}
              />
              <PokemonCard
                name="Venusaur"
                imgSrc={venusaur}
                types={["Grass", "Poison"]}
              />
              <PokemonCard
                name="Charmander"
                imgSrc={charmander}
                types={["Fire"]}
              />
            </div>
            <div className="mt-2 mb-auto mx-auto">
              <button
                className="bg-[#30a7d7] text-white max-w-full block rounded-md my-12 mx-auto p-2"
                type="button"
              >
                Load more Pokémon
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="navigation-overlay hidden"></div>
    </>
  );
}
