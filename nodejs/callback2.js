const homework=(subject,callback)=>{
    console.log('doing '+subject+' homework')
    callback()
}
const finished=()=>{
    console.log('finish doing  homework')
}
homework('math',finished)