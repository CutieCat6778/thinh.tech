import { Text } from "@chakra-ui/react";
import { FC } from "react";
import { NewText as TextInterface } from "../interface/state";

export const NewText: FC<TextInterface> = ({ text }) => {

  return (
    <Text
      _hover={{
        color: "main.cyan",
        fontSize: "6xl",
        transition: "0.3s",
      }}
      d={"inline"}
    >
      {text}
    </Text>
  );
};
