import { Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import FullModal from "../../../components/FullModal";
import * as Yup from "yup";
import TextField from "../../../components/Forms/TextField";
import TextArea from "../../../components/Forms/TextArea";
import useToast from "../../../hooks/useToast";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BugModal({ isOpen, onClose }: Props) {
  const initialValues = {
    title: "",
    reproduction: "",
    expected: "",
    actual: "",
  };
  const { successToast } = useToast();

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
          reproduction: Yup.string().required("Bug reproduction is required"),
          expected: Yup.string().required("Expected output is required"),
          actual: Yup.string().required("Actual output is required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex flexDirection={"column"} gap="5">
              <TextField
                type="text"
                name="title"
                label="Bug Title"
                width="600px"
                placeholder="Enter a short yet descriptive title for the bug"
              />

              <TextArea
                name="reproduction"
                label="Steps to Reproduce"
                placeholder="Tell us how can we reproduce this behaviour"
              />
              <TextArea
                name="expected"
                label="Expected Output"
                placeholder="Tell us what you expected to happen"
              />
              <TextArea
                name="actual"
                label="Actual Output"
                placeholder="What was the actual output?"
              />
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
