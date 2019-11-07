var fs=require('fs');
fs.appendFile('appendnew.txt','Hello Content',(err)=>{
    if(err) throw err;
    console.log('saved!');
})