import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchRespose } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => 
    useQuery<FetchRespose<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.get<FetchRespose<Game>>('/games', {
            params: { 
                genres: gameQuery.genre?.id, 
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            }, 
        }).then(res => res.data)
    })

export default useGames;