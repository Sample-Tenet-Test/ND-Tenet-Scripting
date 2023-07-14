require("dotenv").config();

const getBranches = require("./branches");
const { Constant } = require("../constant/constant");

const checkBranchingStrategy = async (check) => {
  const gitBranches = await getBranches();
  let branchNames;
  if (check === Constant.branchingLevel.subLevel) {
    branchNames = Constant.envBranches;
  } else {
    branchNames = Constant.subBranches;
  }

  if (gitBranches && gitBranches.length > 0) {
    const branches = gitBranches.map((branch) => {
      return branch.name;
    });
    let matchingList = Constant.subBranches.filter((branch) => {
      return branches.toString().match(branch);
    });

    if (matchingList.length >= Constant.minBranches) {
      return true;
    }
    return false;
  }
  return false;
};

module.exports = checkBranchingStrategy;
// checkBranchingStrategy(Constant.branchingLevel.subLevel);
