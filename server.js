const express = require('express')
const port = process.env.PORT || 3000

const server = express();

server.listen(port)

console.log("server started on port: " + port)
