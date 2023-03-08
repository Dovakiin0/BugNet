import { useQuery } from "react-query";
import axios from "axios";

async function getRepos() {
  // fetch all the repos from the user
  const data = await axios.get(`/api/v1/github/repo`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
}

async function getIssues({ repo }: any) {
  // fetch all the issues from the repo
  const data = await axios.get(`/api/v1/github/issue/${repo}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
}

export const useGetRepos = () => {
  return useQuery(["repos"], () => getRepos());
};

export const useGetIssues = (params: any) => {
  return useQuery(["issues", params], () => getIssues(params), {
    enabled: params.enabled,
  });
};

/*
  * Refrences
repos uri -
curl \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/user/repos


issues uri - 
  curl \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer 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"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/Dovakiin0/Isekai-RPG/issues
  *
response needed - 
  {
  title: "",
  body: ""
}
*/
