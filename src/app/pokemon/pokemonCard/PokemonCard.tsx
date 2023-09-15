"use client";

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
        className="bg-[#f2f2f2] w-full block rounded-md my-1 mx-auto"
        src={imgSrc}
        alt="A happy Bulbasaur"
      />
      <span className="text-[#919191]">#0001</span>
      <h2
        className="mt-2 mb-1 font-bold text-[#313136] text-base md:text-2xl"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {name}
      </h2>
      <div>
        <ul className="flex gap-x-1 mb-4">
          {types.map((type) => (
            <PokemonType key={type} name={type} />
          ))}
        </ul>
      </div>
    </div>
  );
}
