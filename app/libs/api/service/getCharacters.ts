export async function getCharacters(page: number = 1) {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {
      next: {
        revalidate: 60,
      },
    });
    return res.json();
  } catch {
    console.error("Error fetching characters");
    return null;
  }
}