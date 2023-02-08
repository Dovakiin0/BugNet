import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import NormalTextField from "../../components/Forms/NormalTextField";
import AvatarChip from "../Project/components/AvatarChip";

type Props = {};

const dummy = `
### Bug Description
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae enim vitae leo tincidunt iaculis quis sit amet nisi. Etiam non ullamcorper est. Aliquam vel lobortis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam blandit nulla metus, eget imperdiet magna feugiat imperdiet. Donec dictum rhoncus enim rutrum viverra. Etiam feugiat tortor at metus viverra, sit amet sollicitudin ipsum tristique. Nam at nunc sed metus blandit vehicula. Aenean ut nisl et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent scelerisque volutpat malesuada. Nulla volutpat massa non turpis semper, facilisis dignissim augue hendrerit. Praesent viverra efficitur imperdiet. Proin nec erat bibendum, ultrices tortor vel, interdum libero. Integer eget justo varius, condimentum est vitae, dictum massa. Phasellus diam massa, interdum ut est at, faucibus tempus augue.

### Steps to Reproduce
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
2. Pellentesque mollis eros vel bibendum tristique.
3. Donec luctus velit semper metus ultricies semper.
### Expected Output
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at augue blandit, condimentum eros et, finibus orci. Nam convallis orci libero, at aliquam mauris pretium id. Cras dictum porta nibh id pretium. Fusce non mauris commodo, accumsan nisi eu, suscipit lacus. Curabitur a pharetra purus, sed sagittis dui. Quisque porta eros at diam laoreet porta. Nullam fringilla massa ut metus dictum molestie.
### Actual Output
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis laoreet neque. Sed imperdiet, orci sit amet tempus tempor, dui magna efficitur purus, eu placerat mauris odio id ligula. Nam a convallis nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras id nisl id diam porttitor scelerisque quis eu nibh. Morbi eget lacus suscipit, lacinia tortor ac, eleifend nunc. Nulla mattis dignissim placerat. Pellentesque pellentesque venenatis ex. Ut rhoncus nunc et neque semper mollis. Maecenas aliquam sem ac finibus viverra. Cras ac ullamcorper tortor, non dictum odio. Praesent a lorem vel ligula varius cursus at a nisi. Duis in gravida mi.
`;

function Bugs({}: Props) {
  const assigneePopover = useDisclosure();

  const onAssigneeAdd = () => {};

  return (
    <Flex flexDir="column">
      <Box bg="brand.800" padding="30px">
        <Flex flexDir={"column"}>
          <Text fontSize={"2xl"}>BugNet</Text>
        </Flex>
      </Box>
      <Flex padding="50px" flexDir="column">
        <Flex align="center" gap="3">
          <Text fontSize="4xl" color="primary.200">
            #1
          </Text>
          <Text fontSize="4xl">Cannot Login</Text>
        </Flex>
        <Flex gap="3" align="center">
          <Text fontSize="lg" color="primary.200">
            Opened by :
          </Text>
          <Text fontSize="lg">Dovakiin0</Text>
          <Text color="primary.200" fontSize={"lg"}>
            Feb 7, 2023
          </Text>
          <Text fontSize="lg" color="red.300">
            Critical
          </Text>
          <Tag
            size="lg"
            colorScheme="green"
            borderRadius={"full"}
            variant="subtle"
          >
            Open
          </Tag>
        </Flex>
      </Flex>
      <Flex
        paddingLeft="50px"
        marginRight="50px"
        justify={"space-between"}
        gap="5"
      >
        {/* Details */}
        <Flex flexDir="column" gap="3" width="full">
          {/* Description */}
          <Box bg="primary.800" padding="20px" rounded="10">
            <MDEditor.Markdown
              source={dummy}
              style={{
                whiteSpace: "pre-wrap",
                background: "none",
                color: "white",
              }}
            />
          </Box>
        </Flex>
        {/* Settings */}
        <Divider orientation="vertical" height="60vh" />
        <Flex flexDir="column" gap="4" width="400px">
          <Box>
            <Text fontSize="xl" color="primary.200">
              Assignee
            </Text>
            <Text fontSize="sm" color="primary.200">
              You can add upto 4 member
            </Text>
          </Box>
          <Wrap>
            <AvatarChip
              src=""
              label="Dovakiin0"
              onDelete={() => {}}
              props={{ bg: "primary.900" }}
            />
            <AvatarChip
              src=""
              label="Dovakiin0"
              onDelete={() => {}}
              props={{ bg: "primary.900" }}
            />
            <AvatarChip
              src=""
              label="Dovakiin0"
              onDelete={() => {}}
              props={{ bg: "primary.900" }}
            />
            <Popover
              isOpen={assigneePopover.isOpen}
              onClose={assigneePopover.onClose}
              placement="bottom"
            >
              <PopoverTrigger>
                <Tag
                  size={"lg"}
                  key={"sm"}
                  variant="subtle"
                  colorScheme="gray"
                  borderRadius={"full"}
                  _hover={{ cursor: "pointer" }}
                  onClick={assigneePopover.onOpen}
                >
                  <TagLeftIcon boxSize="12px" as={FaPlus} />
                  <TagLabel>Add</TagLabel>
                </Tag>
              </PopoverTrigger>
              <PopoverContent bg="primary.900" border="none">
                <PopoverArrow />
                <PopoverBody as={Flex} flexDir="column" gap="3">
                  <Text>Assign to</Text>
                  <NormalTextField
                    type="text"
                    placeholder="Enter username"
                    onKeyDown={onAssigneeAdd}
                  />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Wrap>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Bugs;
