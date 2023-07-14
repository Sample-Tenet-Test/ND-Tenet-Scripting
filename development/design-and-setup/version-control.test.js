const getVersionControl = require("./helpers/version-control");
const getReadmeContent = require("./helpers/readme-content");
const checkTeamRepoVisibility = require("./helpers/check-team-repo-visibility");
const checkTeamUserAuth = require("./helpers/check-team-user-auth");

describe("Branching strategy", () => {
  test.skip("Follow right naming standards to identify repositories e.g. cue_projectname", async () => {
    /**
     * TBD
     */
  });

  test("Use repository visibility / privacy levels for restricting access to repository e.g private or accessible within organisation", async () => {
    /**
     * 1. Get the list of teams
     * 2. Check if the response contains data
     * References:
     * https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repository-teams
     */
    const data = await checkTeamRepoVisibility();
    expect(data).toBe(true);
  });

  test.skip("For ease of organizing and retrieving files and folders use appropriate naming conventions e.g. cue_projectname/Content/contenfile1,cue_projectname/Services/service1.cs", async () => {
    /**
     * 1. Get the list of repo contents
     * 2. Repeat the above step till 3 levels and check if contents exist in every directory/path
     * References:
     * https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content
     */
    const data = await getReadmeContent();
    expect(data).toBe(true);
  });

  test("Repository description containing details, setup information etc. should be regularly & well documented in Readme files and wikis e.g. Readme.md file in Git repositories", async () => {
    /**
     * 1. Get the readme file from the repo
     * 2. Check if the response has a value in the contents property
     * References:
     * https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-a-repository-readme
     */
    const data = await getReadmeContent();
    expect(data).toBe(true);
  });
  test("Ensure build artifacts, secrets and any other files that should not be checked-in are enforced e.g. using .gitignore, .dockerignore", async () => {
    /**
     * 1. Get the list of repo contents
     * 2. Check if a .gitignore or .dockerignore exists in the root or in any other directories
     * 3. Check that no .env file exists at any level
     * 4. Check that no build or dist or any type of build folder exists
     * References:
     * https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content
     */
    const data = await getVersionControl();
    expect(data).toBe(true);
  });
  test("Restrict unauthorized users from accessing the repository e.g. Admin/Maintain rights for project lead/manager, Write rights for active developers, Read rights may be given to external reviewer", async () => {
    /**
     * 1. Get the list of teams
     * 2. Check if the response contains data
     * References:
     * https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repository-teams
     */
    const data = await checkTeamUserAuth();
    expect(data).toBe(true);
  });
  test.skip("Use secured connection for cloning repositories e.g. SSH", async () => {
    /**
     * TBD
     */
  });
});
