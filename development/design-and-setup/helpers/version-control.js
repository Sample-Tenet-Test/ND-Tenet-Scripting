require("dotenv").config();
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GIT_API_PERSONAL_ACCESS_TOKEN,
});

let flag = false;

getVersionControl = async () => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/contents", {
    owner: process.env.GIT_REPO_OWNER,
    repo: process.env.GIT_REPO,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const { data } = response;
  if (data && data.length > 0) {
    checkFilesExist(data);
  }
  return flag;
};

const checkFilesExist = function (data) {
  let dirNames = data?.filter((file) => file.type === "dir");
  let fileList = [];
  if (data && data.length > 0) {
    fileList = data.map((file) => file.name);
  }
  flag = fileList.includes(".gitignore") || fileList.includes(".dockerignore");
  flag = !fileList.includes(".env");
  flag = !fileList.includes("dist") || !fileList.includes("build");

  if (dirNames && dirNames.length > 0) {
    dirNames.forEach((element) => {
      checkFilesInDir(element.path);
    });
  }

  return flag;
};

const checkFilesInDir = async (dirName) => {
  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/" + dirName,
    {
      owner: process.env.GIT_REPO_OWNER,
      repo: process.env.GIT_REPO,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  const { data } = response;
  if (data && data.length > 0) {
    checkFilesExist(data);
  }
};

module.exports = getVersionControl;
// getVersionControl();
