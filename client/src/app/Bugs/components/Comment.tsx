import {
  useDisclosure,
  Box,
  IconButton,
  Flex,
  Avatar,
  Text,
} from "@chakra-ui/react";
import DeletePopOver from "../../../components/DeletePopOver";
import MDEditor from "@uiw/react-md-editor";
import { FaTrash } from "react-icons/fa";
import useToast from "../../../hooks/useToast";
import { useDeleteComment } from "../hooks/useComments";

export default function Comment({ comment, user }: any) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  // const [editMode, setEditMode] = useState(false);
  const { successToast } = useToast();
  const commentDelete = useDeleteComment();

  const onCommentDelete = (id: number) => {
    commentDelete.mutateAsync(id, {
      onSuccess: () => {
        successToast(`Comment deleted successfully`);
        onClose();
      },
    });
  };
  return (
    <Box key={comment.id} bg="primary.800" padding="20px" rounded="10" gap="5">
      <Flex justify={"space-between"}>
        <Box flexGrow="1">
          <MDEditor.Markdown
            wrapperElement={{ "data-color-mode": "dark" }}
            key={comment.id}
            source={comment.content}
            style={{
              whiteSpace: "pre-wrap",
              background: "none",
              color: "white",
            }}
          />
        </Box>
        {comment.User.id === user?.id && (
          <Flex align="center" flexDir="column">
            <DeletePopOver
              isOpen={isOpen}
              onClose={() => onClose()}
              onConfirm={() => onCommentDelete(comment.id)}
            >
              <IconButton
                aria-label="Delete"
                bg="primary.800"
                color="red.300"
                _hover={{ bg: "primary.900" }}
                icon={<FaTrash />}
                onClick={() => onOpen()}
              />
            </DeletePopOver>
          </Flex>
        )}
      </Flex>
      <Flex gap="3" align="center" marginTop="10px">
        <Avatar
          src={comment.User.avatar}
          name={comment.User.username}
          size="sm"
        />
        <Text fontSize="sm">{comment.User.username}</Text>
        <Text color="primary.200" fontSize={"sm"}>
          {new Date(comment.createdAt).toDateString()}
        </Text>
      </Flex>
    </Box>
  );
}
