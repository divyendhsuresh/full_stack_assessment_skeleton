import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchAllHomes = (username, page) => useQuery({
    queryKey: ["homes", username, page], queryFn: () => axios.get("http://localhost:3000/user/home/find-by-user", {
        params: { username, page }
    }), select: (response) => response.data
})
