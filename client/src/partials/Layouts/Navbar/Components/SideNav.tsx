import { Flex, Box, Image, Text, Button, Input } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ProjectList from "./ProjectList";
import RecentBugsList from "./AssignedBugs";

type Props = {};

function SideNav({}: Props) {
  let projects = [
    {
      id: 1,
      title: "BugNet",
    },
    {
      id: 2,
      title: "New Project",
    },
    {
      id: 2,
      title: "New Project",
    },
  ];

  let bugs = [
    {
      id: 1,
      title: "Cannot login",
      priority: "Low",
      createdAt: "2023-01-31T15:00:00.000Z",
    },
    {
      id: 2,
      title: "Cannot Create Bugs please helppp",
      priority: "High",
      createdAt: "2023-01-28T12:00:00.000Z",
    },
    {
      id: 3,
      title: "Cannot Create Bugs",
      priority: "Low",
      createdAt: "2023-01-28T12:00:00.000Z",
    },
    {
      id: 4,
      title: "Cannot Create Bugs",
      priority: "Critical",
      createdAt: "2023-01-27T12:00:00.000Z",
    },
  ];

  return (
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
            BUGNET
          </Text>
        </Flex>
      </NavLink>

      {/* Recent Bugs */}
      <Flex marginTop={"50px"} gap="5" flexDir={"column"}>
        <Text fontWeight={"bold"} color="primary.200">
          Assigned Bugs
        </Text>
        <Input
          placeholder="Search Bugs"
          size="sm"
          borderColor={"primary.600"}
          borderRadius={"5px"}
          _hover={{ borderColor: "primary.500" }}
          _focus={{ borderColor: "brand.200" }}
        />
        <Box
          overflowY="auto"
          overflowX={"hidden"}
          padding="5px"
          height={"300px"}
          maxHeight={"300px"}
        >
          <RecentBugsList bugList={bugs} />
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
          >
            Create New
          </Button>
        </Flex>
        {/* List Projects */}
        <Input
          placeholder="Search Projects"
          size="sm"
          borderColor={"primary.600"}
          borderRadius={"5px"}
          _hover={{ borderColor: "primary.500" }}
          _focus={{ borderColor: "brand.200" }}
        />
        <Box
          overflowY="auto"
          overflowX={"hidden"}
          padding="5px"
          maxHeight={"300px"}
        >
          <ProjectList projects={projects} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default SideNav;
