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
      <header className="bg-white w-full lg m-auto">
        <div className="block overflow-hidden z-10 text-grey bg-darkGrey relative text-xl lg">
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
          <div id="myLinks" className="bg-white">
            <ul className="nav-list">
              <li className="border-l-[5px] border-[#e3350d] px-2.5 mobile before:content-['?'] before:p-5">
                <a aria-label="Return to Pokedex page here" href="./index.html">
                  Pokédex
                </a>
              </li>
              <li className="border-l-[5px] border-[#ee6b2f] px-2.5 mobile before:content-['?'] before:p-5">
                Video Games & Apps
              </li>
              <li className="border-l-[5px] border-[#e6bc2f] px-2.5 mobile before:content-['?'] before:p-5">
                Trading Card Game
              </li>
              <li className="border-l-[5px] border-[#4dad5b] px-2.5 mobile before:content-['?'] before:p-5">
                Pokémon TV
              </li>
              <li className="border-l-[5px] border-[#30a7d7] px-2.5 mobile before:content-['?'] before:p-5">
                Play! Pokémon Events
              </li>
              <li className="border-l-[5px] border-[#1b53ba] px-2.5 mobile before:content-['?'] before:p-5 before:text-orange-900">
                News
              </li>
            </ul>
          </div>
        </div>
        <div className="block w-full max-w-screen-lg m-auto bg-white">
          <div className="bg-white">
            <ul className="nav-list-desktop grid grid-cols-6">
              <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#e3350d] mobile before:content-['?'] before:p-5">
                <a aria-label="Return to Pokedex page here" href="./index.html">
                  Pokédex
                </a>
              </li>
              <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#ee6b2f] mobile before:content-['?'] before:p-5">
                Video Games & Apps
              </li>
              <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#e6bc2f] mobile before:content-['?'] before:p-5">
                Trading Card Game
              </li>
              <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#4dad5b] mobile before:content-['?'] before:p-5">
                Pokémon TV
              </li>
              <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#30a7d7] mobile before:content-['?'] before:p-5">
                Play! Pokémon Events
              </li>
              <li className="text-center text-base text-black pb-5 border-b-[5px] border-[#1b53ba] mobile before:content-['?'] before:p-5">
                News
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-3xl m-auto pt-5 pr-0 pb-4 pl-5 text-[#919191] max-w-screen-lg">
          Pokédex
        </h3>
      </header>
      <section
        id="search-header"
        className="py-8 px-4 bg-darkGrey max-w-screen-lg m-auto"
      >
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
                      id="search"
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
      <main id="main" className="bg-[#f3f3f3]">
        <div className="pt-10 bg-white max-w-screen-lg w-full m-auto">
          <div className="max-w-screen-lg w-full py-0 px-6 m-auto">
            <div className="grid grid-cols-1 gap-4 justify-center items-center max-w-[400px] mt-0 mx-auto mb-10 md:grid-cols-2 md:auto-cols-max md:w-[300px] md:justify-end">
              <label className="text-[#a4a4a4] text-xl" htmlFor="poke-search">
                Sort By
                <br />
              </label>
              <select
                className="bg-[#313131] py-0 px-4 text-white text-base h-12 w-full rounded-md"
                name="poke-search"
                id="poke-search"
              >
                <option value="lowest-number">Lowest Number (First)</option>
                <option value="highest-number">Highest Number (First)</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
            </div>
            <div className="grid gap-y-50 gap-x-15 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={bulbasaur}
                  alt="A happy Bulbasaur"
                />
                <span className="text-[#919191]">#0001</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">
                  Bulbasaur
                </h2>
                <div className="type-list-grid">
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#9bcc50] text-black">
                      Grass
                    </li>
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#b97fc9]">
                      Poison
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={ivysaur}
                  alt="A regal Ivysaur"
                />
                <span className="text-[#919191]">#0002</span>
                <h2 className="mt-2 mb-1 font-bold text-[#313136]">Ivysaur</h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#9bcc50] text-black">
                      Grass
                    </li>
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#b97fc9]">
                      Poison
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={venusaur}
                  alt="An angry Venusaur"
                />
                <span className="text-[#919191]">#0003</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">
                  Venusaur
                </h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#9bcc50] text-black">
                      Grass
                    </li>
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#b97fc9]">
                      Poison
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={charmander}
                  alt="A happy Charmander"
                />
                <span className="text-[#919191]">#0004</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">
                  Charmander
                </h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#fd7d24]">
                      Fire
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={charmeleon}
                  alt="A regal Charmeleon"
                />
                <span className="text-[#919191]">#0005</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">
                  Charmeleon
                </h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#fd7d24]">
                      Fire
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={charizard}
                  alt="A Regal Charizard"
                />
                <span className="text-[#919191]">#0006</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">
                  Charizard
                </h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#fd7d24]">
                      Fire
                    </li>
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-gradient-to-b from-[#3dc7ef] from-0% via-[#3dc7ef] via-50% to-[#bdb9b8] to-50% text-black">
                      Flying
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={squirtle}
                  alt="A silly Squirtle"
                />
                <span className="text-[#919191]">#0007</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">
                  Squirtle
                </h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#4592c4] text-[white]">
                      Water
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={wartortle}
                  alt="A squared up Wartortle"
                />
                <span className="text-[#919191]">#0008</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">
                  Wartortle
                </h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#4592c4] text-[white]">
                      Water
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={blastoise}
                  alt="A smug Blastoise"
                />
                <span className="text-[#919191]">#0009</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">
                  Blastoise
                </h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#4592c4] text-[white]">
                      Water
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={caterpie}
                  alt="A cute Caterpie"
                />
                <span className="text-[#919191]">#00010</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">
                  Caterpie
                </h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#729f3f]">
                      Bug
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={metapod}
                  alt="A sleepy Metapod"
                />
                <span className="text-[#919191]">#0011</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">Metapod</h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#729f3f]">
                      Bug
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  className="bg-white w-full block rounded-md my-1 mx-auto"
                  src={butterfree}
                  alt="A curious Butterfree"
                />
                <span className="text-[#919191]">#0012</span>
                <h2 className="mt-2 mb-1  font-bold text-[#313136]">
                  Butterfree
                </h2>
                <div>
                  <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#729f3f]">
                      Bug
                    </li>
                    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-gradient-to-b from-[#3dc7ef] from-0% via-[#3dc7ef] via-50% to-[#bdb9b8] to-50% text-black">
                      Flying
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="max-w-[80%] mt-2 mr-auto mb-auto ml-auto">
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
