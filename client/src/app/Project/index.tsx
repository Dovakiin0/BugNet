import {
  Box,
  Divider,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useProjectById } from "./hooks/useProject";
import ProjectBugs from "./partials/ProjectBugs";
import ProjectSettings from "./partials/ProjectSettings";
import Skeleton from "../../components/Skeleton";
import { useAuthStore } from "../../store/useStore";
import { FaPen } from "react-icons/fa";
import EditProjectModal from "./components/EditProjectModal";

type Props = {};

function Project({ }: Props) {
  const editProjectDisclosure = useDisclosure();

  const { id } = useParams();
  const { data, isLoading, isError } = useProjectById(Number(id));
  const user = useAuthStore((state) => state.user);
  const isOwner = data?.ownerId === user?.id;

  const criticalCount = data?.Bug.filter(
    (bug: any) => bug.priority === 2
  ).length;
  const highCount = data?.Bug.filter((bug: any) => bug.priority === 1).length;
  const lowCount = data?.Bug.filter((bug: any) => bug.priority === 0).length;

  return (
    <Flex flexDir="column" gap="10">
      <EditProjectModal
        isOpen={editProjectDisclosure.isOpen}
        onClose={editProjectDisclosure.onClose}
        data={data}
      />
      <Box bg="brand.800">
        {isLoading ? (
          <Skeleton height="50px" />
        ) : (
          !isError && (
            <Flex align="center" justify={"space-between"} height={200}>
              <Flex margin="100px" flexDir={"column"}>
                <Flex gap="3" align="center">
                  <Text fontSize={"4xl"}>{data.title}</Text>
                  <IconButton
                    icon={<FaPen />}
                    bg="none"
                    color="primary.100"
                    _hover={{ bg: "none", color: "primary.300" }}
                    aria-label="edit-btn"
                    onClick={editProjectDisclosure.onOpen}
                  />
                </Flex>
                <Text fontSize={"sm"}>{data.description}</Text>
              </Flex>
              <Flex margin="100px" gap="10">
                <Flex align="center" flexDir="column">
                  <Text fontSize={""} color="primary.100">
                    Critical
                  </Text>
                  <Text fontSize={"5xl"} color="red.500">
                    {criticalCount}
                  </Text>
                </Flex>
                <Flex align="center" flexDir="column">
                  <Text fontSize={""} color="primary.100">
                    High
                  </Text>
                  <Text fontSize={"5xl"} color="orange.300">
                    {highCount}
                  </Text>
                </Flex>
                <Flex align="center" flexDir="column">
                  <Text fontSize={""} color="primary.100">
                    Low
                  </Text>
                  <Text fontSize={"5xl"} color="gray.300">
                    {lowCount}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          )
        )}
      </Box>
      <Flex gap="5">
        {isLoading ? (
          <Skeleton height="50px" />
        ) : (
          <>
            <ProjectBugs isLoading={isLoading} project={data} />
            <Divider orientation="vertical" height="50vh" />
            <ProjectSettings
              categories={data.Category}
              teams={data.Member}
              pid={data.id}
              isOwner={isOwner}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default Project;
