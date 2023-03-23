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
} from "@chakra-ui/react";
import { useState } from "react";
import { useUserUpdate } from "./hooks/useUserUpdate";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: any;
};

export default function Settings({ isOpen, onClose, user }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const { mutate } = useUserUpdate();

  const avatarList = [
    "https://wow.zamimg.com/uploads/screenshots/small/661495.jpg",
    "https://wow.zamimg.com/uploads/screenshots/small/661500.jpg",
    "https://wow.zamimg.com/uploads/screenshots/small/661523.jpg",
  ];

  return (
    <FullModal isOpen={isOpen} onClose={onClose} header="Settings">
      <Tabs orientation="vertical" variant="soft-rounded">
        <TabList>
          <Tab
            _selected={{ color: "white", bg: "brand.500" }}
            color="primary.200"
          >
            Profile
          </Tab>
          <Tab
            isDisabled={user.Github !== null}
            _selected={{ color: "white", bg: "brand.500" }}
            color="primary.200"
          >
            Account
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel minWidth="500px">
            <Flex flexDir="column" gap="5">
              <Text fontSize="2xl">Avatar</Text>
              <Avatar
                name={user.username}
                size="lg"
                src={selected !== null ? user.avatar : avatarList[selected]}
              />
              <Text fontSize="2xl">Set New Avatar</Text>
              <Wrap spacing="30px">
                {avatarList.map((a: string, i: number) => (
                  <Avatar
                    size="xl"
                    src={a}
                    key={i}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => setSelected(i)}
                  />
                ))}
              </Wrap>
            </Flex>
          </TabPanel>
          <TabPanel minWidth="500px">
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </FullModal>
  );
}
