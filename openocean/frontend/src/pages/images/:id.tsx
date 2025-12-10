import {
  Box,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useState, useEffect } from "react";
import IMGCard from "../../atoms/IMGCard";
import { useParams } from "react-router-dom";
import useGetImageByID from "../../hooks/useGetImageByID";

const ImageDetailsPage: FC = () => {
  const { id } = useParams();
  const [img, setImg] = useState<any | null>(null);

  const { mutate: getImageByID } = useGetImageByID();

  useEffect(() => {
    if (!id) return;

    getImageByID(id, {
      onSuccess: (data) => {
        const image = data.data.rows?.[0];
        setImg(image ?? null);
      },
      onError: (error) => {
        console.error("Erreur :", error);
      },
    });
  }, [getImageByID, id]);

  if (!img) return null;

  return (
    <VStack w="100%" align="start" p="16px">
      <HStack w="100%" justify="space-between">
        <HStack fontSize="24px" userSelect="none">
          <Text fontWeight="light" color="gray.500">
            #{img.ipfs_pin_hash}
          </Text>
          <Text fontWeight="black">{img.metadata?.name ?? "Untitled"}</Text>
        </HStack>
      </HStack>
      <HStack spacing="24px" align="stretch" w="100%">
        <Box transition="0.5s" w="100%">
          <IMGCard url={img.ipfs_pin_hash} />
        </Box>
      </HStack>
    </VStack >
  );
};

export default ImageDetailsPage;
