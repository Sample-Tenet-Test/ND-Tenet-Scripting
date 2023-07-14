const findChanglog = require("./helpers/repo");
const checkBranchingStrategy = require("./helpers/branching-strategy");
const checkHotfixStrategy = require("./helpers/hotfix-strategy");
const getTags = require("./helpers/tags");
const { Constant } = require("./constant/constant");

describe("Branching strategy", () => {
  test("Branching strategy to facilitate continuous integration & release management processes e.g. Gitflow", async () => {
    /**
     * 1. Get the list of branches
     * 2. Check if there are branches like main, master, dev, develop, development, feature, task
     * References:
     * https://docs.github.com/en/rest/branches/branches?apiVersion=2022-11-28#list-branches
     * https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
     * https://www.abtasty.com/blog/git-branching-strategies/
     * */
    const data = await checkBranchingStrategy(Constant.branchingLevel.subLevel);
    expect(data).toBe(true);
  });

  test("Hotfix strategy to provide quick patches to production environments e.g. hotfix branch management", async () => {
    /**
     * 1. Get the list of branches
     * 2. Check is a hotfix branch exists
     * References:
     * https://docs.github.com/en/rest/branches/branches?apiVersion=2022-11-28#list-branches
     * */
    const data = await checkHotfixStrategy();
    expect(data).toBe(true);
  });

  test("Maintain code base for different environments use branch separation which is also well documented e.g. Staging, Production, Development branch", async () => {
    /**
     * 1. Get the list of branches
     * 2. Check if there are branches like main, master, dev, develop, development
     * References:
     * https://docs.github.com/en/rest/branches/branches?apiVersion=2022-11-28#list-branches
     * */
    const data = await checkBranchingStrategy("env");
    expect(data).toBe(true);
  });

  test("Tag specific points in a repository history for quick deployment or rollback e.g Git tags", async () => {
    /**
     * 1. Get the list of tags using the repo refs
     * 2. Check if tags exist in the response
     * References:
     * https://stackoverflow.com/a/18999865
     * http://developer.github.com/v3/repos/#list-tags
     * */
    const data = await getTags();
    expect(data).toBe(true);
  });

  test("Maintain changelog e.g. using git changelog", async () => {
    const data = await findChanglog();
    expect(data).toBe(true);
  });
});
