import React from "react";
import { Skeleton as Ske } from "@chakra-ui/react";

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

function Skeleton({ isLoading, children }: Props) {
  return (
    <Ske
      isLoaded={!isLoading}
      height="full"
      rounded="10"
      startColor="primary.700"
      endColor="primary.900"
    >
      {children}
    </Ske>
  );
}

export default Skeleton;
