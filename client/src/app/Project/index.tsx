import {
  Box,
  Button,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import NormalTextField from "../../components/Forms/NormalTextField";
import TextField from "../../components/Forms/TextField";
import Chips from "./components/Chips";

type Props = {};

type Category = {
  title: string;
  color: string;
};

function Project({}: Props) {
  const categoryPopOver = useDisclosure();
  const [categories, setCategories] = useState<Category[]>([]);

  const onCategoryAdd = (e: any) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setCategories([...categories, { title: e.target.value, color: "gray" }]);
      categoryPopOver.onClose();
      e.target.value = "";
    }
  };

  return (
    <Flex flexDir="column" gap="10">
      <Box bg="brand.800" backdropFilter="auto" backdropBlur="10px">
        <Flex margin="100px" flexDir={"column"}>
          <Text fontSize={"4xl"}>BugNet</Text>
          <Text fontSize={"sm"}>
            This is a short description about the project
          </Text>
        </Flex>
      </Box>
      <Flex flexDir="column" align="center" margin="5px">
        <Text fontSize={"2xl"} letterSpacing={"0.4rem"}>
          Project Settings
        </Text>
      </Flex>
      <Flex flexDir="column" align="center">
        <Flex width="50em" flexDir="column" gap="5">
          <Box>
            <Text fontSize="xl">Categories</Text>
            <Text fontSize="sm" color="primary.200">
              Create multiple categories that represents your team roles
            </Text>
          </Box>
          <Wrap>
            {categories.length > 0 &&
              categories.map((cat, i) => (
                <Chips
                  key={i}
                  label={cat.title}
                  onClick={() => {}}
                  colorScheme={cat.color}
                />
              ))}
            <Popover
              isOpen={categoryPopOver.isOpen}
              onClose={categoryPopOver.onClose}
              placement="right"
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
                <PopoverBody as={Flex} flexDir="column" gap="3">
                  <Text color="primary.200">Title</Text>
                  <NormalTextField
                    type="text"
                    placeholder="Enter category name"
                    onKeyDown={onCategoryAdd}
                  />
                  <Text>Color</Text>
                  <NormalTextField type="color" />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Wrap>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Project;
