import {
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
  Select,
  IconButton,
} from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { FaChevronLeft, FaPen, FaPlus } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import rehypeSanitize from "rehype-sanitize";
import useToast from "../../hooks/useToast";
import Loader from "../../partials/Loader";
import {
  useCreateAssignee,
  useDeleteAssignee,
} from "../Home/hooks/useAssignee";
import { useCreateComment } from "./hooks/useComments";
import AvatarChip from "../Project/components/AvatarChip";
import { useFetchBugById, useToggleBug } from "./hooks/useBugs";
import { useAuthStore } from "../../store/useStore";
import Comment from "./components/Comment";
import EditBugModal from "./components/EditBugModal";
import io from "socket.io-client";

function Bugs({ }) {
  const assigneePopover = useDisclosure();
  const editModal = useDisclosure();
  let socket = io(`ws://${import.meta.env.VITE_DOMAIN_URI}`);

  const { id } = useParams();
  const [comment, setComment] = useState<any>("");
  const [memberId, setMemberId] = useState<number | null>(null);
  const user = useAuthStore((state) => state.user);

  // queries
  const commentMutate = useCreateComment();
  const assigneeMutate = useCreateAssignee();
  const assigneeDelete = useDeleteAssignee();

  const { data, isLoading } = useFetchBugById(Number(id));
  const { successToast, errorToast } = useToast();
  const { mutateAsync } = useToggleBug();

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

  const onMemberAdd = (e: any) => {
    if (e.target.value === "") return setMemberId(null);
    setMemberId(Number(e.target.value));
  };

  const onAssigneeAdd = () => {
    if (memberId !== null) {
      let payload = {
        bugId: Number(id),
        memberId: memberId,
      };
      assigneeMutate.mutateAsync(payload, {
        onSuccess: () => {
          successToast(`Member assigned successfully`);
          assigneePopover.onClose();
        },
        onError: ({ response }: any) => {
          errorToast(response.data.message);
        },
      });
    }
  };

  const onAssigneeDelete = (id: number) => {
    assigneeDelete.mutateAsync(id, {
      onSuccess: () => {
        successToast(`Member removed successfully`);
      },
    });
  };

  const onCommentAdd = () => {
    let payload = {
      bid: Number(id),
      content: comment,
    };
    commentMutate.mutateAsync(payload, {
      onSuccess: (data) => {
        socket.emit("COMMENT", data);
      },
    });
    setComment("");
  };

  const onToggleBug = () => {
    let backLogId = data.Board.Kanban.Board.filter(
      (b: any) => b.title === "Backlog"
    )[0].id;
    let closedBoardId = data.Board.Kanban.Board.filter(
      (b: any) => b.title === "Completed"
    )[0].id;
    let payload = {
      id: id,
      status: data.status === "Open" ? "Closed" : "Open",
      boardId: data.status === "Open" ? closedBoardId : backLogId,
    };
    mutateAsync(payload, {
      onSuccess: () => {
        successToast(`Bug Updated Successfully`);
      },
    });
  };
  return (
    <Flex flexDir="column">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <EditBugModal
            isOpen={editModal.isOpen}
            onClose={editModal.onClose}
            data={data}
          />
          <Box bg="brand.800" padding="30px">
            <Flex flexDir={"column"}>
              <NavLink to={`/project/${data.Project.id}`}>
                <Flex align="center" gap="3">
                  <FaChevronLeft />
                  <Text fontSize={"2xl"}>{data.Project.title}</Text>
                </Flex>
              </NavLink>
            </Flex>
          </Box>
          <Flex padding="50px" flexDir="column">
            <Flex align="center" gap="3">
              <Text fontSize="4xl" color="primary.200">
                #{data.id}
              </Text>
              <Flex gap="3" align="center">
                <Text fontSize="4xl">{data.title}</Text>
                <IconButton
                  icon={<FaPen />}
                  aria-label="bug-edit-btn"
                  bg="primary.900"
                  color="primary.100"
                  _hover={{ bg: "primary.800", color: "primary.200" }}
                  onClick={editModal.onOpen}
                />
              </Flex>
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
                colorScheme={data.status === "Open" ? "green" : "red"}
                borderRadius={"full"}
                variant="subtle"
              >
                {data.status}
              </Tag>
              {data.categoryId !== null ? (
                <Tag
                  size="lg"
                  colorScheme="brand"
                  borderRadius={"full"}
                  variant="solid"
                >
                  {data.Category?.title}
                </Tag>
              ) : (
                ""
              )}
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
                  source={
                    data.description === ""
                      ? "*No Description*"
                      : data.description
                  }
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
                  <Comment comment={d} user={user} />
                ))}
                <MDEditor
                  data-color-mode="dark"
                  value={comment}
                  onChange={setComment}
                  previewOptions={{
                    rehypePlugins: [rehypeSanitize],
                  }}
                />
                <Flex gap="3">
                  <Button
                    colorScheme={"brand"}
                    fontSize={"sm"}
                    size="sm"
                    onClick={onCommentAdd}
                  >
                    Comment
                  </Button>
                  {data.openedBy === user?.id && (
                    <Button
                      colorScheme={data.status === "Open" ? "red" : "green"}
                      fontSize={"sm"}
                      size="sm"
                      onClick={onToggleBug}
                    >
                      {data.status === "Open" ? "Close Bug" : "Reopen Bug"}
                    </Button>
                  )}
                </Flex>
              </Flex>
            </Flex>
            {/* Settings */}
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
                {data.Assignee.map((assign: any, i: number) => (
                  <AvatarChip
                    key={i}
                    src={assign.Member.User.avatar}
                    label={assign.Member.User.username}
                    onDelete={() => onAssigneeDelete(assign.id)}
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
                      <Select
                        name="memberId"
                        fontSize={"sm"}
                        onChange={onMemberAdd}
                      >
                        <option
                          style={{ backgroundColor: "black", color: "white" }}
                          value=""
                        >
                          Assign member to this bug
                        </option>
                        {data.Project.Member.map(
                          (member: any) =>
                            !data.Assignee.some(
                              (a: any) => a.Member.User.id === member.User.id
                            ) && (
                              <option
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                }}
                                key={member.id}
                                value={member.id}
                              >
                                {member.User.username}
                              </option>
                            )
                        )}
                      </Select>
                      <Button
                        colorScheme={"brand"}
                        fontSize={"sm"}
                        size="sm"
                        onClick={onAssigneeAdd}
                      >
                        Add
                      </Button>
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
