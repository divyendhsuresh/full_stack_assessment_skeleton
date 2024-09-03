import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import queryClient from "../utils";

export const useAssignUsersToHome = () =>
  useMutation({
    mutationFn: ({ street_address, userIds }) =>
      axios
        .post("http://localhost:3000/user/home/assign-users-to-home/", {
          street_address,
          userIds,
        })
        .then((response) => response.data),
    onSuccess: () => {
      queryClient.invalidateQueries("homes");
    },
  });
