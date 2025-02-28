
// type guard -> type narrowing
function check(arg: number | string) {
    if(typeof arg === "number"){

    } 
    else if(typeof arg === "string") {

    }
    else {
        throw new Error("Data type not valid")
    }
}
