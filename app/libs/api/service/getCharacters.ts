export async function getCharacters(page: number = 1) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  return res.json();
}