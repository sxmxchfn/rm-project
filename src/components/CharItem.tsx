import { Characters } from "@/characters/characters";
import { Episodes } from "@/characters/episodes";
import { FC } from "react";

interface CharItemProps {
  character: Characters;
  episodes?: Episodes[];
}

const CharItem: FC<CharItemProps> = ({ character, episodes }) => {
  const firstEpisode = episodes?.find(
    (ep) => ep.id === parseInt(character.episode[0]?.split("/").pop() || "0")
  );

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "bg-green-500";
      case "dead":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden text-white shadow-lg hover:bg-white/20 transition-all max-w-[800px] flex h-full">
      <div className="w-1/3 h-full">
        <div className="aspect-square w-full h-full">
          <img
            src={character.image}
            alt={`Portrait of ${character.name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold">
          {character.id}. {character.name}
        </h2>
        <div className="flex items-center gap-1 mb-2">
          <span
            className={`w-2 h-2 rounded-full ${getStatusColor(
              character.status
            )}`}
          />
          <span className="text-sm">
            {character.status} - {character.species}
          </span>
        </div>
        <div className="space-y-1.5 text-sm">
          <div className="flex gap-2">
            <span className="font-semibold">Gender:</span>
            <span>{character.gender}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Last Location:</span>
            <span>{character.location.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Origin:</span>
            <span>{character.origin.name}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">First seen in:</span>
            <span>
              {firstEpisode
                ? `${firstEpisode.name} (${firstEpisode.episode})`
                : "Unknown"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharItem;
