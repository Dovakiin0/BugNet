import { Skeleton as Ske } from "@chakra-ui/react";

type Props = {
  height: string;
  count?: number;
  startColor?: string;
  endColor?: string;
};

function Skeleton({
  height,
  count = 5,
  startColor = "primary.900",
  endColor = "primary.700",
}: Props) {
  let skeletons: any = [];

  Array.from(Array(count).keys()).map((i) =>
    skeletons.push(
      <Ske
        key={i}
        height={height}
        startColor={startColor}
        endColor={endColor}
        rounded="10"
      />
    )
  );

  return <>{skeletons}</>;
}

export default Skeleton;
