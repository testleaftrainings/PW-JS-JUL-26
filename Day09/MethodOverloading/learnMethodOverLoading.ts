class UiActionClass{
    // method overloading : if you have very less 3-4 different implementation
    // click()--> Same method name and method signature to present. 
    // within the scope of the class
//    public click():void;// no argument
//    public click(timeout:number):void; // 1 argument
//    public click(timeout:number,force:boolean):void; // 2 argument
//    //public click(locator:string):void
//    // polymorphism --> customized implement {}
//    public click(timeout?:number,force?:boolean):void{
//     if (force) {
//         console.log("Now the force click action is implemented through the value -->"+force); 
//     }else if(timeout){
//         console.log("will wait for the specified time ["+timeout +"] then click the elemet");  
//     }else if(!force && !timeout) {
//         console.log("Default click method should be executed now"); 
//     }
//    }

   // Options object pattern // configuration
   public click(options?:{
    timeout?:number,
    force?:boolean,
    delay?:number,
    clickCount?:number,
    locator?:string

   }):void{
    console.log("click is execution with the options :"+options?.timeout);
    console.log("click is execution with the options :"+options?.clickCount);
    console.log("click is execution with the options :"+options?.delay);
    console.log("click is execution with the options :"+options?.locator);
    console.log("click is execution with the options :"+options?.force);
   }
}
const uiClick = new UiActionClass()
uiClick.click({timeout:5000,clickCount:5,force:true})
uiClick.click({locator:'//div[@id=usernmae]'})