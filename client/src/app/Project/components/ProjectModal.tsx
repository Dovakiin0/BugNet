import { Button, Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import FullModal from "../../../components/FullModal";
import * as Yup from "yup";
import TextField from "../../../components/Forms/TextField";
import TextArea from "../../../components/Forms/TextArea";
import useToast from "../../../hooks/useToast";
import { useCreateProject } from "../hooks/useProject";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function ProjectModal({ isOpen, onClose }: Props) {
  const { mutateAsync, isLoading, isSuccess, isError } = useCreateProject();
  const initialValues = {
    title: "",
    description: "",
  };
  const { successToast, errorToast } = useToast();

  function onSubmit(values: typeof initialValues, { setSubmitting }: any) {
    // perform api call
    mutateAsync(values);
    if (isSuccess) {
      successToast(`Project ${values.title} created successfully`);
      setSubmitting(false);
    }
    if (isError) {
      errorToast(`Something went wrong!`);
    }
    onClose();
  }

  return (
    <FullModal isOpen={isOpen} onClose={onClose} header="Create New Project">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          title: Yup.string().required("Project name is required"),
          description: Yup.string().required("Project description is required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex flexDirection={"column"} gap="5">
              <TextField
                type="text"
                name="title"
                label="Project Name"
                width="600px"
                placeholder="Enter project name"
              />
              <TextArea
                name="description"
                label="Project Description"
                placeholder="Enter short project description"
              />
              <Button
                disabled={isLoading}
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

export default ProjectModal;
