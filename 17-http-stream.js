// npm - global command, comes with node
// npm --version

// local dependecy - use it only in this particular project 
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// const _ = require("lodash");

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);

const http = require("http");
const fs = require("fs")


http.createServer(function(req, res) {
//  const text = fs.readFileSync("./content/big.txt", "utf8")
//  res.end(text)

const fileStream = fs.createReadStream("./content/big.txt", "utf8")
fileStream.on("open", () => {
    fileStream.pipe(res)
})
fileStream.on("error", (err) => {
res.end(err);
})
}).listen(5000);