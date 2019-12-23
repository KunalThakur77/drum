

var number1 = document.querySelectorAll(".drum").length;
for (var i=0; i<number1; i++) {
document.querySelectorAll("button")[i].addEventListener("click",function(a){

var button=this.innerHTML;
animation(button);
switch (button) {
  case "w":
    var audio = new Audio('sounds/1.mp3');
    audio.play();
    break;
    case "a":
      var audio = new Audio('sounds/2.mp3');
      audio.play();
      break;
      case "s":
        var audio = new Audio('sounds/3.mp3');
        audio.play();
        break;
        case "d":
          var audio = new Audio('sounds/4.mp3');
          audio.play();
          break;
          case "j":
            var audio = new Audio('sounds/5.mp3');
            audio.play();
            break;
            case "k":
              var audio = new Audio('sounds/6.mp3');
              audio.play();
              break;
              case "l":
                var audio = new Audio('sounds/7.mp3');
                audio.play();
                break;
  default:

}
}
);
}
document.addEventListener("keypress",function(e){

var key2=e.key;
animation(key2);
switch (key2) {
  case "w":
    var audio = new Audio('sounds/1.mp3');
    audio.play();
    break;
    case "a":
      var audio = new Audio('sounds/2.mp3');
      audio.play();
      break;
      case "s":
        var audio = new Audio('sounds/3.mp3');
        audio.play();
        break;
        case "d":
          var audio = new Audio('sounds/4.mp3');
          audio.play();
          break;
          case "j":
            var audio = new Audio('sounds/5.mp3');
            audio.play();
            break;
            case "k":
              var audio = new Audio('sounds/6.mp3');
              audio.play();
              break;
              case "l":
                var audio = new Audio('sounds/7.mp3');
                audio.play();
                break;
  default:

}
})
function animation(value){
  document.querySelector("."+value).classList.add("pressed");

setTimeout(function (){
  document.querySelector("."+value).classList.remove("pressed");
},100);
}
