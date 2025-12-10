import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { constants } from "../constants";

const useGetImages = () =>
  useMutation({
    mutationFn: () => {
      return axios.get("https://api.pinata.cloud/data/pinList", {
        headers: {
          Authorization: `Bearer ${constants.pinataAPIKey}`,
        },
        params: {
          status: "pinned",
        },
      });
    },
  });

export default useGetImages;
