const fs=require('fs');
fs.rename('temp.txt','temp1.txt',(err)=>{
    if(err)throw err;
    fs.stat('temp1.txt',(err,stats)=>{
        if(err) throw err;
        console.log(`stats:${JSON.stringify(stats)}`)
    });
    console.log('rename completed');
});