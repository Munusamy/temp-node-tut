const { readFile } = require("fs");

console.log("Start a first task");

readFile("./content/first.txt","utf8",(err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log("Completed the first task");

});
console.log("Starting next task");