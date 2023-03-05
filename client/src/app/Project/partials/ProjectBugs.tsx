import {
  Stack,
  Box,
  Text,
  Flex,
  Button,
  useDisclosure,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import { FaGithub, FaPlus } from "react-icons/fa";
import Bugs from "../../../components/Bugs";
import { BsThreeDots } from "react-icons/bs";
import Empty from "../../../components/Empty";
import NormalTextField from "../../../components/Forms/NormalTextField";
import Skeleton from "../../../components/Skeleton";
import CreateBugModal from "../components/BugModal";
import ImportGithub from "../components/ImportGithub";

export default function ProjectBugs({ isLoading, project }: any) {
  const bugsModal = useDisclosure();
  const importModal = useDisclosure();

  return (
    <>
      <CreateBugModal
        isOpen={bugsModal.isOpen}
        onClose={bugsModal.onClose}
        project={project}
      />
      <ImportGithub
        isOpen={importModal.isOpen}
        onClose={importModal.onClose}
        pid={project.id}
      />
      {/*might need to pass project id*/}
      <Box rounded={10} width="full">
        <Flex justify={"space-between"} margin="10px">
          <Text fontSize={"xl"}>BUGS</Text>
          <Flex align="center" gap="3">
            <Menu>
              <MenuButton>
                <IconButton
                  bg="primary.900"
                  color="primary.100"
                  icon={<BsThreeDots />}
                  aria-label="bug-menu"
                  _hover={{
                    bg: "primary.800",
                  }}
                />
              </MenuButton>
              <MenuList bg="primary.700" border="none">
                <MenuItem
                  color="primary.100"
                  bg="primary.700"
                  _hover={{ bg: "brand.500" }}
                  icon={<FaGithub size="20" />}
                  onClick={importModal.onOpen}
                >
                  Import from Github
                </MenuItem>
              </MenuList>
            </Menu>
            <Button
              leftIcon={<FaPlus />}
              colorScheme={"brand"}
              fontSize={"sm"}
              size="sm"
              onClick={bugsModal.onOpen}
            >
              Create New
            </Button>
          </Flex>
        </Flex>
        <Box margin="10px">
          <NormalTextField placeholder="Search in this project" size="md" />
        </Box>
        <Tabs isFitted size="md" variant="soft-rounded">
          <TabList>
            <Tab _selected={{ bg: "green.500", color: "white" }}>Open</Tab>
            <Tab _selected={{ bg: "red.500", color: "white" }}>Closed</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack direction={"column"} spacing="4" padding="10px">
                {isLoading ? (
                  <Skeleton height="40px" />
                ) : project.Bug.length > 0 ? (
                  project.Bug.map(
                    (bug: any) =>
                      bug.status === "Open" && (
                        <Bugs
                          key={bug.id}
                          projectTitle={project.title}
                          author={bug.User.username}
                          {...bug}
                        />
                      )
                  )
                ) : (
                  <Empty message="Create a new bug to get started!" />
                )}
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack direction={"column"} spacing="4" padding="10px">
                {isLoading ? (
                  <Skeleton height="40px" />
                ) : project.Bug.length > 0 ? (
                  project.Bug.map(
                    (bug: any) =>
                      bug.status === "Closed" && (
                        <Bugs
                          key={bug.id}
                          projectTitle={project.title}
                          author={bug.User.username}
                          {...bug}
                        />
                      )
                  )
                ) : (
                  <Empty message="Create a new bug to get started!" />
                )}
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}
