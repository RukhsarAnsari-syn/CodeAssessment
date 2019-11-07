var fs=require('fs');
fs.open('appendnew.txt','w',(err,file)=>{
    if(err) throw new err;
    console.log('Saved!');
})