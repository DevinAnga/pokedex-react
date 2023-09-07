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
      <section className="pt-8 pb-2 px-4 bg-darkGrey max-w-screen-lg m-auto">
        <div className="py-0 px-6 w-full max-w-screen-lg m-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="w-full">
                <form className="mb-4">
                  <div>
                    <label
                      className="text-white text-[1.625rem] pb-2.5"
                      htmlFor="search"
                    >
                      Name or Number
                    </label>
                  </div>
                  <div className="grid grid-flow-col my-4">
                    <input
                      className="border-solid rounded-md border-[#616161] border-2 h-12 max-w-full"
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
                <span className="text-white text-sm font-semibold">
                  Use the Advanced Search to explore Pokémon by type, weakness,
                  Ability, and more!
                </span>
              </div>
            </div>
            <div className="bg-[#4dad5b] rounded-md p-4 mt-12">
              <span className="text-xl text-white self-start font-semibold">
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
            <div className="justify-center items-center max-w-[80%] mt-0 mx-auto mb-10 lg:inline-flex">
              <label
                className="text-[#a4a4a4] text-2xl mb-1 whitespace-nowrap mr-4 lg:justify-items-end"
                htmlFor="poke-search"
              >
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
            <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 lg:grid-cols-4">
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
              <PokemonCard
                name="Charmeleon"
                imgSrc={charmeleon}
                types={["Fire"]}
              />
              <PokemonCard
                name="Charizard"
                imgSrc={charizard}
                types={["Fire", "Flying"]}
              />
              <PokemonCard
                name="Squirtle"
                imgSrc={squirtle}
                types={["Water"]}
              />
              <PokemonCard
                name="Wartortle"
                imgSrc={wartortle}
                types={["Water"]}
              />
              <PokemonCard
                name="Blastoise"
                imgSrc={blastoise}
                types={["Water"]}
              />
              <PokemonCard name="Caterpie" imgSrc={caterpie} types={["Bug"]} />
              <PokemonCard name="Metapod" imgSrc={metapod} types={["Bug"]} />
              <PokemonCard
                name="Butterfree"
                imgSrc={butterfree}
                types={["Bug", "Flying"]}
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
