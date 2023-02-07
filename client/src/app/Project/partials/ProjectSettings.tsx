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
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import NormalTextField from "../../../components/Forms/NormalTextField";
import AvatarChip from "../components/AvatarChip";
import Chips from "../components/Chips";

type Category = {
  title: string;
  color: string;
};

export default function ProjectSettings() {
  const categoryPopOver = useDisclosure();
  const teamPopOver = useDisclosure();

  const [categories, setCategories] = useState<Category[]>([
    {
      title: "Backend",
      color: "brand",
    },
  ]);

  const [team, setTeam] = useState([
    {
      id: 1,
      src: "https://avatars.githubusercontent.com/u/50291191?v=4",
      label: "Dovakiin0",
    },
  ]);

  const onCategoryAdd = (e: any) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setCategories([...categories, { title: e.target.value, color: "brand" }]);
      categoryPopOver.onClose();
      e.target.value = "";
    }
  };

  const onTeamAdd = (e: any) => {
    if (e.key === "Enter" && e.target.value !== "") {
      console.log();
    }
  };

  return (
    <Box>
      {/* Category Section */}
      <Flex flexDir="column" align="center">
        <Flex width="50em" flexDir="column" gap="5">
          <Text fontSize={"2xl"} letterSpacing={"0.4rem"}>
            Project Settings
          </Text>
          <Box>
            <Text fontSize="xl">Categories</Text>
            <Text fontSize="sm" color="primary.200">
              Create multiple categories that can represents your team roles or
              bugs categories
            </Text>
          </Box>
          <Wrap>
            {categories.length > 0 &&
              categories.map((cat, i) => (
                <Chips
                  key={i}
                  label={cat.title}
                  onDelete={() => {}}
                  colorScheme={cat.color}
                />
              ))}
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
          </Wrap>
        </Flex>
      </Flex>
      {/* Teams section */}
      <Flex flexDir="column" align="center" marginTop="50px">
        <Flex width="50em" flexDir="column" gap="5">
          <Box>
            <Text fontSize="xl">Teams</Text>
            <Text fontSize="sm" color="primary.200">
              Add members to your project team
            </Text>
          </Box>
          <Wrap>
            {team.length > 0 &&
              team.map((t, i) => (
                <AvatarChip
                  key={i}
                  label={t.label}
                  src={t.src}
                  onDelete={() => {
                    console.log("Delete pressed");
                  }}
                />
              ))}
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
                    placeholder="Enter username"
                    onKeyDown={onTeamAdd}
                  />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Wrap>
        </Flex>
      </Flex>
    </Box>
  );
}
