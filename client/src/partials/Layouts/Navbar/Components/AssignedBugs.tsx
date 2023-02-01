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
  priority: string;
  createdAt: string;
};

const priority = {
  Low: "gray.300",
  High: "yellow.300",
  Critical: "red.300",
};

function AssignedBugs({ bugList }: Props) {
  return (
    <List spacing={3}>
      {bugList.map((bug) => (
        <ListItem key={bug.id} fontWeight={"bold"}>
          <NavLink to={`/bugs/id`}>
            <Flex align="center">
              <ListIcon
                as={FaBug}
                color={priority[bug.priority as keyof typeof priority]}
              />
              <Tooltip label={bug.title} placement="right">
                <Text _hover={{ color: "purple.300" }}>
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
