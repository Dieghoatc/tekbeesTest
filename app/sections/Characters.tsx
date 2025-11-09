
import { CharacterList } from "../components/CharacterList";

interface CharactersProps {
    search: string;
    status: string;
    gender: string;
}

export async function Characters({ search, status, gender }: CharactersProps) {

    return (
        <CharacterList search={search} gender={gender} status={status}/>
    );
}