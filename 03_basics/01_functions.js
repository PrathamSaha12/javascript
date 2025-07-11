function addTwonumbers(number1,number2){
    console.log(number1+number2);
    
}

addTwonumbers(3,"4")
const result = addTwonumbers(3,4)
console.log("Result:", result);//it shows undefine for this we have to return something in function

//like this 
function addthreenumber(number1,number2,number3){
    return number1+number2+number3;
}

const result1=addthreenumber(1,4,5);
console.log("result:",result1)//this will work


//function
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//rest operator
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,800,600))

//************************************************************************** **/
const user={
    username: "pratham",
    surname: "saha"
}

function handleObject(anyobject){
    console.log(`Username is ${user.username} and surname is ${user.surname}`);
    
}

handleObject(user);
//**************************************************************/
 
const myNewArray = [200,400,100,600]

function getsecondelement (anyarray){
   return  anyarray[1]
}

console.log(getsecondelement(myNewArray))
//************************** ***********************************/











 
