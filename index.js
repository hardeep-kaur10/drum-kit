var no_ofDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < no_ofDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert("hi");
        // this.style.color ="white;"
        //var audio = new Audio("sounds/tom-1.mp3");

        //audio.play();
        // button click play audio
        var buttonInnerHTML = this.innerHTML;
        // switch statemsnt ka function bna dia make  sound
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

        /*
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
        
                tom1.play();
                
                break;
                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
            
                    tom2.play();
                    
                    break;
                    case "s":
                        var tom3 = new Audio("sounds/tom-3.mp3");
                
                     tom3.play();
                        
                        break;
                        case "d":
                            var tom4 = new Audio("sounds/tom-4.mp3");
                    
                            tom4.play();
                            
                            break;
                            case "j":
                                var snare = new Audio("sounds/snare.mp3");
                        
                                snare.play();
                                
                                break;
                                case "k":
                                    var crash = new Audio("sounds/crash.mp3");
                            
                                    crash.play();
                                    
                                    break;
                                    case "l":
                                        var mixkin = new Audio("sounds/mixkit-cinematic-mystery-trailer-drum-hit-546.mp3");
                                
                                        mixkin.play();
                                        
                                        break;
        
            default: alert("something wrong");
                break;
        }  */

    });


}
//keyboard press
document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);
    /*
    switch (event.key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
    
            tom1.play();
            
            break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
        
                tom2.play();
                
                break;
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
            
                 tom3.play();
                    
                    break;
                    case "d":
                        var tom4 = new Audio("sounds/tom-4.mp3");
                
                        tom4.play();
                        
                        break;
                        case "j":
                            var snare = new Audio("sounds/snare.mp3");
                    
                            snare.play();
                            
                            break;
                            case "k":
                                var crash = new Audio("sounds/crash.mp3");
                        
                                crash.play();
                                
                                break;
                                case "l":
                                    var mixkin = new Audio("sounds/mixkit-cinematic-mystery-trailer-drum-hit-546.mp3");
                            
                                    mixkin.play();
                                    
                                    break;
    
        default: alert("something wrong");
            break;
 }

 */
});

//makesound function of switch case 
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");

            tom1.play();

            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");

            tom2.play();

            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");

            tom3.play();

            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");

            tom4.play();

            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");

            snare.play();

            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");

            crash.play();

            break;
        case "l":
            var mixkin = new Audio("sounds/mixkit-cinematic-mystery-trailer-drum-hit-546.mp3");

            mixkin.play();

            break;

        default: alert("something wrong");
            break;
    }
}          
//adding animation
function buttonAnimation(currentKey){
var activeButton=document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed");},100)
}