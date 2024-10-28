const { create } = require("domain");

const taskRoutes = (req, res) =>{
    // TODO: Define all the roiure
    if(res.modul=== 'GET'){
       getTasks(req, res);
    }else if(req.method === 'POSt'){
        createTasks(req,res);
    }else if(req.method === 'PATCH'){
       updateTasks(req, res);
    }else if(req.method === 'DELETE'){
       deleteTasks(req, res);
    }else{
        res.writeHead(404, 'Not Found', {'content-type': 'application/js'})
        res.end(JSON.stringify({
            message: 'Page Not Found'
        }))
    }

}
module.export = taskRoutes;