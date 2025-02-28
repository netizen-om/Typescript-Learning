class BottelMaker<T,H>{
    constructor(public key:T, public price:H) {

    }
}

let b1 = new BottelMaker("hey",1200)

function newFn<T>(a:T, b:T): T{
    // return "qdf"  This will not work coz anything written between "" is string literal not string

    
    return "hello" as T
    return <T>"hello"
}

newFn(":hey", "ncie")
  