function fib(){
    var number = prompt("Enter the number of terms in the FIBONACCI series ")
    var num1 = 1;
    var num2 = 0;
    var ans = 0;
    var arr = [];
    for(var i = 0; i < number; i++){
        ans = num1 + num2;
        num1 = num2;
        num2 = ans;
        arr.push(ans);
    }
    document.getElementById("p1").innerHTML = arr;
}

function arm(){
    var num = prompt("Enter the number to find if its armstrong number or not")
    var tmp2 = num;
    var ans = 0;
    while(num > 0){
        var tmp = parseInt(num % 10);
        num = parseInt(num / 10);
        var tmp3 = parseInt(Math.pow(tmp, 3));    
        ans += tmp3;
    }
    if(tmp2 == ans){
        document.getElementById("p2").innerHTML = "Given number is ARMSTRONG number";
    }
    else{
        document.getElementById("p2").innerHTML = "Given number is NOT ARMSTRONG number";
    }
}
var array = [];
function add(){
    var x = document.getElementById("a1").value;
    array.push(x);
}
function display(){
    document.getElementById("p3").innerHTML = array;
}
function del(){
    array.pop();
    document.getElementById("p3").innerHTML = array;
}