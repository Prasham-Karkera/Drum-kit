var buttons = document.querySelectorAll("button")
var c;
for (var i = 0; i <7; i++)
    { 
        buttons[i].addEventListener("click", function ()
        {
            var character = this.innerHTML;
            makeSound(character);
            buttonAnimation(character);
        })

        document.addEventListener("keydown", function (event) {
            character = event.key;
            makeSound(character);
            buttonAnimation(character);
        });
    }

function makeSound(c)
{
    switch(c)
    {
        case 'w':
        {
            var audio1 = new Audio("./sounds/tom-1.mp3");
            audio1.play();
            break;
        }

        case 'a':
        {
            var audio2 = new Audio("./sounds/tom-2.mp3");
            audio2.play();
            break;
        } 

        case 's':
        {
            var audio3 = new Audio("./sounds/tom-3.mp3");
            audio3.play();
            break;
        }

        case 'd':
        {
            var audio4 = new Audio("./sounds/tom-4.mp3");
            audio4.play();
            break;
        }

        case 'j':
        {
            var audio5 = new Audio("./sounds/snare.mp3");
            audio5.play();
            break;
        }

        case 'k':
        {
            var audio6 = new Audio("./sounds/crash.mp3");
            audio6.play();
            break;
        }

        case 'l':
        {
            var audio7 = new Audio("./sounds/kick-bass.mp3");
            audio7.play();
            break;
        }
        default:
            console.log(this)

    }
}

function buttonAnimation(c)
{
    var activeButton  = document.querySelector("." + c);
    activeButton.classList.add("pressed");
    setTimeout(function()
{
    activeButton.classList.remove("pressed");
},100);
}