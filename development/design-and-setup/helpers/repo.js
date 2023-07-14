require("dotenv").config();
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GIT_API_PERSONAL_ACCESS_TOKEN,
});

async function test() {
  const queryString =
    "q=" +
    encodeURIComponent("repo:terencen-cuelogic/node-express-starter index.js");
  const response = await octokit.request(`GET /search/code?${queryString}`, {});
  console.log("Response:: ", response);
  console.log("Items:: ", response.data.items);
}

async function testSimple() {
  const response = await octokit.request(`GET /repos/{owner}/{repo}/readme`, {
    owner: "terencen-cuelogic",
    repo: "react-router-role-authorization",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  console.log("Response:: ", response);
  console.log("Items:: ", response.data.items);
}

findChanglog = async () => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/contents", {
    owner: "terencen-cuelogic",
    repo: "react-router-role-authorization",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const { data } = response;
  if (data && data.length > 0) {
    const changelog = data.filter(
      (item) => item.name.toLowerCase() === "changelog.md"
    );
    // console.log("changelog:: ", changelog);
    if (changelog.length > 0) return true;
    return false;
  }
  return false;
};

module.exports = findChanglog;
// testSimple();
