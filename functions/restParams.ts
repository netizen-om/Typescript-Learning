function abz(...args: number[]){
    let count=0
    args.forEach(ag => {
        console.log(ag);
        count++;
    });
    console.log("Count : "+count);
    
    
}

abz(12,3,31,4,2,3,1,31,4,45,12,1,3);