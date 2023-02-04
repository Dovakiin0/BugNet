import { useToast as useSnack } from "@chakra-ui/react";

function useToast() {
  const toast = useSnack();

  function successToast(description: string) {
    toast({
      title: "Success",
      description,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  }
  function warningToast(description: string) {
    toast({
      title: "Warning",
      description,
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  }
  function errorToast(description: string) {
    toast({
      title: "Error",
      description,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  }
  function infoToast(description: string) {
    toast({
      title: "Info",
      description,
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
  }

  return { successToast, warningToast, errorToast, infoToast };
}

export default useToast;
