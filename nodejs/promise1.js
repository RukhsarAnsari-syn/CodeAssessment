const geeks=(msg)=>{
   return new Promise((resolve,reject)=>{
       let y="geeks"
       if(msg==y)
        resolve()
       else
        reject()
   })
}
const success=()=>{
    console.log('successfully you are geeks')
}
geeks('geeks').then(success).catch(error=>{
    console.log('error occurred')
})