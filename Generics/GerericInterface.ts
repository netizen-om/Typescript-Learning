interface Halva <T>{
    name : string;
    age : number;
    key : T 
}

function abcd(obj:Halva<string>) {

}

abcd({
    name: "new",
    age: 12,
    key: "sdvesfwer3"
})