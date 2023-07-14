require("dotenv").config();
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GIT_API_PERSONAL_ACCESS_TOKEN,
});

const checkTeamRepoVisibility = async () => {
  const response = await octokit.request(
    "GET /orgs/{org}/teams/{team_slug}/repos",
    {
      org: process.env.GIT_ORGANIZATION_NAME,
      team_slug: process.env.GIT_TEAM_SLUG,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  const { data } = response;
  if (data && data.length > 0) return data[0].private ? true : false;
  return false;
};

module.exports = checkTeamRepoVisibility;
// checkTeamRepoVisibility();
