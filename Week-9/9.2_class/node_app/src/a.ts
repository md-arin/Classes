function greet(firstname: String){

console.log("Hello" + firstname);

}
//type inference
function sum(a: number, b: number){
    return a+b;
}

// const value = sum(1,2)
// console.log(value);

function isLegal (a: number){
    if(a>18){
        return true;
    } else{
        return false;
    }
}

// let x = isLegal(18)

function runAfter1S(fn: ()=> void){
    setTimeout(fn,1000);
}

runAfter1S(function(){
    console.log("hi there");
    
})

interface User{
    firstName: string,
    lastName:string,
    age: number
}

function islegal(user: User){
    if(user.age > 18){
        return true
    } else{
        return false
    }
}