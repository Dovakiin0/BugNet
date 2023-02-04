import { Field, useField } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function TextField({ label, ...props }: any) {
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.error !== "" && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field as={Input} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
}

export default TextField;
