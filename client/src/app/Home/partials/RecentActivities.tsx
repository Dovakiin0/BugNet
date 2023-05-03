import { Box, Text } from "@chakra-ui/react";
import Skeleton from "../../../components/Skeleton";
import { useGetComment } from "../../Bugs/hooks/useComments";
import Activity from "../components/Activity";
import Empty from "../../../components/Empty";
import io from "socket.io-client";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
type Props = {};

function RecentActivities({ }: Props) {
    const { data, isLoading } = useGetComment();
    let socket: any;
    let client = useQueryClient();
    useEffect(() => {
        socket = io(`ws://${import.meta.env.VITE_DOMAIN_URI}`);
        socket.on("COMMENT_RESPONSE", (_: any) => {
            client.invalidateQueries(["comment"]);
        });
    }, [socket]);

    return (
        <Box
            margin="10px"
            padding="20px"
            rounded={10}
            maxWidth="400px"
            width="400px"
        >
            <Text fontWeight={"bold"} color="primary.200">
                Activities
            </Text>
            {isLoading ? (
                <>
                    <Skeleton height="60px" />
                </>
            ) : data.length > 0 ? (
                data.map((comment: any) => <Activity comment={comment} />)
            ) : (
                <Empty message="Nothing new to show" />
            )}
        </Box>
    );
}

export default RecentActivities;
