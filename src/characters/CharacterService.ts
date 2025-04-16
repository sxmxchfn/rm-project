import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Characters } from "./characters";
import { Episodes } from "./episodes";

type CharactersApiResponse = {
  info: {
    count: number; // общее количество персонажей
    pages: number; // количество страниц
    next: string | null; // ссылка на следующую страницу
    prev: string | null; // ссылка на предыдущую страницу
  };
  results: Characters[];
};

type EpisodesApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Episodes[];
};

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api",
  }),
  endpoints: (builder) => ({
    fetchAllCharacters: builder.query<Characters[], void>({
      query: () => `/character?page=${Math.floor(Math.random() * 42) + 1}`,
      transformResponse: (response: CharactersApiResponse) => response.results,
      keepUnusedDataFor: 0,
    }),
    fetchAllEpisodes: builder.query<Episodes[], void>({
      query: () => "/episode",
      transformResponse: (response: EpisodesApiResponse) => response.results,
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useFetchAllCharactersQuery, useFetchAllEpisodesQuery } =
  charactersApi;
