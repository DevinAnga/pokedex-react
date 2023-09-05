import Image, { StaticImageData } from "next/image";

import PokemonType from "../pokemonTypes/PokemonType";

type PokemonCardProps = {
  name: string;
  imgSrc: StaticImageData;
  types: Array<string>;
};

export default function PokemonCard({ name, imgSrc, types }: PokemonCardProps) {
  return (
    <div>
      <Image
        className="bg-white w-full block rounded-md my-1 mx-auto"
        src={imgSrc}
        alt="A happy Bulbasaur"
      />
      <span className="text-[#919191]">#0001</span>
      <h2 className="mt-2 mb-1 font-bold text-[#313136]">{name}</h2>
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
