
import { Result } from "../libs/api/types/rickAndMortyTypes"
import { CharacterCard } from "../components/CharacterCard";
import { getCharacters } from "../libs/api/service/getCharacters";
import { characterFilter } from '../libs/helpers/characterFilter';

interface CharactersProps {
    search: string;
    status: string;
    gender: string;
}

export async function Characters({ search, status, gender }: CharactersProps) {
    const characters = await getCharacters();

    const filteredCharacters = characterFilter({ characters: characters.results, status, gender, search });

    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {filteredCharacters.map((character: Result) => (
                    <li key={character.id}>
                        <CharacterCard character={character} />
                    </li>
                ))}
            </ul>
        </div>
    );
}