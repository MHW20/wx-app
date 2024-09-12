import { useQuery } from "react-query";
import { fetchLocationByName } from "../services/searchService";

export const useLocation = (input: string) => {
  return useQuery({
    queryKey: ["location", input],
    enabled: !!input,
    queryFn: () => fetchLocationByName(input)
  });
}
