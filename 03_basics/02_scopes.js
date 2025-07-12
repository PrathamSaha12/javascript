if(true){
    let a = 30;
    const b =40;
    var c = 50;
}

//console.log(a);
//console.log(b);
//console.log(c);//var will be print outside of the scope but a and b will not be print

function one (){
    const username = "pratham"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
    
}
//one()
//******************************************************************/
addone(5)//this will work
function addone(num){
    return num+1;
}
//****************************************************************/
addtwo(5)//this will not work because we declare a function in a constant
const addtwo=function(num){
    return num+2;
}


