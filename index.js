function buttonAnimation(currentkey) {

  var currentbutton = document.querySelector("." + currentkey);
  currentbutton.classList.add("pressed");

  setTimeout(function(){
    currentbutton.classList.remove("pressed");
  }, 100);

}

for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function() {

    var buttonclicked = this.innerHTML;
    buttonAnimation(buttonclicked);
    whichcharwaspress(buttonclicked);

  }); //does not required any type of bracket.
}

// handleClick() if we call in the event listener then is straight method call it will call method as soon as the event listener is added.
document.addEventListener("keydown", function(event) {
  whichcharwaspress(event.key);
  buttonAnimation(event.key);
});


function whichcharwaspress(key) {
  switch (key) {

    case "w":
      var audiofile = new Audio("sounds/crash.mp3");
      audiofile.play();
      break;


    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;


    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;


    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;


    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;


    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;


    default:
      alert("press right case button");

  }



}
