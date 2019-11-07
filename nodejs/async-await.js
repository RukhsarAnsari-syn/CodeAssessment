const getTodo=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         let error=false;
         if(!error)
           resolve({text:"to do excercise"})
         else
           reject()
        },2000)
    })
}
async function fetchtodo(){
    const todo=await getTodo()
    return todo
}
fetchtodo().then(todo=>{console.log(todo.text)})