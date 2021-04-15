var customName = document.getElementById('name');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

// 2. RAW TEXT STRINGS

var storyText = "ONCE UPON A TIME a girl named Cinderella lived with her :insertx: and two :inserty:. Poor Cinderella had to work hard all day long so the others could rest. It was she who had to wake up each morning when it was dark and cold to start the fire. It was she who :insertz:. It was she who kept the fire going. The poor girl could not stay clean, from all the ashes and cinders by the fire.";
var insertX =['dad','brother','Father'];
var insertY = ['dogs', 'spiders', 'snakes'];
var insertZ = ['did all the drama', 'did all the crazy stuff'];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
 
randomize.addEventListener('click', result);
function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  var newStory = newStory.replace(":insertx:", xItem);
  var newStory = newStory.replace(":inserty:", yItem);
  var newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    var name = customName.value;
    //name = name.charAt(0).toUpperCase() + name.slice(1);
    //console.log(name);
    newStory = newStory.replace('Cinderella', name);
  }
 
  story.textContent = newStory;
  story.style.visibility = 'visible';
 
}

