import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchRespose } from "../services/api-client";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchRespose<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms }
});

export default usePlatforms;