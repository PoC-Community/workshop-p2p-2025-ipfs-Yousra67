import { AspectRatio, Box } from "@chakra-ui/react";
import { FC } from "react";
import { urlFromFileName, urlFromIpfsHash } from "../utils";

interface ImageCardProps {
  url?: string;
  ratio?: number;
}
const resolveImageUrl = (value?: string) => {
  if (!value) return undefined;
  if (value.startsWith("http")) return value;
  if (value.includes(".")) return urlFromFileName(value);
  return urlFromIpfsHash(value);
};

const IMGCard: FC<ImageCardProps> = ({ url, ratio = 16 / 9 }) => {
  const imageUrl = resolveImageUrl(url);

  return (
    <AspectRatio ratio={ratio} w="100%" h="100%">
      <Box
        transitionDuration="0.5s"
        _groupHover={
          imageUrl && {
            opacity: "1",
          }
        }
        _hover={
          imageUrl && {
            opacity: "1",
          }
        }
        opacity="0.6"
        boxShadow="xl"
        borderRadius="4px"
        background={imageUrl ? `url(${imageUrl})` : "gray.800"}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
      />
    </AspectRatio>
  );
};

export default IMGCard;
