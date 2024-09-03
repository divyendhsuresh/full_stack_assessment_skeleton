import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchAllUsers = () => useQuery({ queryKey: ["users"], queryFn: () => axios.get("http://localhost:3000/user/user/find-all"), select: (response) => response.data })
