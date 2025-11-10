export async function getMultipleEpisodes(ids: string[]) {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${ids.join(",")}`, {
      next: {
        revalidate: 60,
      },
    });
    return res.json();
  } catch {
    console.error("Error fetching multiple episodes");
    return null;
  }
}