
import Image from "next/image";
import { getCharacterById } from "@/app/libs/api/service/getCharacterById";
import { getMultipleEpisodes } from "@/app/libs/api/service/getMultipleEpisodes";
import { groupEpisodesBySeason } from "@/app/libs/api/service/groupEpisodesBySeason";

interface CharacterProps {
  params: Promise<{ id: string }>;
}

export default async function Character({
  params,
}: CharacterProps) {
  const { id } = await params;

  const character = await getCharacterById(Number(id));

  function groupIdEpisodes(episodes: string[]) {
    const ids = episodes
      .map((episode: string) => episode.split("/").pop())
      .filter((id): id is string => typeof id === "string");
    return ids;
  }

  const episodes = await getMultipleEpisodes(groupIdEpisodes(character.episode));

  const groupEpisodesBySeasons = Object.entries(groupEpisodesBySeason(episodes));

  console.log(groupEpisodesBySeasons)

  return (
    <section className="w-full flex flex-col items-center mt-4">
      <div className="w-36 h-36 rounded-full overflow-hidden">
        <Image className="w-full h-full object-cover" src={character.image} alt={character.name} width={100} height={100} />
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center my-4">
          {character.name}
        </h1>
      </div>
      <div className="flex flex-col items-start gap-2">
        <ul>
          <li>Especie: <span className="font-bold">{character.species}</span></li>
          <li>Genero: <span className="font-bold">{character.gender}</span></li>
          <li>Estado: <span className="font-bold">{character.status}</span></li>
          <li>Ubicacion: <span className="font-bold">{character.location.name}</span></li>
        </ul>
      </div>
      <div className="flex flex-col items-start gap-2 mt-5">
        <h2 className="text-xl font-bold">Episodios</h2>
        {groupEpisodesBySeasons.map(([season, episodes]) => (
          <div key={season}>
            <h3 className="text-lg font-bold">Temporada {season}</h3>
            <ul>
              {episodes.map((episode) => (
                <li key={episode.id}>{episode.id} - {episode.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
