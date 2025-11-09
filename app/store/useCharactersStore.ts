import { create } from "zustand";
import { Result } from "../libs/api/types/rickAndMortyTypes";

export const useCharactersStore = create((set) => ({
    characters: [],
    setCharacters: (characters: Result[]) => set({ characters }),
}));