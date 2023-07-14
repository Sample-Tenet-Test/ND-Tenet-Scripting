require("dotenv").config();
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GIT_API_PERSONAL_ACCESS_TOKEN,
});

const getReadmeContent = async () => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/readme", {
    owner: process.env.GIT_REPO_OWNER,
    repo: process.env.GIT_REPO,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const { data } = response;
  console.log(data);
  if (data) return data.content ? true : false;
  return false;
};

module.exports = getReadmeContent;
// getReadmeContent();
