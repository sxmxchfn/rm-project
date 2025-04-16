import {
  useFetchAllCharactersQuery,
  useFetchAllEpisodesQuery,
} from "@/characters/CharacterService";
import { useEffect, useState } from "react";
import CharItem from "./CharItem";

const CharContainer = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const {
    data: characters,
    isLoading: isLoadingCharacters,
    error: charactersError,
    refetch: refetchCharacters,
  } = useFetchAllCharactersQuery();

  const {
    data: episodes,
    isLoading: isLoadingEpisodes,
    error: episodesError,
    refetch: refetchEpisodes,
  } = useFetchAllEpisodesQuery();

  useEffect(() => {
    refetchCharacters();
    refetchEpisodes();
  }, [refetchCharacters, refetchEpisodes]);

  const isLoading = isLoadingCharacters || isLoadingEpisodes;
  const error = charactersError || episodesError;

  if (isLoading || showLoading) {
    return (
      <div
        className="text-white text-center text-xl flex justify-center items-center h-[70vh]"
        role="status"
        aria-label="Loading characters"
      >
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="text-red-500 text-center text-xl"
        role="alert"
        aria-label="Error loading characters"
      >
        Error loading data: {error.toString()}
      </div>
    );
  }

  if (!characters?.length) {
    return (
      <div
        className="text-white text-center text-xl"
        role="status"
        aria-label="No characters found"
      >
        No characters found
      </div>
    );
  }

  return (
    <div
      className="container mx-auto px-4 py-8"
      role="region"
      aria-label="Characters grid"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <CharItem
            key={character.id}
            character={character}
            episodes={episodes}
          />
        ))}
      </div>
    </div>
  );
};

export default CharContainer;
