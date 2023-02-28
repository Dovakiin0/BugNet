import {
  Text,
  Flex,
  Box,
  Select,
  Checkbox,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import FullModal from "../../../components/FullModal";
import Loader from "../../../partials/Loader";
import { useAuthStore } from "../../../store/useStore";
import { useGetIssues, useGetRepos } from "../hooks/useGithub";

type props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ImportGithub({ isOpen, onClose }: props) {
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  const [selectedIssues, setSelectedIssues] = useState<any | null>(null);

  const user = useAuthStore((state) => state.user);
  const repoQuery = useGetRepos();
  const client = useQueryClient();

  const issuesQuery = useGetIssues({
    repo: selectedRepo,
    enabled: selectedRepo !== null,
  });

  const onRepoSelect = (e: any) => {
    if (e.target.value === "none") return;
    setSelectedRepo(e.target.value);
    Promise.all([
      client.invalidateQueries(["repos"]),
      client.invalidateQueries(["issues"]),
    ]);
  };

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
          <Select
            name="repo"
            fontSize={"sm"}
            width={"600px"}
            onChange={onRepoSelect}
          >
            <option
              style={{ backgroundColor: "black", color: "white" }}
              value="none"
            >
              Select your repo
            </option>
            {repoQuery.data &&
              repoQuery.data.data.items.map((repo: any, i: number) => (
                <option
                  key={i}
                  value={repo.name}
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  {repo.full_name}
                </option>
              ))}
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
              {issuesQuery.isLoading ? (
                <Loader />
              ) : issuesQuery.data && issuesQuery.data?.data.length > 0 ? (
                issuesQuery.data.data.map((issue: any, i: number) => (
                  <Checkbox colorScheme="brand" key={i}>
                    <Text fontSize="sm">{issue.title}</Text>
                  </Checkbox>
                ))
              ) : (
                <Text color="primary.200">No Issues found</Text>
              )}
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
