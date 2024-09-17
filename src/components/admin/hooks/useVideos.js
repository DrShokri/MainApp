import { useQuery } from "@tanstack/react-query";
import { getVideos } from "../../../core/services/api/apiVideos";

export function useVideos() {
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  return { videos, isLoading, error };
}
