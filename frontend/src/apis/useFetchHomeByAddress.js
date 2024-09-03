import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchHomeByAddress = (street_address) => useQuery({
    queryKey: ["home", street_address],
    queryFn: () => axios.get(`http://localhost:3000/user/home/${street_address}`),
    select: (response) => response.data
});
