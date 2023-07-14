const getBranches = require("./branches");
const { Constant } = require("../constant/constant");

const checkHotfixStrategy = async () => {
  const branches = await getBranches();

  if (branches && branches.length > 0) {
    const isHotfixBranchIncluded = branches.some(
      (branch) => branch.name === Constant.hotfixBranch
    );

    if (isHotfixBranchIncluded) {
      return true;
    }
    return false;
  }
  return false;
};

module.exports = checkHotfixStrategy;
// checkHotfixStrategy();
