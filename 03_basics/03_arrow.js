const user={
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        //console.log(this);
        
        
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

//console.log(this);
//************************************************************ */

const addtwo=(num1,num2)=>{    //normal key function
    return num1+num2;
}
console.log(addTwonumbers(num1+num2));

//********************************************************* */

const add =(num1,num2) =>(num1+num2)//if we write this without{} then no parenthisis needed

