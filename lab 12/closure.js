//demonstration of closure in js. inner function using outer function variables.
function outer()
{
  let name="anjali";
  let col="nmit"
  let place="blr";

  function nam()
  {
    console.log("hello my name is "+ name);
  }
  function college()
  {
    console.log("i am currently studying in "+ col +", "+place);
  }
  nam();
  college();
}
outer();
