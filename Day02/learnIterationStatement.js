// iterations?
// declaration : from we gonna start
// condition : 60 lap
// iteration : forward increment or backward decrement
// requirement for me to print number 1 to 10
// prerequestion --> segment1 :1 ,segment2 :
for (let loop = 1; loop <=10; loop++) {
       console.log(loop)
}
// vinoth fit journey : 5 rounds jagging in ground
let isHealthy=false
const maxGoal=5
const minGoal=2
for(let round=1;round<=maxGoal;round++){
    // condition 1: ifHealty ,maxGoal
    // condition 2 : minGoal
    if(!isHealthy && round>minGoal){
       break
    }
    console.log("round no :"+round+" completed");
}