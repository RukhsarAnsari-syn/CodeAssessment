const homework=(subject,callback)=>{
  console.log('doing '+subject+' homework')
  callback()
}
homework('math',()=>{
    console.log('homework done')
})