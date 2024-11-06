document.getElementById("mainTitle").innerText = "Point and click adventure";

// gameWindow reference 
const gameWindow = document.getElementById("gameWindow");
// game state
gameState = {
    house1locked: true,
    gateopened: false,
    houseopened: false

}



const sec = 1000;
//Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;
// backgrounds
const tilemap = document.getElementById('tilemap');
const house1 = document.getElementById('house1img');
const house1o = document.getElementById("house1imgopen")
const thehouseimg = document.getElementById("thehouseimg");
//statue
const counterAvatar = document.getElementById("counterAvatar");

//speech bubbels
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterSpeech = document.getElementById("counterSpeech");

const mcAudio = document.getElementById("mcAudio");
const cAudio = document.getElementById("cAudio");
//Inventory
const inventoryBox = document.getElementById("inventoryBox"); //div
const inventoryList = document.getElementById("inventoryList"); //ul

//Foreground Items
const chest1 = document.getElementById('chest1');
let isChes1Opened = false;
const sign = document.getElementById("sign");

let gateopend = false;
let houseopend = false;
let works = false


gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    if (e.target.id !== "mcImage", "mainCharacter") {
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";
    }


    console.log(e.target.id);
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    switch (e.target.id) {
        case "key1":
            if (document.getElementById("key1") !== null) {
                console.log('Key picked up');
                document.getElementById("key1").remove();
                mainCharacter.style.backgroundColor = "#FFF00";
                const keyElement = document.createElement("li");
                keyElement.innerText = "Key"
                inventoryList.appendChild(keyElement);
                keyElement.id = "inv-keyhouse1";
            }
            break;
        case "key2":
            if (document.getElementById("key2") !== null) {
                console.log('Key picked up');
                document.getElementById("key2").remove();
                const key2Element = document.createElement("li");
                key2Element.innerText = "Key TheHouse"
                inventoryList.appendChild(key2Element);
                key2Element.id = "inv-keythehouse";
            }
            break;
        case "thehouse":
            if (document.getElementById("inv-keythehouse") !== null) {
                document.getElementById("inv-keythehouse").remove()
                houseopened = true;
            }
            if (document.getElementById("inv-keygate") !== null) {
                document.getElementById("inv-keygate").remove()
                gateopened = true;
            }
            if (gateopened && houseopened) {
                thehouseimg.style.opacity = 1;
                tilemap.style.opacity = 0;
                house1img.style.opacity = 0;
                house1o.style.opacity = 0;
                alert("you have won congrats");
                document.getElementById("mainTitle").innerText = "You Won";
                setTimeout(function () {
                    location.reload();
                }, 3000);

            }

            break;
        case "house1":

            if (gameState.house1locked == true) {
                if (document.getElementById("inv-keyhouse1") !== null) {
                    alert("door is unlocked");
                    gameState.house1locked = false;
                    document.getElementById("inv-keyhouse1").remove()
                    let works = true;
                } else {
                    alert("door is locked")
                }
            } else {
                console.log("enter the building");
                tilemap.style.opacity = 0;
                house1img.style.opacity = 1;
                if (isChes1Opened) {

                    tilemap.style.opacity = 0;
                    house1img.style.opacity = 0;
                    house1o.style.opacity = 1;
                } else {

                    tilemap.style.opacity = 0;
                    house1img.style.opacity = 1;
                }
            }

        case "chest1":



            break;
        case "stfuDuke":


            if (gameState.house1locked === false) {
                console.log('Keygate picked up');
                document.getElementById("chest1").remove();
                const key1Element = document.createElement("li");
                key1Element.innerText = "Key for something"
                inventoryList.appendChild(key1Element);
                key1Element.id = "inv-keygate";
                isChes1Opened = true;
                tilemap.style.opacity = 0;
                house1img.style.opacity = 0;
                house1o.style.opacity = 1;
            }



            break;
        case "house2":
            showMessage(mainCharacterSpeech, mcAudio, "What a nicehouse");
            setTimeout(showMessage, 4 * sec, counterSpeech, cAudio, "Hello");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, mcAudio, "You can talk?");
            setTimeout(showMessage, 12 * sec, counterSpeech, cAudio, "Ofcouse!");
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, mcAudio, "I wanna enter that house with the gate!");
            setTimeout(showMessage, 20 * sec, counterSpeech, cAudio, "Good for you");
            setTimeout(showMessage, 24 * sec, mainCharacterSpeech, mcAudio, "Can you help me");
            setTimeout(showMessage, 28 * sec, counterSpeech, cAudio, "No I am a house i cant walk what did you expect");
            setTimeout(showMessage, 32 * sec, mainCharacterSpeech, mcAudio, "Ohh yea sorry ");
            setTimeout(showMessage, 36 * sec, counterSpeech, cAudio, "But i know there is a Key in the forest");
            setTimeout(showMessage, 40 * sec, mainCharacterSpeech, mcAudio, "Okay thank you");
            break;
        case "statue1":
            showMessage(mainCharacterSpeech, mcAudio, "Wow cool watchtower..");
            setTimeout(function () { counterAvatar.style.opacity = 1; }, 4 * sec);
            setTimeout(showMessage, 4 * sec, counterSpeech, cAudio, "Hello young man");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, mcAudio, "You can talk?");
            setTimeout(showMessage, 12 * sec, counterSpeech, cAudio, "O yes yes longer than you are alive");
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, mcAudio, "I was wondering if you could help me.");
            setTimeout(showMessage, 20 * sec, counterSpeech, cAudio, "With what exactly?");
            setTimeout(showMessage, 24 * sec, mainCharacterSpeech, mcAudio, "I want to enter that house surounded by a wall with a gate.");
            setTimeout(showMessage, 28 * sec, counterSpeech, cAudio, "Nobody has been in that house for the past years");
            setTimeout(showMessage, 32 * sec, mainCharacterSpeech, mcAudio, "Thats why I want to enter it I would love to be the first one in a very long time.");
            setTimeout(showMessage, 36 * sec, counterSpeech, cAudio, "For that you need to have the golden key hidden in chest.");
            setTimeout(showMessage, 40 * sec, mainCharacterSpeech, mcAudio, "And where might that chest be?");
            setTimeout(showMessage, 44 * sec, counterSpeech, cAudio, "In one of the two houses over there.");
            setTimeout(showMessage, 48 * sec, counterSpeech, cAudio, "but to enter those you would need a key.");
            setTimeout(showMessage, 52 * sec, mainCharacterSpeech, mcAudio, "Do you know where I can find that key?");
            setTimeout(showMessage, 56 * sec, counterSpeech, cAudio, "If I'm correct in one of the other watchtowers but be awere some are not as nice as me.");
            setTimeout(showMessage, 60 * sec, mainCharacterSpeech, mcAudio, "Thank you for your help I will appreciate that for a long time.");
            setTimeout(function () { counterAvatar.style.opacity = 0; }, 60 * sec);
            break;




        default:
            //explode

            tilemap.style.opacity = 1;
            house1img.style.opacity = 0;
            break;
    }
}

/**
 * shows message in a speech bubble
 * @param {getElementById} targetBalloon
 * @param {getElementById} targetSound
 * @param {string} message 
 */
function showMessage(targetBalloon, targetSound, message) {
    targetSound.currentTime = 0;
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerText = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon);
}

//setTimeout(showMessage, 0 * sec, mainCharacterSpeech, "yo whats up buddy?");
//setTimeout(showMessage, 4 * sec, counterSpeech, "nothing!!!");
//setTimeout(showMessage, 8 * sec, mainCharacterSpeech, "what do you mean by nothing?");
//setTimeout(showMessage, 12 * sec, counterSpeech, "...")

/**
 * set opacity to 0
 * @param {getElementById} targetBalloon 
 * @param {getElementById} targetSound
 */
function hideMessage(targetBalloon, targetSound) {
    targetBalloon.style.opacity = "0";
    targetSound.Pause();
}