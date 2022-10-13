import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";

function Error({ statusCode }: any) {
  return (
    <Flex
      width={"100%"}
      height="100%"
      justifyContent={"center"}
      alignItems="center"
      flexDir={"column"}
      color='white'
    >
      <Heading textAlign={"center"}>
        {statusCode} | 
        {statusCode
          ? `An error occurred on server`
          : "An error occurred on client"}
      </Heading>
      <Text fontFamily={"Pt Serif"} mt="1rem">
          Please contact to system administator <Link fontWeight={"600"} href="mailto:support@thinh.tech">support@thinh.tech</Link>
      </Text>
      <Button mt="1rem" variant={"link"} fontFamily="Pt Serif">
        <Link href="/">
         Go back?
        </Link>
      </Button>
    </Flex>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
