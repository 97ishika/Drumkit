var key_length = document.querySelectorAll(".drum").length;
for (var i = 0; i < key_length; i++) {

//Detecting button clicks
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var button_innerhtml = this.innerHTML;
    makeSound(button_innerhtml);
    animation(button_innerhtml);
  });
}

//Detecting keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  animation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio('I:/Web development/Drum Kit Starting Files/sounds/crash.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('I:/Web development/Drum Kit Starting Files/sounds/kick-bass.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('I:/Web development/Drum Kit Starting Files/sounds/snare.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('I:/Web development/Drum Kit Starting Files/sounds/tom-1.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('I:/Web development/Drum Kit Starting Files/sounds/tom-2.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('I:/Web development/Drum Kit Starting Files/sounds/tom-3.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('I:/Web development/Drum Kit Starting Files/sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      console.log("Default");

  }
}

function animation(currentkey){
  var active_button = document.querySelector("." + currentkey);
  active_button.classList.add("pressed");
  setTimeout(function(){
    active_button.classList.remove("pressed")
  }, 100);
}

//alert("I got clicked");
