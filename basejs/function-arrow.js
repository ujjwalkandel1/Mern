// function addNumber(a,b) {
//     const c = a + b
//     return c; 
// }

function addNumber(a, b=0) {
    const c = a + b
    const sub = a - b;
    return {sub, c};
    // code not executable
}

let x = 10;
let y = 20;

const result = addNumber(x,y);
 
console.log(result.c)//10,30
console.log(result.sub)//10,20

const {c, sub} = addNumber(x,y)
console.log(c)
console.log(sub)  



// arrow function

//general functions
function functionName1(para, params, params2){
    //body
    return;
}
functionName1()
const functionName2 = function(para,params,params2){
    //body
    return; 
}
functionName2()
//arrow
const functionName3 = (param,params,param2) => {
    //body
    return; 
}
functionName3()

const obj = {
    functionName: function(param,params,param2){
        // body
        // this - is not available
        return 
    }
}
obj.functionName();