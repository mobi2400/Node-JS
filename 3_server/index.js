import http from "http";
const myServer = http.createServer((req, res) => {
    console.log("Request received");
    
});
myServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});