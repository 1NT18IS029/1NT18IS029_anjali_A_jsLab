function upper(){
    var str=document.getElementById('inst').value;
    var txt1=str.toUpperCase();
    document.getElementById("p1").innerHTML=txt1;
  
}

function lower(){
    var str2=document.getElementById('inst').value;
    var txt2=str2.toLowerCase();
    document.getElementById("p2").innerHTML=txt2;
  
}

//function leng(){
   // var str3=document.getElementById('inst').value;
   // var txt3=str3.length();
   // document.getElementById("p3").innerHTML="length of the string is : "+txt3;
  
//}

function rev(){
    var str3=document.getElementById('inst').value;
var txt3=reverseString(str3);
document.getElementById("p3").innerHTML="reversed string: "+txt3;
}

function subs(){
    var str4=document.getElementById('inst').value;
    var txt4=prompt("enter the key:");
    var pos=str4.search(txt4);
    if(pos>=0){
    document.getElementById("p4").innerHTML="found at position :"+pos;
    }
    else{
        document.getElementById("p4").innerHTML="not found"; 
    }
  
}
function slic(){
    var str5=document.getElementById('inst').value;
    var txt5 = str5.slice(2,5);
    document.getElementById("p5").innerHTML=txt5;
}

function con(){
    var str6 =document.getElementById('inst').value;
var txt6 =prompt("enter another string :");
var res = str6.concat(txt6);
document.getElementById("p6").innerHTML=res;
}
