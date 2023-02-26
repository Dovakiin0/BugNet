import { Button, Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import FullModal from "../../../components/FullModal";
import * as Yup from "yup";
import TextField from "../../../components/Forms/TextField";
import TextArea from "../../../components/Forms/TextArea";
import useToast from "../../../hooks/useToast";
import { useEditProject } from "../hooks/useProject";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: any;
};

function EditProjectModal({ isOpen, onClose, data }: Props) {
  const { mutateAsync, isLoading, isSuccess, isError } = useEditProject();
  const initialValues = {
    title: data?.title,
    description: data?.description,
  };
  const { successToast, errorToast } = useToast();

  function onSubmit(values: typeof initialValues, { setSubmitting }: any) {
    // perform api call
    let payload = {
      pid: data.id,
      values,
    };
    mutateAsync(payload);
    if (isSuccess) {
      successToast(`Project created successfully`);
      setSubmitting(false);
    }
    if (isError) {
      errorToast(`Something went wrong!`);
    }
    onClose();
  }

  return (
    <FullModal isOpen={isOpen} onClose={onClose} header="Edit Project">
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

export default EditProjectModal;
