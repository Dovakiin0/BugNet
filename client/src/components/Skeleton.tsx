import { Skeleton as Ske } from "@chakra-ui/react";

type Props = {
  height: string;
  count?: number;
};

function Skeleton({ height, count = 5 }: Props) {
  let skeletons: any = [];

  Array.from(Array(count).keys()).map((i) =>
    skeletons.push(
      <Ske
        key={i}
        height={height}
        startColor="primary.900"
        endColor="primary.700"
        rounded="10"
      />
    )
  );

  return <>{skeletons}</>;
}

export default Skeleton;
