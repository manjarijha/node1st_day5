const http = require('http');
const port = 7000;
const fs = require('fs');

const server = http.createServer(function(req,res)
{
   res.writeHead(200, {'content-type' : 'text/html'})
   fs.readFile('index.html', function(error,data)
   {
       if (error){
           res.writeHead(404)
           res.write('oops we got an error')
       }else{
           res.write(data)
       }
   })
})

server.listen(port, function(error)
{
    if(error){
        console.log('oops something went wrong', error)
    }else
    {
        console.log('everything is running fine ', port)
    }
})