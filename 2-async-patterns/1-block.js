const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("HomePage")
    }
    if (req.url === "/about") {

        // Blocking Code
        for(i = 0; i < 1000 ; i++){
            for (let j = 0; j < 1000 ; j++){
                console.log(` ${i} ${j}`);
            }
        }
        res.end("AboutPage")
    }
    res.end("Error page")
});

let port = 5000
server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});