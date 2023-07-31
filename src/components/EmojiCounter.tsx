import React, { useState } from "react";
import { Flex, Image, Box, Text, HStack } from "@chakra-ui/react";

interface Props {
  likes: number;
}

const EmojiCounter = ({ likes }: Props) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(likes);
  const [heartCount, setHeartCount] = useState(likes);

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount((prevCount) => prevCount - 1);
  };

  const handleHeart = () => {
    setHeartCount((prevCount) => prevCount + 1);
  };

  return (
    <HStack alignItems="center">
      <Box>
        <Image
          src={
            "https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f44d.gif"
          }
          alt="thumbs-up"
          boxSize="25px"
          cursor="pointer"
          onClick={handleLike}
        />
        <Text fontSize="sm" fontWeight="bold" textAlign="center">
          {likeCount}
        </Text>
      </Box>
      <Box mx={2}>
        <Image
          src={
            "https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f44e.gif"
          }
          alt="thumbs-down"
          boxSize="25px"
          cursor="pointer"
          onClick={handleDislike}
        />
        <Text fontSize="sm" fontWeight="bold" textAlign="center">
          {dislikeCount}
        </Text>
      </Box>
      <Box>
        <Image
          src={
            "https://em-content.zobj.net/thumbs/320/apple/354/red-heart_2764-fe0f.png"
          }
          alt="heart"
          boxSize="25px"
          cursor="pointer"
          onClick={handleHeart}
        />
        <Text fontSize="sm" fontWeight="bold" textAlign="center">
          {heartCount}
        </Text>
      </Box>
    </HStack>
  );
};

export default EmojiCounter;
