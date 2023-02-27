import { Text, Flex, Box, Select, Checkbox, Button } from "@chakra-ui/react";
import { useState } from "react";
import FullModal from "../../../components/FullModal";

type props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ImportGithub({ isOpen, onClose }: props) {
  const [selectedRepo, setSelectedRepo] = useState<any | null>(null);

  return (
    <FullModal
      isOpen={isOpen}
      onClose={onClose}
      header={"Import Issues from Github"}
    >
      <Flex flexDir="column" gap="5" maxWidth="900px" marginTop="5">
        <Box>
          <Text color="primary.200" size="sm" marginBottom="5px">
            Select Repository
          </Text>
          <Select name="repo" fontSize={"sm"} width={"600px"}>
            <option>issue tracker</option>
          </Select>
        </Box>
        <Box>
          <Text color="primary.200" size="sm" marginBottom="5px">
            Select all Issues that you want to import
          </Text>
          {selectedRepo === null ? (
            <Flex
              flexDir="column"
              gap="2"
              border="1px solid gray"
              rounded="10"
              padding="10px"
              borderStyle={"dotted"}
              height="500px"
              maxHeight="500px"
              overflowY="auto"
              justify="center"
              align="center"
            >
              <Text color="primary.200">Select a repository</Text>
            </Flex>
          ) : (
            <Flex
              flexDir="column"
              gap="2"
              border="1px solid gray"
              rounded="10"
              padding="10px"
              borderStyle={"dotted"}
              height="500px"
              maxHeight="500px"
              overflowY="auto"
            >
              <Checkbox>
                <Text fontSize="sm">#2/NewOne</Text>
              </Checkbox>
              <Checkbox>
                <Text fontSize="sm">#2/NewOne</Text>
              </Checkbox>
            </Flex>
          )}
        </Box>{" "}
        <Button type="submit" colorScheme={"brand"} fontSize={"md"} size="md">
          Import
        </Button>
      </Flex>
    </FullModal>
  );
}
