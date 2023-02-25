import {
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  Box,
  Select,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import FullModal from "../../../components/FullModal";
import * as Yup from "yup";
import TextField from "../../../components/Forms/TextField";
import useToast from "../../../hooks/useToast";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import { useCreateBug } from "../../Bugs/hooks/useBugs";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project: any;
};

export default function EditBugModal({ isOpen, onClose, project }: Props) {
  const initialValues = {
    title: "",
  };
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [priority, setPriority] = useState<number | null>(0);
  const { successToast, errorToast } = useToast();
  const [value, setValue] = useState<any>(
    "### Bug Description\n\n### Steps to Reproduce\n1. \n2. \n3. \n### Expected Output\n\n### Actual Output\n\n"
  );

  // BugMutate
  const { mutateAsync } = useCreateBug();

  function onSubmit(values: typeof initialValues, { setSubmitting }: any) {
    // perform api call
    let payload = {
      title: values.title,
      projectId: project.id,
      description: value,
      priority: priority,
      categoryId: categoryId,
    };
    mutateAsync(payload, {
      onSuccess: () => {
        successToast(`Bug ${values.title} created successfully`);
      },
      onError: () => {
        errorToast(`Error creating bug`);
      },
    });
    setSubmitting(false);
    onClose();
  }

  const onCategoryChange = (e: any) => {
    if (e.target.value === "") return setCategoryId(null);
    setCategoryId(e.target.value);
  };

  const onPriorityChange = (e: any) => {
    setPriority(e.target.value);
  };

  return (
    <FullModal isOpen={isOpen} onClose={onClose} header="Create New Bug">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          title: Yup.string().required("Bug Title is required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex flexDirection={"column"} gap="5" maxWidth="900px">
              <TextField
                type="text"
                name="title"
                label="Bug Title"
                width="500px"
                placeholder="Enter a short yet descriptive title for the bug"
              />
              <Flex align="center" gap="3">
                <Box>
                  <Text>Assign Category</Text>
                  <Select
                    name="categoryId"
                    fontSize={"sm"}
                    width={"250px"}
                    onChange={onCategoryChange}
                  >
                    <option
                      style={{ backgroundColor: "black", color: "white" }}
                      value=""
                    >
                      Assign Category for bug
                    </option>
                    {project.Category.map((cat: any) => (
                      <option
                        style={{ backgroundColor: "black", color: "white" }}
                        key={cat.id}
                        value={cat.id}
                      >
                        {cat.title}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <Text>Set Priority</Text>
                  <Select
                    name="pririty"
                    fontSize={"sm"}
                    width={"250px"}
                    onChange={onPriorityChange}
                  >
                    <option
                      style={{ backgroundColor: "black", color: "white" }}
                      value={0}
                    >
                      Low
                    </option>
                    <option
                      style={{ backgroundColor: "black", color: "white" }}
                      value={1}
                    >
                      High
                    </option>
                    <option
                      style={{ backgroundColor: "black", color: "white" }}
                      value={2}
                    >
                      Critical
                    </option>
                  </Select>
                </Box>
              </Flex>
              <Box>
                <Text>Bug Description</Text>
                <Text fontSize="sm" color="primary.200">
                  A Good Bug description should include:
                  <UnorderedList>
                    <ListItem>Detailed description of the bug</ListItem>
                    <ListItem>Steps to reproduce the behaviour</ListItem>
                    <ListItem>Expected vs Actual output</ListItem>
                  </UnorderedList>
                </Text>
              </Box>
              <Box width={"900px"}>
                <MDEditor
                  data-color-mode="dark"
                  value={value}
                  onChange={setValue}
                  height={500}
                  previewOptions={{
                    rehypePlugins: [rehypeSanitize],
                  }}
                  preview="edit"
                />
              </Box>
              <Flex gap="1">
                <Text fontSize="sm" color="primary.200">
                  You are creating this bug on Project
                </Text>
                <Text fontSize={"sm"} fontWeight="bold">
                  : {project.title}
                </Text>
              </Flex>
              <Button
                disabled={isSubmitting}
                type="submit"
                colorScheme={"brand"}
                fontSize={"md"}
                size="md"
              >
                Submit
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </FullModal>
  );
}
