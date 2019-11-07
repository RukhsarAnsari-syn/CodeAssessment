const todo=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error=false;
            if(!error)
              resolve({text:'to do excercise'});
            else
              reject();        
            },2000)
    })
}

todo()
   .then(to=>{
    console.log(to.text);
   })
   .catch(error=>{
     console.log("error occurred");
   })