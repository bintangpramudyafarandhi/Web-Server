const fs = require('fs');
const http = require('http');
const port = 3000;

const html = (req,res) => {
    fs.readFile(req,(err,data) => {
        if(err){
            res.writeHead(404);
            res.write('Error : Page not found');
        } else {
            res.write(data)
        }
        res.end();
    })
}

http
.createServer((req,res)=>{

    const url = req.url;
    console.log(url);

    if(url==='/about'){
        html('./about.html',res)
    } else if(url==='/contact'){
        html('./contact.html',res)
    } else {
        html('./index.html',res)
    }

    res.writeHead(200,{
        'Content-Type': 'text/html'
    })
})


.listen(3000,()=>{
    console.log('Server is listening on port 3000');
});