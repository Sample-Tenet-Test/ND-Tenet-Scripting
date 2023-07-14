## Tenet Scripts Contribution Guide

Tenet scripts are a collection of test cases that are written to collect and test the data for every activity in Tenet

### Hierarchy 
- Area
    - Sub-Area
        - Item
            - Activity

### Process
- We are developing test cases for every `Activity`
- Every `Area` will be a directory and will contain multiple `Sub-Areas` 
- Every `Sub-Area` will be a directory and will contain multiple `Items`
- Every `Item` will be a test file e.g. `<ITEM-NAME.test.js>` and will contain test cases for every `Activity` under that `Item`
- Template of the test case is as follows
    ```javascript
    const <UTILITY-FUNCTION-1> = require("./helpers/<HELPER-1>");
    const <UTILITY-FUNCTION-2> = require("./helpers/<HELPER-2>");

    describe("<ITEM-NAME-1>", () => {
        test("<ACTIVITY-NAME-1>", async () => {
            const data = await <UTILITY-FUNCTION-1>();
            expect(data).toBe(true);
        });

        test.skip("<ACTIVITY-NAME-2>", async () => {
           /**
            * 1. Step 1
            * 2. Step 2
            * N. Step N
            * */
        });
    });
    ```
- Sample test case
    ```javascript
    const findChanglog = require("./helpers/changelog");

    describe("Branching strategy", () => {
        test("Maintain changelog e.g. using git changelog", async () => {
            const data = await findChanglog();
            expect(data).toBe(true);
        });

        test.skip("Hotfix strategy to provide quick patches to production environments e.g. hotfix branch management", async () => {
           /**
            * 1. Get the list of branches
            * 2. Check is a hotfix branch exists 
            * */
        });
    });
    ```
- Every test case will have a `describe` statement that will represent a Item within which there will be multiple `test` statements one for each activity
- Every test case will have the set of steps that have to be performed in order to collect the necessary information required for asserting the activity
- At the end of the test case there will be a `expect` function that will be used to assert the activity
- Tests that have a `skip` function are incomplete ones and have to be defined/coded