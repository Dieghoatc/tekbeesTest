export async function getMultipleEpisodes(ids: string[]) {
  const res = await fetch(`https://rickandmortyapi.com/api/episode/${ids.join(",")}`);
  return res.json();
}