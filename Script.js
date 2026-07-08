// debugger;
// console.log("Global Execution Context starts");
// var globalvariable = "I am a global variable";
// console.log(globalvariable);
// console.log(globalvariable);
// globalFunction();
// console.log("Global Execution Context Ends");
// function globalFunction(){
//     console.log("I am a global function");
// }
(function (val1, val2){
    console.log(val1, val2);
})("I am val1", "I am val2");