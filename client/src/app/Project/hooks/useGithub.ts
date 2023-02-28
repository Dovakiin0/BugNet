import { useQuery } from "react-query";
import axios from "axios";

async function getRepos({ bearer, username }: any) {
  // fetch all the repos from the user
  const data = await axios.get(
    `https://api.github.com/search/repositories?q=user:${username}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${bearer}`,
      },
    }
  );
  return data;
}

async function getIssues({ bearer, username, repo }: any) {
  // fetch all the issues from the repo
  const data = await axios.get(
    `https://api.github.com/repos/${username}/${repo}/issues`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${bearer}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  return data;
}

export const useGetRepos = (params: any) => {
  return useQuery(["repos"], () => getRepos(params));
};

export const useGetIssues = (params: any) => {
  return useQuery(["issues"], () => getIssues(params), {
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
