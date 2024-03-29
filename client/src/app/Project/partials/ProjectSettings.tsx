import {
  Flex,
  Wrap,
  Popover,
  PopoverTrigger,
  Tag,
  TagLeftIcon,
  TagLabel,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Text,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import NormalTextField from "../../../components/Forms/NormalTextField";
import AvatarChip from "../components/AvatarChip";
import Chips from "../components/Chips";
import { useCreateCategory, useDeleteCategory } from "../hooks/useCategory";
import { useCreateTeam, useDeleteTeam } from "../hooks/useTeam";
import io from "socket.io-client";
import { useAuthStore } from "../../../store/useStore";

export default function ProjectSettings({
  categories,
  teams,
  pid,
  isOwner,
}: any) {
  const categoryPopOver = useDisclosure();
  const teamPopOver = useDisclosure();
  let socket = io(`${import.meta.env.VITE_SOCKET_DOMAIN_URI}`);
  const user = useAuthStore((state) => state.user);
  // category queries
  const categoryMutate = useCreateCategory();
  const categoryDelete = useDeleteCategory();
  // team queries
  const teamMuteate = useCreateTeam();
  const teamDelete = useDeleteTeam();

  const onCategoryAdd = (e: any) => {
    if (e.key === "Enter" && e.target.value !== "") {
      categoryMutate.mutateAsync({ pid, title: e.target.value });
      categoryPopOver.onClose();
      e.target.value = "";
    }
  };

  const onCategoryRemove = (id: number) => {
    categoryDelete.mutateAsync(id);
  };

  const onTeamAdd = (e: any) => {
    if (e.key === "Enter" && e.target.value !== "") {
      teamMuteate.mutateAsync(
        { pid, email: e.target.value },
        {
          onSuccess: (data) => {
            let payload = {
              ...data,
              From: {
                id: user?.id,
                username: user?.username,
              },
            };
            socket.emit("TEAM_ADD", payload);
          },
        }
      );
      teamPopOver.onClose();
      e.target.value = "";
    }
  };

  const onTeamRemove = (id: number) => {
    teamDelete.mutateAsync(id);
  };

  return (
    <Box>
      {/* Category Section */}
      <Flex flexDir="column" align="center">
        <Flex width="30em" flexDir="column" gap="5">
          <Text fontSize={"2xl"}>Project Settings</Text>
          <Box>
            <Text fontSize="xl">Categories</Text>
            <Text fontSize="sm" color="primary.200">
              Create multiple categories that can represents your team roles or
              bugs categories
            </Text>
          </Box>
          <Wrap>
            {categories.length > 0 &&
              categories.map((cat: any, i: any) => (
                <Chips
                  key={i}
                  isOwner={isOwner}
                  label={cat.title}
                  onDelete={() => {
                    onCategoryRemove(cat.id);
                  }}
                  colorScheme={"brand"}
                />
              ))}
            {isOwner && (
              <Popover
                isOpen={categoryPopOver.isOpen}
                onClose={categoryPopOver.onClose}
                placement="bottom"
              >
                <PopoverTrigger>
                  <Tag
                    size={"lg"}
                    key={"sm"}
                    variant="subtle"
                    colorScheme="gray"
                    borderRadius={"full"}
                    _hover={{ cursor: "pointer" }}
                    onClick={categoryPopOver.onOpen}
                  >
                    <TagLeftIcon boxSize="12px" as={FaPlus} />
                    <TagLabel>Add</TagLabel>
                  </Tag>
                </PopoverTrigger>
                <PopoverContent bg="primary.900" border="none">
                  <PopoverArrow />
                  <PopoverBody as={Flex} flexDir="column" gap="3">
                    <Text>Category Title</Text>
                    <NormalTextField
                      type="text"
                      placeholder="Enter category name"
                      onKeyDown={onCategoryAdd}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )}
          </Wrap>
        </Flex>
      </Flex>
      {/* Teams section */}
      <Flex flexDir="column" align="center" marginTop="50px">
        <Flex width="30em" flexDir="column" gap="5">
          <Box>
            <Text fontSize="xl">Teams</Text>
            <Text fontSize="sm" color="primary.200">
              Add members to your project team
            </Text>
          </Box>
          <Wrap>
            {teams.length > 0 &&
              teams.map((t: any, i: number) => (
                <AvatarChip
                  status={t.status}
                  key={i}
                  isOwner={isOwner}
                  label={t.User.username}
                  src={t.User.avatar}
                  onDelete={() => {
                    onTeamRemove(t.id);
                  }}
                />
              ))}
            {isOwner && (
              <Popover
                isOpen={teamPopOver.isOpen}
                onClose={teamPopOver.onClose}
                placement="bottom"
              >
                <PopoverTrigger>
                  <Tag
                    size={"lg"}
                    key={"sm"}
                    variant="subtle"
                    colorScheme="gray"
                    borderRadius={"full"}
                    _hover={{ cursor: "pointer" }}
                    onClick={teamPopOver.onOpen}
                  >
                    <TagLeftIcon boxSize="12px" as={FaPlus} />
                    <TagLabel>Add</TagLabel>
                  </Tag>
                </PopoverTrigger>
                <PopoverContent bg="primary.900" border="none">
                  <PopoverArrow />
                  <PopoverBody as={Flex} flexDir="column" gap="3">
                    <Text>Team</Text>
                    <NormalTextField
                      type="text"
                      placeholder="Enter email address of the User"
                      onKeyDown={onTeamAdd}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )}
          </Wrap>
        </Flex>
      </Flex>
    </Box>
  );
}
