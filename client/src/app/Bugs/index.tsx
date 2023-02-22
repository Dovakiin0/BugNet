import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import rehypeSanitize from "rehype-sanitize";
import NormalTextField from "../../components/Forms/NormalTextField";
import Loader from "../../partials/Loader";
import AvatarChip from "../Project/components/AvatarChip";
import { useFetchBugById } from "./hooks/useBugs";

function Bugs({}) {
  const assigneePopover = useDisclosure();
  const { id } = useParams();
  const [comment, setComment] = useState<any>("");

  const priorityList = {
    0: {
      color: "gray.300",
      title: "Low",
    },
    1: {
      color: "orange.300",
      title: "High",
    },
    2: {
      color: "red.300",
      title: "Critical",
    },
  };

  const onAssigneeAdd = () => {};

  const onCommentAdd = () => {};

  const { data, isLoading, isError } = useFetchBugById(Number(id));

  return (
    <Flex flexDir="column">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box bg="brand.800" padding="30px">
            <Flex flexDir={"column"}>
              <Text fontSize={"2xl"}>{data.Project.title}</Text>
            </Flex>
          </Box>
          <Flex padding="50px" flexDir="column">
            <Flex align="center" gap="3">
              <Text fontSize="4xl" color="primary.200">
                #{data.id}
              </Text>
              <Text fontSize="4xl">{data.title}</Text>
            </Flex>
            <Flex gap="3" align="center">
              <Text fontSize="lg" color="primary.200">
                Opened by :
              </Text>
              <Text fontSize="lg">{data.User.username}</Text>
              <Text color="primary.200" fontSize={"lg"}>
                {new Date(data.createdAt).toDateString()}
              </Text>
              <Text
                fontSize="lg"
                color={
                  priorityList[data.priority as keyof typeof priorityList].color
                }
              >
                {priorityList[data.priority as keyof typeof priorityList].title}
              </Text>
              <Tag
                size="lg"
                colorScheme="green"
                borderRadius={"full"}
                variant="subtle"
              >
                {data.status}
              </Tag>
            </Flex>
          </Flex>
          <Flex
            paddingLeft="50px"
            marginRight="50px"
            justify={"space-between"}
            gap="5"
          >
            {/* Details */}
            <Flex flexDir="column" gap="3" width="full">
              {/* Description */}
              <Box bg="primary.800" padding="20px" rounded="10">
                <MDEditor.Markdown
                  source={data.description}
                  style={{
                    whiteSpace: "pre-wrap",
                    background: "none",
                    color: "white",
                  }}
                />
              </Box>
              <Divider />
              <Flex margin="20px" flexDir="column" gap="5">
                <Text fontSize="2xl" color="primary.200">
                  Comments
                </Text>

                {data.Comment.map((d: any) => (
                  <Box bg="primary.800" padding="20px" rounded="10" gap="5">
                    <MDEditor.Markdown
                      wrapperElement={{ "data-color-mode": "dark" }}
                      key={d.id}
                      source={d.comment}
                      style={{
                        whiteSpace: "pre-wrap",
                        background: "none",
                        color: "white",
                      }}
                    />
                    <Flex gap="3" align="center" marginTop="10px">
                      <Avatar src="" name="Dovakiin0" size="sm" />
                      <Text fontSize="sm">{d.User.username}</Text>
                      <Text color="primary.200" fontSize={"sm"}>
                        {new Date(d.createdAt).toDateString()}
                      </Text>
                    </Flex>
                  </Box>
                ))}
                <MDEditor
                  data-color-mode="dark"
                  value={comment}
                  onChange={setComment}
                  previewOptions={{
                    rehypePlugins: [rehypeSanitize],
                  }}
                />
                <Button
                  colorScheme={"brand"}
                  fontSize={"sm"}
                  size="sm"
                  onClick={onCommentAdd}
                >
                  Comment
                </Button>
              </Flex>
            </Flex>
            {/* Settings */}
            <Divider orientation="vertical" height="60vh" />
            <Flex flexDir="column" gap="4" width="400px">
              <Box>
                <Text fontSize="xl" color="primary.200">
                  Assignee
                </Text>
                <Text fontSize="sm" color="primary.200">
                  You can add upto 4 member
                </Text>
              </Box>
              <Wrap>
                {data.Assignee.map((assign: any) => (
                  <AvatarChip
                    src=""
                    label={assign.Member.User.username}
                    onDelete={() => {}}
                    props={{ bg: "primary.900" }}
                  />
                ))}
                <Popover
                  isOpen={assigneePopover.isOpen}
                  onClose={assigneePopover.onClose}
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
                      onClick={assigneePopover.onOpen}
                    >
                      <TagLeftIcon boxSize="12px" as={FaPlus} />
                      <TagLabel>Add</TagLabel>
                    </Tag>
                  </PopoverTrigger>
                  <PopoverContent bg="primary.900" border="none">
                    <PopoverArrow />
                    <PopoverBody as={Flex} flexDir="column" gap="3">
                      <Text>Assign to</Text>
                      <NormalTextField
                        type="text"
                        placeholder="Enter username"
                        onKeyDown={onAssigneeAdd}
                      />
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Wrap>
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default Bugs;
