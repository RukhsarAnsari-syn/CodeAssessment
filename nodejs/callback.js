const getTodo =callback=>{
  setTimeout(()=>{
      callback({text:"to do excercise"})
  },2000)
}
getTodo(todo=>{
    console.log(todo.text)
})