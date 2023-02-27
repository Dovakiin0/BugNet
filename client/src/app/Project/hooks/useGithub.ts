import { useQuery } from "react-query";
import axios from "axios";

async function getRepos() {
  // fetch all the repos from the user
}

async function getIssues() {
  // fetch all the issues from the repo
}

export const useGetRepos = () => { };

export const useGetIssues = () => { };

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
