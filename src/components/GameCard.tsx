import React, { useState } from "react";
import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  useStyleConfig,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import EmojiCounter from "./EmojiCounter";
import { Game } from "../hooks/useGames";
import { motion } from "framer-motion"; // Import the motion component

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  // Use the useStyleConfig hook to access Chakra UI's style configuration
  const styles = useStyleConfig("Card");

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          onClick={handleLike} // Call handleLike when the thumbnail is clicked
          cursor="pointer" // Show pointer cursor to indicate clickability
        />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            {/* ... (rest of the components) */}
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <EmojiCounter likes={likes} />
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default GameCard;
