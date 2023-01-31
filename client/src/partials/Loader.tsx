import { Text, Flex, Spinner } from "@chakra-ui/react";

type Props = {};

function Loader({}: Props) {
  return (
    <Flex
      alignItems="center"
      justifyContent={"center"}
      height={"100vh"}
      flexDir="column"
      gap="5"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="brand.500"
        size="xl"
      />
      <Text fontSize={"md"} fontWeight="bold">
        Loading
      </Text>
    </Flex>
  );
}

export default Loader;
