const http= require('http');
const taskRoutes= require('../routes/taskRoutes')

const PORT= 9000;
const  HOSTNAME= 'localhost';

const server = http.createServer((req, rees) =>{
    if (req.url.startsWith('tasks')){
        taskRoutes(req, res)
        // todo; implment
    }else{
        res.writeHead(404, 'Not found', {'content-type': 'application/js'})
        res.End(JSON.stringify)({
            message:'Page not Found'
        })
    }
});

server.listen(PORT, HOSTNAME, () =>{
    console.log('server running at $'`{PORT}`)
})
