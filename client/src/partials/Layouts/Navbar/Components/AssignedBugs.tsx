import {
  List,
  ListItem,
  ListIcon,
  Tooltip,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaBug } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import moment from "moment";

type Props = {
  bugList: Bug[];
};

type Bug = {
  id: number;
  title: string;
  priority: number;
  createdAt: string;
};

const priorityList = {
  0: {
    color: "gray.300",
    title: "Low",
  },
  1: {
    color: "orange.300",
    title: "High",
  },
  2: {
    color: "red.300",
    title: "Critical",
  },
};

function AssignedBugs({ bugList }: Props) {
  return (
    <List spacing={3}>
      {bugList.map((bug) => (
        <ListItem key={bug.id} fontWeight={"bold"}>
          <NavLink to={`/bugs/${bug.id}`}>
            <Flex align="center">
              <ListIcon
                as={FaBug}
                color={
                  priorityList[bug.priority as keyof typeof priorityList].color
                }
              />
              <Tooltip label={bug.title} placement="right">
                <Text _hover={{ color: "purple.300" }} fontSize="sm">
                  #{bug.id}/
                  {bug.title.length > 25
                    ? `${bug.title.slice(0, 24)}..`
                    : bug.title}
                </Text>
              </Tooltip>
            </Flex>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
}

export default AssignedBugs;
