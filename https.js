const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Home page')
    }
    if (req.url == '/about') {
        res.end('This is About Page')
    }
    res.end(`<h1>Opss!</h1>
    <p>Request Page Does not Exist</p>
    <a href="/">Back to Home Page</a>`)
})

server.listen(8080)