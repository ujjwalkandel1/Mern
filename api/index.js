const http = require("http");
const app = require("./src/config/express.config")

// express application
const server = http.createServer(app)
// const server = http.createServer((request, response) => {

    // console.log(request.method)
    // console.log(request.url)
    // console.log(request.header)
    // console.log(request.body) 
    // console.log(request.file) 
    //manipulate 
    //41min
//     response.end("Hello world")
// })

// listen 
//port number => 
    // 0- 2*16-1 ~65535
// http => 80, https => 443, smtp => 25 
// 192.168.180.9005/
//3306 => donot uses this port. It is mysql port
server.listen(9005, "127.0.0.1" , (err) => {
    if(!err) {
        console.log("Server is running...")
        console.log("Press ctrl+c to discontinue...")
    }
})  