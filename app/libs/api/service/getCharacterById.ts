export async function getCharacterById(id: number) {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      
    });
    return res.json();
  } catch {
    console.error("Error fetching character by id");
    return null;
  }
}
