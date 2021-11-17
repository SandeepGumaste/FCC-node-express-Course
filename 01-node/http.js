const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to my homepage')
    }else if(req.url==='/about'){
        res.end('Welcome to my About page')
    }else {
        res.end(   ` <h1>Oops!</h1>
        <p>We cant seem to find the page you're looking for</p>
        <a href="/">back to homepage</a>`)
    }

    
    
})

server.listen(5000)