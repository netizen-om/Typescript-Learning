interface user{
    name: string,
    password:string,
    enrollNo: number
}

const obj:user = {
    name:"Hello",
    password: "new",
    enrollNo: 1
}

function abcd(object:user){
    if(object === obj) {
        console.log("Same objects");
        
    }
}

abcd({
    name:"Hello",
    password: "new",
    enrollNo: 1
});

console.log(obj.name);
console.log(obj.password);
console.log(obj.enrollNo);
