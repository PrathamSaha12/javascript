//const tinderUser = new Object()//singletont 


const tinderUser ={}
tinderUser.id = "1234455",
tinderUser.name = "Pratham",
tinderUser.isLoggedin = false

//console.log(tinderUser) 

  const regularuser ={
    email:"prathamsaha15@gmail.com",
    fullname:{
        userfullname:{
            firstname:"pratham",
            lastname:"saha"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname);


const obj1 ={1:"A",2:"B"};
const obj2 ={1:"C",2:"D"};

//const obj3 = Object.assign({},obj1,obj2);//this is used to combine objects
//console.log(obj3);
const obj3 ={...obj1,...obj2}//this is more preferable
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));



const course ={
    couresname: "jshindi",
    coursefee: 999,
    teacher: "hitesh"
}
const{teacher:instuctor} = course//destuctureing
console.log(instuctor);


//JSON
//API
{
    "name":"pratham",
    "coursename":"jshindi"
    "price":"free"

}






