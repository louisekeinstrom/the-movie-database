import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../services/APIservice";

const useAllData = <T>(endpoint: string) => {
	return useQuery({
		queryKey: ["allData", endpoint],
		queryFn: () => getAllData<T>(endpoint),
	});
};
export default useAllData;
