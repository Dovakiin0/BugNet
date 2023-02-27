import { Box, Flex, Text, Image, Button, Divider } from "@chakra-ui/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import TextField from "../../components/Forms/TextField";
import * as Yup from "yup";
import { useLogin } from "./hooks/useLogin";
import useToast from "../../hooks/useToast";
import { FaGithub } from "react-icons/fa";
import { useOauth } from "./hooks/useOauth";
import { useEffect } from "react";

type Props = {};

function Login({ }: Props) {
  const { successToast, errorToast } = useToast();
  const navigate = useNavigate();
  const { mutateAsync } = useLogin();
  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/", { replace: true });
  });

  function onSubmit(values: typeof initialValues, { setSubmitting }: any) {
    // perform api call
    mutateAsync(values, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.token);
        successToast(`Logged in Successfully!`);
        navigate("/");
      },
      onError: ({ response }: any) => {
        errorToast(response.data.message);
      },
    });
    setSubmitting(false);
  }

  const oauthHandler = () => {
    const oauth = useOauth();
    oauth.call();
  };

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
        height="500px"
        bg={"primary.800"}
        padding="20px"
        flexDir="column"
        gap="10"
      >
        <Box>
          <Text fontSize={"3xl"} fontWeight="bold">
            Login
          </Text>
          <Flex gap="2">
            <Text color={"primary.200"} fontSize="sm">
              Don't have an account?{" "}
            </Text>
            <NavLink to="/register">
              <Text fontSize="sm" _hover={{ borderBottom: "1px solid white" }}>
                Register
              </Text>
            </NavLink>
          </Flex>
        </Box>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={Yup.object({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string()
              .min(8)
              .max(16)
              .required("Password is required"),
          })}
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex flexDirection={"column"} gap="5">
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
        <Divider />
        <Button
          bg="primary.800"
          _hover={{ bg: "primary.900" }}
          leftIcon={<FaGithub />}
          onClick={oauthHandler}
        >
          Login With Github
        </Button>
      </Flex>
    </Flex>
  );
}

export default Login;
