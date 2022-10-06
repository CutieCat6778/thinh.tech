import { Text } from "@chakra-ui/react";
import NextImage from "next/image";

export const mdxComponents = {
  img: (props: any) => {
    return <NextImage {...props} layout="responsive" />;
  },
  p: (props: any) => {
    return <Text {...props} fontFamily="Open Sans" />;
  },
};