// leads - create,edit,delete,duplicate
import test from "@playwright/test";
// test grouping : describe
test.describe("Lead management", {
    tag: '@CrmLead',
}, () => {
    test.skip("CreateLead", async () => {
        console.log("lead is created successfully");
    })

    test("EditLead", {
        annotation: {
            type: 'Requirement',
            description: 'User story id 23180'
        }
    }, async () => {
        await test.step("Lead is edited", async () => {
            console.log("lead is Edited  successfully");
        })

    })

    test.fixme("DuplicateLead", async () => {
        console.log("lead is Duplicated successfully");
    })

    test.fail("DeleteLead", async () => { // will be executed or not.?  expected status should be fail
        // expected : fail  actual : fail
        console.log("lead is Deleted successfully");
        throw new Error("Failure due to assertion");
    })
})