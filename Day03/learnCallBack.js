// 5. call back function
function recommendedMovies(){
console.log("Movie list is created based on user history")
}
function userWatchHistory(){
console.log("Track's the user watch history --> lanuage,genre,cast,crew")
}
function aiRecommendation(){
    console.log("optimized recommendation")
}
function profileLogin(user,history,suggestion){
    console.log(user+" is logged in")
    history()
    suggestion()
}
profileLogin("Yogesh",userWatchHistory,recommendedMovies) // caller
// 6.async function
async function  getText(){
  return "playwright"
}
console.log(getText());
//PromiseState : 1)pending 2)fulfilled 3)rejected
//Promise {[[PromiseState]]: 'fulfilled', [[PromiseResult]]: 'playwright'}
async function resolver(){
   const text= await getText()
   console.log(text)
}
resolver()