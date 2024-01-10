var globalVar = "I'm a global var";

function scopeExample() {
    let functionLet = "I'm a let variable inside a function";
    const constantVar = "I'm a constant variable";

    console.log(globalVar); 
    console.log(functionLet); 
    console.log(constantVar); 
}

scopeExample();

console.log(globalVar);


let reassignableLet = "Initial value (let)";
var reassignableVar = "Initial value (var)";
const immutableConst = "Initial value (const)";

reassignableLet = "New value (let)"; 
reassignableVar = "New value (var)"; 

console.log(reassignableLet);
console.log(reassignableVar);

