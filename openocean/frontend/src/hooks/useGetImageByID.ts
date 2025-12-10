import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { constants } from "../constants";

const useGetImageByID = () =>
  useMutation({
    mutationFn: (hash: string | undefined) => {
      if (!hash) throw new Error("Missing IPFS hash");

      return axios.get("https://api.pinata.cloud/data/pinList", {
        headers: {
          Authorization: `Bearer ${constants.pinataAPIKey}`,
        },
        params: {
          status: "pinned",
          hashContains: hash,
          pageLimit: 1,
        },
      });
    },
  });

export default useGetImageByID;
