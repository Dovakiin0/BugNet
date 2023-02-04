import { Button, Flex } from "@chakra-ui/react";
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

function ProjectModal({ isOpen, onClose }: Props) {
  const initialValues = {
    name: "",
    description: "",
  };
  const { successToast } = useToast();

  function onSubmit(values: typeof initialValues, { setSubmitting }: any) {
    // perform api call
    setSubmitting(false);
    successToast(`Project ${values.name} created successfully`);
    onClose();
  }

  return (
    <FullModal isOpen={isOpen} onClose={onClose} header="Create New Project">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          name: Yup.string().required("Project name is required"),
          description: Yup.string().required("Project desctiption is required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <Flex flexDirection={"column"} gap="5">
              <TextField
                type="text"
                name="name"
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

export default ProjectModal;
