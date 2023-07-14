require("dotenv").config();
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GIT_API_PERSONAL_ACCESS_TOKEN,
});

const getTags = async () => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/tags", {
    owner: process.env.GIT_REPO_OWNER,
    repo: process.env.GIT_REPO,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const { data } = response;
  if (data && data.length > 0) {
    return true;
  }
  return false;
};

module.exports = getTags;
// getTags();
