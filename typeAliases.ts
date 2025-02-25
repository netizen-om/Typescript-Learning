type sankhya = number;

const num:sankhya = 12

type value = null | number | string;

const a:value = "ad"

type User1 = {
    name: string,
    password:string,
    enrollNo: number
}

type admin = User1 & {
    getUserDetails(id:string) : void;
}