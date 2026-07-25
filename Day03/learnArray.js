// literal
// array --> group the collection of values
// [] --> array
let course =["selenium","cypress","playwright"]
// ,"appium"
// index --> 0's based
// length --> 1 based
// 1) push ()--> new elements to the end of an array
course.push("appium")// focus on last index
// 2) unshift()--> Inserts new elements at the start of an array,
course.unshift(false)// focus on starting index
console.log(course.slice(1,3));
// start -1
course.splice(2,1,"pupeeter")
// index:number, deleteCount :number, item : "string"
// console.log(course[i]);
course.sort()
course.forEach(i=>console.log(i));
// index i -->
// traditional way 
// for(let i =0; i<course.length;i++){
//     console.log(course[i])
// }
course.shift()//Removes the first element from an array
course.pop()//Removes the last element from an array 
console.log(course.length); 
console.log(typeof course)
// instansiation
let mentorName =new Array("seeni","sangir","vinoth")
console.log(mentorName);
console.log(typeof mentorName)
// concat()
let joinedArray =mentorName.concat(course)
console.log(joinedArray)