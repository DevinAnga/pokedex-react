import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import PokemonType from "../pokemonTypes/PokemonType";

type PokemonCardProps = {
  name: string;
  imgSrc: StaticImageData;
  types: Array<string>;
};

export default function PokemonCard({ name, imgSrc, types }: PokemonCardProps) {
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(toggleMenu);
  return (
    <div>
      <Image
        className="bg-white w-full block rounded-md my-1 mx-auto"
        src={imgSrc}
        alt="A happy Bulbasaur"
      />
      <span className="text-[#919191]">#0001</span>
      {toggleMenu && (
        <h1>THIS IS A SECRET H1 ONLY REVEALED BY TOGGLING THE MENU</h1>
      )}
      <h2
        className="mt-2 mb-1 font-bold text-[#313136]"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {name}
      </h2>
      <div className="type-list-grid">
        <ul className="grid grid-cols-[repeat(auto-fit,_45%)]">
          {types.map((type) => (
            <PokemonType key={type} name={type} />
          ))}
        </ul>
      </div>
    </div>
  );
}
