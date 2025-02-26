class User{
    constructor(public _name:string, public password:string){

    }

    get name(){
        return this._name
    }

    set name(value: string){
        this.name = value
    }
}

let u1 = new User("new", "1234567889")
u1.name = "newName"
u1.name