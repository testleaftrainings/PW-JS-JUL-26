import { UserStory } from "./scrumMaster";
class Tester extends UserStory{
    public performTask(): void {
        console.log("change the status of the userstory to--> in Progress");
        console.log("Testcase generation, Test execution will be started");
    }
}
// object creation
const qa =new Tester()
qa.performTask()
