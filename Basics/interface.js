let obj = {
    name: "Hello",
    password: "new",
    enrollNo: 1
};
function abcd(object) {
    if (object === obj) {
        console.log("Same objects");
    }
}
abcd({
    name: "Hello",
    password: "new",
    enrollNo: 1
});
