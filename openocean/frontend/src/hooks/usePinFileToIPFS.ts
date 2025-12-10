import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { constants } from "../constants";

const usePinFileToIPFS = () =>
  useMutation({
    mutationFn: ({ file, name }: { file: File; name: string }) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "pinataMetadata",
        JSON.stringify({
          name,
        })
      );

      return axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            Authorization: `Bearer ${constants.pinataAPIKey}`,
          },
          maxBodyLength: Infinity,
        }
      );
    },
  });

export default usePinFileToIPFS;
