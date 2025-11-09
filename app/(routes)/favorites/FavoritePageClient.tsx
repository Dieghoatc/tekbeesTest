'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Result } from "@/app/libs/api/types/rickAndMortyTypes";
import { CharacterStatus } from "@/app/components/CharacterStatus";

export default function FavoritosPageClient() {
  const [favorites] = useState<Result[]>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("favorites") : null;
    return stored ? JSON.parse(stored) : [];
  });

  if (!favorites.length) {
    return <p className="text-center text-gray-600 mt-10">Sin favoritos</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
      {favorites.map(character => (
        <div key={character.id}>
          <div className="flex items-center gap-4 p-4 rounded-xl shadow-md shadow-indigo-500/2 hover:shadow-indigo-500/40 transition-all">
            <Link href={`/character/${character.id}`} className="shrink-0">
              <Image
                className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform"
                src={character.image}
                alt={character.name}
                width={80}
                height={80}
                loading="eager"
              />
            </Link>

            <div className="flex-1 flex flex-col gap-1">
              <h2 className="text-lg font-bold leading-tight">{character.name}</h2>
              <p className="text-sm text-gray-600 -mt-1">{character.species}</p>
              <div className="flex items-center justify-between mt-1">
                <CharacterStatus statusEnum={character.status as "Alive" | "Dead" | "unknown"} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
