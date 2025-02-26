class BottleMaker {
    constructor(public brand:string, public price:number, public color:string, public material: string){ }
}

const b1 = new BottleMaker("milton", 1200, "red", "steel")
console.log(b1);
