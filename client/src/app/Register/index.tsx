import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import TextField from "../../components/Forms/TextField";
import * as Yup from "yup";
import { useRegister } from "./hooks/useRegister";
import useToast from "../../hooks/useToast";

type Props = {};

function Register({}: Props) {
  const { mutateAsync } = useRegister();
  const { successToast, errorToast } = useToast();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  function onSubmit(values: typeof initialValues, { setSubmitting }: any) {
    // perform api call
    mutateAsync(values, {
      onSuccess: (data) => {
        successToast(`Registered Successfully! Please login`);
        navigate("/login");
      },
      onError: ({ response }: any) => {
        errorToast(response.data.message);
      },
    });
    setSubmitting(false);
  }

  return (
    <Flex
      justify={"center"}
      align={"center"}
      height="100vh"
      flexDir="column"
      gap="10"
    >
      <Flex>
        <NavLink to="/">
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Box boxSize={"30px"} marginRight="20px">
              <Image src="/LogoNoBack.png" alt="logo" />
            </Box>
            <Text
              color="primary.100"
              fontWeight={"extrabold"}
              fontSize={"2xl"}
              letterSpacing="4px"
            >
              BUGNET
            </Text>
          </Flex>
        </NavLink>
      </Flex>
      <Flex
        width="500px"
        height="600px"
        bg={"primary.800"}
        padding="20px"
        flexDir="column"
        gap="5"
      >
        <Box>
          <Text fontSize={"3xl"} fontWeight="bold">
            Register
          </Text>
          <Flex gap="2">
            <Text color={"primary.200"} fontSize="sm">
              Already have an account?{" "}
            </Text>
            <NavLink to="/login">
              <Text fontSize="sm" _hover={{ borderBottom: "1px solid white" }}>
                Login
              </Text>
            </NavLink>
          </Flex>
        </Box>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={Yup.object({
            username: Yup.string()
              .min(3, "Must be at least 3 characters")
              .required("Username is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Must be at least 8 characters")
              .max(20, "Must be 20 characters or less")
              .required("Password is required"),
            password2: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Confirm Password is required"),
          })}
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex flexDirection={"column"} gap="5">
                <TextField
                  type="text"
                  name="username"
                  label="Username"
                  placeholder="Your username"
                />
                <TextField
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="Your email address"
                />
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Your password"
                />
                <TextField
                  type="password"
                  name="password2"
                  label="Confirm Password"
                  placeholder="Confirm password"
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
      </Flex>
    </Flex>
  );
}

export default Register;
