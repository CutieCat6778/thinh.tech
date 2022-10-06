import { Heading, Link, Text } from "@chakra-ui/react";
import NextImage from "next/image";

export const mdxComponents = {
  img: (props: any) => {
    return <NextImage {...props} layout="responsive" />;
  },
  p: (props: any) => {
    return <Text {...props} fontFamily="Open Sans" />;
  },
  h1: (props: any) => {
    return <Heading {...props} fontFamily="Comfortaa" />;
  },
  a: (props: any) => {
    return <Link {...props} />;
  },
};