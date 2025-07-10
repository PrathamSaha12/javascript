//array
 
const myarr=[0,1,2,3,4,6,] 
const myhero=["spiderman","superman"]

const myarr2=new Array(0,1,2,3) 
console.log(myarr[0]);

//array methods

myarr.push(6);
myarr.push(7);
console.log(myarr);
myarr.pop();
console.log(myarr);
myarr.unshift(9)//added the element in the first of the array
console.log(myarr);
myarr.shift()//remove the first element from the array
console.log(myarr);
console.log(myarr.includes(9));//is the element  presen in the array or not
console.log(myarr.indexOf(3));//index of the particualr element in the array



const newarr =  myarr.join();
console.log(myarr);
console.log(newarr);
console.log(typeof newarr);


//slice and splice
const mya1= myarr.slice(1,3)
console.log(mya1);
console.log(myarr);


const mya2 = myarr.splice(1,3);
console.log(mya2);
console.log(myarr);











