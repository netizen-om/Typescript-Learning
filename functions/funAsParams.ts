function fn(name:string, cd: (val:number)=> void){
    cd(12);
}

fn("new", (value:number) => {
    console.log("HEY")
})