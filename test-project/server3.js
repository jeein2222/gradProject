const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const server = require('http').createServer(app);

app.use(cors()); // cors 미들웨어를 삽입합니다.

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다.
    const pythonShell=require('python-shell');
    var options={
        mode:'text',
        pythonPath:'',
        pythonOptions:['-u'],
        scriptPath:'gpt/gpt3.py'
    };
    pythonShell.PythonShell.run('gpt/gpt3.py',options,function(err,results){
        console.log(results);
        res.send({message:`${data}`})
    });
});

server.listen(8080, ()=>{
  console.log('server is running on 8080')
})
