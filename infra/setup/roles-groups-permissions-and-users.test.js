const checkFineGranedPolicies = require("./helpers/fine-grained-policies");

describe("Roles, Groups, Permissions, and Users", () => {
  test.skip("Fine-grained policies are created following the principle of least privilege E.g. AWS EC2 read-only policy", () => {
    const data = checkFineGranedPolicies();
    expect(data).toBe(true);
  });
});
