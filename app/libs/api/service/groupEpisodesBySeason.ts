export type Episode = {
  id: number;
  name: string;
  episode: string; 
  air_date: string;
};
export function groupEpisodesBySeason(
  episodes: Episode[]
): Record<string, Episode[]> {
  const groupedEpisodes: Record<string, Episode[]> = {};

  episodes.forEach((episode) => {

    const season = episode.episode.split("E")[0];

    if (!groupedEpisodes[season]) {
      groupedEpisodes[season] = [];
    }
    groupedEpisodes[season].push(episode);
  });  

  return groupedEpisodes;
}
