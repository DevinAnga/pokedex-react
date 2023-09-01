import Link from "next/link";
import Image from "next/image";
import bulbasaur from "../../../public/bulbasaur.png";

export default function Bulbasaur() {
  return (
    <body className="bg-white">
      <Link href="/">this page!</Link>
      <header>
        <div>
          <ul>
            <a href="./index.html">
              <li>Pokédex</li>
            </a>
            <li>Video Games & Apps</li>
            <li>Trading Card Game</li>
            <li>Pokémon TV</li>
            <li>Play! Pokémon Events</li>
            <li>News</li>
          </ul>
        </div>
      </header>
      <main className="block ml-auto mr-auto max-w-[480px]">
        <h1 className="text-center  text-4xl text-black">
          Bulbasaur <span className="text-[#616161] block">#0001</span>
        </h1>
        <div className="flex-1 w-50%">
          <div className="p-2">
            <Image
              className="bg-[#f2f2f2] rounded-md max-w-full"
              src={bulbasaur}
              alt="A happy Bulbasaur"
            />
          </div>
          <div className="flex-1 w-50% p-2">
            <div className="text-center pb-4">
              <p className="text-center text-black text-2xl">
                There is a plant seed right on its back from the day this
                Pokémon is born. The seed slowly grows larger.
              </p>
            </div>
            <div className="bg-[#30a7d7] rounded-md py-0 pt-2 pb-8 grid grid-cols-2">
              <section>
                <h3 className="text-white text-lg font-normal ml-4">Height</h3>
                <ul>
                  <li className="text-black text-large ml-4">2' 04"</li>
                </ul>
              </section>
              <section>
                <h3 className="text-white text-lg font-normal">Category</h3>
                <ul>
                  <li className="text-black text-lg">Seed</li>
                </ul>
              </section>
              <section>
                <h3 className="text-white text-lg font-normal ml-4">Weight</h3>
                <ul>
                  <li className="text-black text-lg ml-4">15.2 lbs</li>
                </ul>
              </section>
              <section>
                <h3 className="text-white text-lg font-normal">Abilities</h3>
                <ul>
                  <li className="text-black text-lg after:content-['?'] after:bg-white after:text-[#30a7d7] after:w-10 after:h-6 after:align-middle after:text-center after:rounded-md after:ml-3">
                    Overgrow
                  </li>
                </ul>
              </section>
              <section>
                <h3 className="text-white text-lg font-normal ml-4">Gender</h3>
                <ul>
                  <li className="text-black text-2xl ml-4">
                    <span className="pr-2">&#9794;</span> &#9792;
                  </li>
                </ul>
              </section>
            </div>
            <div className="pt-4">
              <h2 className="font-normal pb-4">Type</h2>
              <div>
                <ul className="inline-grid grid-cols-3">
                  <li className="w-[150px] py-2 px-0 rounded-md text-center font-base my-0 mx-1 bg-[#9bcc50]">
                    Grass
                  </li>
                  <li className="w-[150px] py-2 px-0 rounded-md text-center font-base my-0 mx-3 text-white bg-[#b97fc9]">
                    Poison
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-base py-4">Weaknesses</h2>
              <div>
                <ul className="inline-grid grid-cols-3">
                  <li className="w-[150px] py-2 px-0 rounded-md text-center font-base my-0 mx-1 text-white bg-[#fd7d24]">
                    Fire
                  </li>
                  <li className="w-[150px] py-2 px-0 rounded-md text-center font-base my-0 mx-3 text-white bg-[#f366b9]">
                    Psychic
                  </li>
                  <li className="w-[150px] py-2 px-0 rounded-md text-center font-base my-0 mx-4 bg-[#51c4e7]">
                    Ice
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
