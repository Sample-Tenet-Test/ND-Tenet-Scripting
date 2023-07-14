require("dotenv").config();
const { Octokit } = require("@octokit/rest");
const UserRole = require("../constant/role-constant");
const octokit = new Octokit({
  auth: process.env.GIT_API_PERSONAL_ACCESS_TOKEN,
});
const checkTeamUserAuth = async () => {
  const response = await octokit.request(
    "GET /orgs/{org}/teams/{team_slug}/memberships/{username}",
    {
      org: process.env.GIT_ORGANIZATION_NAME,
      username: process.env.GIT_REPO_OWNER,
      team_slug: process.env.GIT_TEAM_SLUG,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  const { data } = response;

  if (data) {
    if (data.state === "active") {
      return UserRole.Role.includes(data.role);
    }
    return false;
  }
  return false;
};

module.exports = checkTeamUserAuth;
// checkTeamUserAuth();
