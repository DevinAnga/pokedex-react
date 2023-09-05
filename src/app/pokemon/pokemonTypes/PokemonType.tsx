export type PokemonTypeProps = {
  name: string;
};

export default function PokemonType({ name }: PokemonTypeProps) {
  return (
    <li className="flex justify-center items-center rounded-md text-xs h-5 w-[100px] bg-[#9bcc50] text-black">
      {name}
    </li>
  );
}
