export async function getCharacterById(id: number) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return res.json();
}