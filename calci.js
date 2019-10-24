function calc(){
    var a=parseInt(document.getElementById('first').value);
    var b=parseInt(document.getElementById('second').value);
    var opr=document.getElementById('opr').value;
    switch(opr){
        case "add":alert(a+b);break;
        case "min":alert(a-b);break;
        case "div":alert(a/b);break;
        case "mul":alert(a*b);break;
    }
}