import { Box } from "@chakra-ui/react";
import { useQuery } from "../../helper/util";

export default function OAuthCallback() {
  const query = useQuery();

  window.opener.authenticateCallback(query.get("token"));
  window.close();
  return <Box>Success</Box>;
}
