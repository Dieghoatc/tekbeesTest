import { cache } from "react";

export const getCharacters = cache(async () => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=1"
  )
  return response.json();
});
