const add=(a,b,callback)=>{
    console.log(a+b)
    callback(a,b)
}
const disp=(a,b)=>{
    console.log('the addition of two number:'+(a+b))
}
add(5,6,disp)