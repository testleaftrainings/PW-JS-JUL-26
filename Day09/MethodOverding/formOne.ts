import { UserStory } from "./scrumMaster";
class Developer extends UserStory{
public performTask(): void {
    super.performTask() // super --> will always maps the object to parent level reference
    console.log("Developer starts to write the development code");  
    console.log("Once The development is done in dev, It should be deployed to QA Environment")
}
}
// object creation
const dev =new Developer()
dev.performTask()