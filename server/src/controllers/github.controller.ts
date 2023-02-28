import { Request, Response } from "express";
import axios from "axios";
const getRepos = async (req: Request, res: Response) => {
  try {
    const { data, status } = await axios.get(
      `https://api.github.com/search/repositories?q=user:${(req.user as any).username
      }`,
      {
        headers: {
          Authorization: `token ${(req.user as any).Github.accessToken}`,
        },
      }
    );
    return res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong!", error: err });
  }
};

const getIssues = async (req: Request, res: Response) => {
  try {
    const { data, status } = await axios.get(
      `https://api.github.com/repos/${(req.user as any).username}/${req.params.repo
      }/issues`,
      {
        headers: {
          Authorization: `token ${(req.user as any).Github.accessToken}`,
        },
      }
    );
    return res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong!", error: err });
  }
};

export { getRepos, getIssues };
