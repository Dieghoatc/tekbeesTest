
import { getCharacters } from "../libs/api/service/getCharacters";
import { Result } from "../libs/api/types/rickAndMortyTypes"

export async function Characters() {
    const characters = await getCharacters();

    return (
        <div>
            <ul>
                {characters.results.map((item: Result) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}