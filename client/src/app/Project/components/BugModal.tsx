import {
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import FullModal from "../../../components/FullModal";
import * as Yup from "yup";
import TextField from "../../../components/Forms/TextField";
import useToast from "../../../hooks/useToast";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import rehypeSanitize from "rehype-sanitize";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BugModal({ isOpen, onClose }: Props) {
  const initialValues = {
    title: "",
  };
  const { successToast } = useToast();
  const [value, setValue] = useState<any>(
    "### Bug Description\n\n### Steps to Reproduce\n1. \n2. \n3. \n### Expected Output\n\n### Actual Output\n\n"
  );

  function onSubmit(values: typeof initialValues, { setSubmitting }: any) {
    // perform api call
    setSubmitting(false);
    successToast(`Bug ${values.title} created successfully`);
    onClose();
  }

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
                  : BugNet
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
