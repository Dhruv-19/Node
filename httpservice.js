const http=require('http');

const server=http.createServer((req, res)=>{
    if(req.url=== '/'){
        return res.end("HELLO HOW CAN I HELP YOU");
    }
    if(req.url=== '/about'){
        return res.end("here is our about");
    }
    res.end(`
        <h1>Oops!!!</h1>
        <p>we have not what you are looking for sorry</p>
        <a href= "/"> back home</a>`)
    
})

server.listen(5000);