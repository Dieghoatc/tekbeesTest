'use client'

import { useState } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";

import Image from 'next/image';
import Link from 'next/link';

import { Result } from "../libs/api/types/rickAndMortyTypes";

import { CharacterStatus, CharacterStatusProps } from "./CharacterStatus";

import { FavoriteIcon } from "./ui/FavoriteIcon";

interface CharacterCardProps {
    character: Result;
}

export function CharacterCard({ character }: CharacterCardProps) {
    const [favorites, setFavorites] = useLocalStorage<Result[]>('favorites', []);
    const [isFavorite, setIsFavorite] = useState(false);
    const status = character.status as CharacterStatusProps['statusEnum'];

    function handleFavorite() {
        setIsFavorite(!isFavorite);
        if (isFavorite) {
            setFavorites(favorites.filter((favorite) => favorite.id !== character.id));
        } else {
            setFavorites([...favorites, character]);
        }
    }

    return (
        <div className="flex items-center gap-4 p-4 rounded-xl shadow-md shadow-indigo-500/2 hover:shadow-indigo-500/40 transition-all">
            <Link href={`/character/${character.id}`} className="shrink-0">
                <Image
                    className="w-20 h-20 rounded-lg object-cover hover:scale-105 transition-transform"
                    src={character.image}
                    alt={character.name}
                    width={80}
                    height={80}
                    loading='eager'
                />
            </Link>

            <div className="flex-1 flex flex-col gap-1">
                <h2 className="text-lg font-bold leading-tight">{character.name}</h2>
                <p className="text-sm text-gray-600 -mt-1">{character.species}</p>

                <div className="flex items-center justify-between mt-1">
                    <CharacterStatus statusEnum={status} />
                    <button
                        aria-pressed={isFavorite}
                        onClick={handleFavorite}
                        className="p-1 rounded-md hover:bg-indigo-100 transition-colors"
                    >
                        <FavoriteIcon isFavorite={isFavorite} />
                    </button>
                </div>
            </div>
        </div>

    );
}