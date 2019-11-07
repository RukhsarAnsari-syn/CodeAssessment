var fs=require('fs');
fs.writeFile('appendnew.txt','Hello new content',(err)=>{
    if(err) throw new err;
    console.log('Saved!');
});