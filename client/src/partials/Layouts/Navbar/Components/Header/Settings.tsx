import FullModal from "../../../../../components/FullModal";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Flex,
  Avatar,
  Text,
  Wrap,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useUserUpdate } from "./hooks/useUserUpdate";
import useToast from "../../../../../hooks/useToast";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: any;
};

export default function Settings({ isOpen, onClose, user }: Props) {
  const [selected, setSelected] = useState<string>("");
  const { mutate } = useUserUpdate();
  const { successToast } = useToast();
  const avatarList = [
    "https://wow.zamimg.com/uploads/screenshots/small/661495.jpg",
    "https://wow.zamimg.com/uploads/screenshots/small/661500.jpg",
    "https://wow.zamimg.com/uploads/screenshots/small/661523.jpg",
    "https://wow.zamimg.com/uploads/screenshots/small/661530.jpg",
    "https://wow.zamimg.com/uploads/screenshots/small/661526.jpg",
    "https://wow.zamimg.com/uploads/screenshots/small/661521.jpg",
    "https://wow.zamimg.com/uploads/screenshots/small/661506.jpg",
    "https://wow.zamimg.com/uploads/screenshots/small/661502.jpg",
    "https://wow.zamimg.com/uploads/screenshots/small/661503.jpg",
  ];

  const onUpdateAvatar = () => {
    mutate(
      { avatar: selected },
      {
        onSuccess: () => {
          successToast("Avatar Updated Successfully");
          onClose();
        },
      }
    );
  };

  return (
    <FullModal
      isOpen={isOpen}
      onClose={() => {
        setSelected("");
        onClose();
      }}
      header="Settings"
    >
      <Tabs orientation="vertical" variant="soft-rounded">
        <TabList>
          <Tab
            _selected={{ color: "white", bg: "brand.500" }}
            color="primary.200"
          >
            Profile
          </Tab>
          {/*          <Tab
            isDisabled={user.Github !== null}
            _selected={{ color: "white", bg: "brand.500" }}
            color="primary.200"
          >
            Account
          </Tab>*/}
        </TabList>

        <TabPanels>
          <TabPanel maxWidth="600px">
            <Flex flexDir="column" gap="5">
              <Text fontSize="2xl">Avatar</Text>
              <Avatar
                name={user.username}
                size="lg"
                src={selected ? selected : user.avatar}
              />
              <Text fontSize="2xl">Set New Avatar</Text>
              <Wrap spacing="30px">
                {avatarList.map((a: string, i: number) => (
                  <Avatar
                    size="xl"
                    src={a}
                    key={i}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => setSelected(a)}
                  />
                ))}
              </Wrap>
              <Button
                fontSize="sm"
                size="sm"
                colorScheme="brand"
                isDisabled={selected === ""}
                onClick={onUpdateAvatar}
              >
                Save
              </Button>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </FullModal>
  );
}
