class BottleMaker{
    constructor(protected name:string){
        this.name = "new2"
    }   

    changing(){
        this.name = "changedName"
    }
}

class MetalBottelMaker extends BottleMaker{
    constructor(public key:string ,public name:string){
        super(name)
    }
}

let b1 = new BottleMaker("new")

b1.changing()