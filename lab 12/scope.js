//demonstration of closure scope in js.
let nam="mango"; //global var
function f1()
{
  let clas="seasonal"; //outer function var
  function f2(){
      let seas="summers"; //local var
      console.log(nam+" is a "+clas+" fruit enjoyed in the "+seas);
  }
  f2();
}
f1();
