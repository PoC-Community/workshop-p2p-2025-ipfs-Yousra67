import { HStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC } from "react";
import IMGCard from "../atoms/IMGCard";
import { useNavigate } from "react-router-dom";

const AvailableImages: FC<any> = ({ images }) => {
  const navigate = useNavigate();

  return (
    <HStack overflowX="hidden" w="100%">
      <motion.div
        style={{ display: "flex" }}
        animate={{
          x: [`-${33 * images.length}vw`, "0px"],
          transition: {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          },
        }}
      >
        {images.map((image: any) => (
          <Box
            key={image.ipfs_pin_hash}
            cursor="pointer"
            onClick={() => navigate(`/images/${image.ipfs_pin_hash}`)}
            w={`${33}vw`}
            px="24px"
            flexShrink={0}
          >
            <IMGCard url={image?.ipfs_pin_hash} />
          </Box>
        ))}
      </motion.div>
    </HStack>
  );
};

export default AvailableImages;
