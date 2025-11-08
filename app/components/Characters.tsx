
import { getCharacters } from "../libs/api/service/getCharacters";
import { Result } from "../libs/api/types/rickAndMortyTypes"
import { CharacterCard } from "./CharacterCard";

export async function Characters() {
    const characters = await getCharacters();

    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {characters.results.map((character: Result) => (
                    <li key={character.id}>
                        <CharacterCard character={character} />
                    </li>
                ))}
            </ul>
        </div>
    );
}