//demonstration of how outer variable is affected if it is changed
// in inner function.
function f1()
{
  let a=10;
  let b=20;
  
  let res=a+b;
  function add()
  {
    let a=100;
    let sum=a+b;
    console.log("inner function calculated : "+sum);
  }
  add();
 
  console.log("outer function calculated : "+res);
}
f1();
