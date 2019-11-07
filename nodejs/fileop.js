const fs=require('fs');
fs.readFile('temp1.txt',(err,data)=>{
    if(err)throw err;
    console.log(data.toString());
});
fs.writeFile('temp1.txt','New Content',(err)=>{
    if(err) throw err;
});
fs.stat('temp1.txt',(err,stats)=>{
    if(err) throw err;
    console.log(stats);
});
fs.access('temp1.txt',(err,data1)=>{
    if(err)throw err;
    console.log(data1);
});
