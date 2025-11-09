
import { Result } from "../api/types/rickAndMortyTypes";

interface CharacterFilterStatusProps {
    characters: Result[];
    status: string;
    gender: string;
    search: string;
}

export function characterFilter({ characters, status, gender, search }: CharacterFilterStatusProps) {  

  return characters.filter((character) => {
    const filterStatus = status ? character.status === status : true;
    const filterGender = gender ? character.gender === gender : true;
    const filterSearch = search ? character.name.toLowerCase().includes(search.toLowerCase()) : true;

    return filterStatus && filterGender && filterSearch;
  });
}
