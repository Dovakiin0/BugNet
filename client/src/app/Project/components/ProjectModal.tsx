import FullModal from "../../../components/FullModal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function ProjectModal({ isOpen, onClose }: Props) {
  function onSubmit(values: any, { setSubmitting }: any) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }

  function validateFields(value: any) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <FullModal isOpen={isOpen} onClose={onClose} header="Create Project">
      <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field name="name" validate={validateFields}>
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              disabled={isSubmitting}
              type="submit"
              colorScheme={"brand"}
              fontSize={"md"}
              size="md"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </FullModal>
  );
}

export default ProjectModal;
