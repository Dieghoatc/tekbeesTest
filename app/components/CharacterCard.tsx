'use client'

import Image from 'next/image';
import { Result } from "../libs/api/types/rickAndMortyTypes";
import { CharacterStatus, CharacterStatusProps } from "./CharacterStatus";

interface CharacterCardProps {
    character: Result;
}

export function CharacterCard({ character }: CharacterCardProps) {
    const status = character.status as CharacterStatusProps['statusEnum'];
    return (
        <div className='grid grid-cols-3 gap-2 aspect-auto rounded-md overflow-hidden shadow-sm shadow-indigo-500/50'>
            <div className='col-span-1'>
                <Image className='w-full h-full rounded-md object-cover' src={character.image} alt={character.name} width={100} height={100} />
            </div>
            <div className='col-span-2'>
                <h2 className='text-xl font-bold'>{character.name}</h2>
                <p className='text-sm font-semibold'>{character.species}</p>
                <div>
                    <CharacterStatus statusEnum={status} />
                </div>
            </div>
        </div>
    );
}