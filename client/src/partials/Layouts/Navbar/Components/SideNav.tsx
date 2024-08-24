import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Input,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProjectList from "./ProjectList";
import RecentBugsList from "./AssignedBugs";
import ProjectModal from "../../../../app/Project/components/ProjectModal";
import NormalTextField from "../../../../components/Forms/NormalTextField";
import { useAssignedBugs } from "../../../../app/Bugs/hooks/useBugs";
import Empty from "../../../../components/Empty";
import Skeleton from "../../../../components/Skeleton";

type Props = {};

function SideNav({ }: Props) {
  const projectModal = useDisclosure();
  const { data, isLoading, isError } = useAssignedBugs();

  return (
    <>
      <ProjectModal
        onClose={projectModal.onClose}
        isOpen={projectModal.isOpen}
      />
      <Flex
        flexDirection={"column"}
        width="400px"
        bgColor={"primary.800"}
        height="100vh"
        padding="20px"
        overflow={"hidden"}
      >
        {/* Logo */}
        <NavLink to="/">
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Box boxSize={"30px"} marginRight="20px">
              <Image src="/LogoNoBack.png" alt="logo" />
            </Box>
            <Text
              color="primary.100"
              fontWeight={"extrabold"}
              fontSize={"2xl"}
              letterSpacing="4px"
            >
              BUGLOG
            </Text>
          </Flex>
        </NavLink>

        {/* Recent Bugs */}
        <Flex marginTop={"50px"} gap="5" flexDir={"column"}>
          <Text fontWeight={"bold"} color="primary.200">
            Assigned Bugs
          </Text>
          <NormalTextField placeholder="Search Bugs" />
          <Box
            overflowY="auto"
            overflowX={"hidden"}
            padding="5px"
            height={"300px"}
            maxHeight={"300px"}
          >
            {isLoading ? (
              <Stack>
                <Skeleton height="20px" />
              </Stack>
            ) : !isError && data?.length > 0 ? (
              <RecentBugsList bugList={data} />
            ) : (
              <Empty message="No Bugs assigned to you yet!" />
            )}
          </Box>
        </Flex>

        {/* Projects */}
        <Flex marginTop={"50px"} gap="5" flexDir={"column"}>
          <Flex justify={"space-between"} align="center">
            <Text fontWeight={"bold"} color="primary.200">
              Projects
            </Text>
            <Button
              leftIcon={<FaPlus />}
              colorScheme={"brand"}
              fontSize={"sm"}
              size="sm"
              onClick={projectModal.onOpen}
            >
              Create New
            </Button>
          </Flex>
          {/* List Projects */}
          <NormalTextField placeholder="Search Projects" />
          <Box
            overflowY="auto"
            overflowX={"hidden"}
            padding="5px"
            maxHeight={"300px"}
          >
            <ProjectList />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default SideNav;
