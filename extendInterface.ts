interface User{
    name: string,
    password:string,
    enrollNo: number
}

interface Admin extends User {
    isAdmin : boolean
}

function abcd(obj: Admin){
}