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
      async queryFn(_, __, ___, baseQuery) {
        try {
          const firstPage = await baseQuery("/episode?page=1");
          if (firstPage.error) {
            return { error: firstPage.error };
          }

          const data = firstPage.data as EpisodesApiResponse;
          const totalPages = data.info.pages;

          if (totalPages === 1) {
            return { data: data.results };
          }

          const remainingPages = Array.from(
            { length: totalPages - 1 },
            (_, i) => baseQuery(`/episode?page=${i + 2}`)
          );

          const remainingResults = await Promise.all(remainingPages);

          const allEpisodes = [
            ...data.results,
            ...remainingResults.flatMap((result) =>
              result.data ? (result.data as EpisodesApiResponse).results : []
            ),
          ];

          return { data: allEpisodes };
        } catch (error) {
          return { error: error as Error };
        }
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useFetchAllCharactersQuery, useFetchAllEpisodesQuery } =
  charactersApi;
