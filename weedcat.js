var count = 0;
var level = 1;
var current_level = 1;
var end = false;
var timer

function addTabFocus() {
    let element = document.getElementById("image_selection");
    for (let i = 0;i < element.children.length; i++) {
        element.children[i].setAttribute("tabindex",0);
    }
}

function display(obj) {
    let new_background = obj.getAttribute("src");
    document.getElementById("image_display").style.backgroundImage = `url(${new_background})`;
    document.getElementById("image_display").innerHTML = obj.getAttribute("alt");
    document.getElementById("cry").currentTime = 0;
    document.getElementById("cry").play();
    checkCount();
    clearTimeout(timer);
    timer = setTimeout(resetCount, 2000);
}

function undisplay() {
    document.getElementById("image_display").style.backgroundImage = "url('')";
    document.getElementById("image_display").innerHTML = "image goes here";
    document.getElementById("cry").pause();
}

function checkCount() {
    count += 1;
    switch (current_level) {
        case 1:
            level1();
            break;
        case 2:
            level2();
            break;
        case 3:
            level3();
            break;
        case 4:
            level4();
            break;
        case 5:
            level5();
            break;
        case 6:
            level6();
            break;
        case 7:
            level7();
            break;
        case 8:
            level8();
            break;
    }
}

function resetCount() {
    count = 0;
    if (end) {
        switch (level) {
            case 1:
                document.getElementById("guide").innerHTML = "Nice thanks dude";
                break;
            case 2:
                document.getElementById("guide").innerHTML = "Finally, thanks";
                break;
            case 3:
                document.getElementById("guide").innerHTML = "Good, don't do that again";
                break;
            case 4:
                document.getElementById("guide").innerHTML = "My dude thank you";
                break;
            case 5:
                document.getElementById("guide").innerHTML = "Oh thank god it's finally over";
                break;
            case 6:
                document.getElementById("guide").innerHTML = "yeah";
                break;
            case 7:
                document.getElementById("guide").innerHTML = "Cool 👍";
                break;
            case 8:
                document.getElementById("guide").innerHTML = "Im finding a new job after this";
        }
    }
    current_level = level;
    end = false;
    setTimeout(displayMessesage,2000);
}

function level1() {
    if (count > 20 && count < 50) {
        document.getElementById("guide").innerHTML = "Dude stop that";
        level = 1;
        end = true;
    }
    if (count >= 50 && count < 100) {
        document.getElementById("guide").innerHTML = "Jeez dude seriously stop that my ears hurt";
        level = 2;
    }
    if (count >= 100 && count < 200) {
        document.getElementById("guide").innerHTML = "Dude if you keep this up i will have to remove you";
        level = 3;
    }
    if (count >= 200 && count < 250) {
        document.getElementById("guide").innerHTML = "Ok fine i can't actually remove you<br>The boss wont let me";
        level = 4;
    }
    if (count >= 250 && count < 300) {
        document.getElementById("guide").innerHTML = "DUDE STOP DOING THAT";
        level = 5;
    }
    if (count >= 300) {
        document.getElementById("guide").innerHTML = "Fine i give up do whatever you want";
        level = 6;
    }
    level7();
}

function level2() {
    if (count > 20 && count < 50) {
        document.getElementById("guide").innerHTML = "Jeez dude stop it";
        end = true;
    }
    if (count >= 50 && count < 100) {
        document.getElementById("guide").innerHTML = "Look dude this is very annoying";
    }
    if (count >= 100 && count < 200) {
        document.getElementById("guide").innerHTML = "Dude if you keep this up i will have to remove you";
        level = 3;
    }
    if (count >= 200 && count < 250) {
        document.getElementById("guide").innerHTML = "Ok fine i can't actually remove you<br>The boss wont let me";
        level = 4;
    }
    if (count >= 250 && count < 300) {
        document.getElementById("guide").innerHTML = "DUDE STOP DOING THAT";
        level = 5;
    }
    if (count >= 300) {
        document.getElementById("guide").innerHTML = "Fine i give up do whatever you want";
        level = 6;
    }
    level7();
}

function level3() {
    if (count > 20 && count < 50) {
        document.getElementById("guide").innerHTML = "Hey if you keep that up i WILL remove you";
        end = true;
    }
    if (count >= 50 && count < 100) {
        document.getElementById("guide").innerHTML = "Im warning you dude<br>You don't wanna get removed now do you";
    }
    if (count >= 100 && count < 200) {
        document.getElementById("guide").innerHTML = "Last warning dude";
    }
    if (count >= 200 && count < 250) {
        document.getElementById("guide").innerHTML = "Ok fine i can't actually remove you<br>The boss wont let me";
        level = 4;
    }
    if (count >= 250 && count < 300) {
        document.getElementById("guide").innerHTML = "DUDE STOP DOING THAT";
        level = 5;
    }
    if (count >= 300) {
        document.getElementById("guide").innerHTML = "Fine i give up do whatever you want";
        level = 6;
    }
    level7();
}

function level4() {
    if (count > 20 && count < 50) {
        document.getElementById("guide").innerHTML = "Ah great again";
        end = true;
    }
    if (count >= 50 && count < 100) {
        document.getElementById("guide").innerHTML = "I will have to ask my boss to give me more permissions";
    }
    if (count >= 100 && count < 200) {
        document.getElementById("guide").innerHTML = "Dude";
    }
    if (count >= 200 && count < 250) {
        document.getElementById("guide").innerHTML = "Have you considered stop doing that";
    }
    if (count >= 250 && count < 300) {
        document.getElementById("guide").innerHTML = "DUDE STOP DOING THAT";
        level = 5;
    }
    if (count >= 300) {
        document.getElementById("guide").innerHTML = "Fine i give up do whatever you want";
        level = 6;
    }
    level7();
}

function level5() {
    if (count > 20 && count < 50) {
        document.getElementById("guide").innerHTML = "God damn it dude";
        end = true;
    }
    if (count >= 50 && count < 100) {
        document.getElementById("guide").innerHTML = "We have already been through this";
    }
    if (count >= 100 && count < 200) {
        document.getElementById("guide").innerHTML = "Just stop it please";
    }
    if (count >= 200 && count < 250) {
        document.getElementById("guide").innerHTML = "DUDE";
    }
    if (count >= 250 && count < 300) {
        document.getElementById("guide").innerHTML = "JUST STOP IT";
    }
    if (count >= 300) {
        document.getElementById("guide").innerHTML = "Fine i give up do whatever you want";
        level = 6;
    }
    level7();
}

function level6() {
    if (count > 20 && count < 50) {
        document.getElementById("guide").innerHTML = "Boowomp";
        end = true;
    }
    if (count >= 50 && count < 100) {
        document.getElementById("guide").innerHTML = "Don't you have anything better to do";
    }
    if (count >= 100 && count < 200) {
        document.getElementById("guide").innerHTML = "I hate this place";
    }
    if (count >= 200 && count < 250) {
        document.getElementById("guide").innerHTML = "I'm not paid enough for this";
    }
    if (count >= 250 && count < 300) {
        document.getElementById("guide").innerHTML = "Why can't i work at the bakery instead";
    }
    if (count >= 300) {
        document.getElementById("guide").innerHTML = ":|";
    }
    level7();
}

function level7() {
    if (count >= 1000 && count < 1100) {
        document.getElementById("guide").innerHTML = "Ok if i gave you something cool would you please stop";
        level = 7;
        end = true;
    }
    if (count >= 1100) {
        document.getElementById("guide").innerHTML = "Ok here you go 🍞";
        level = 8;
    }
}

function level8() {
    if (count >= 50) {
        document.getElementById("guide").innerHTML = "Go away i already gave you the thing";
        end = true;
    }
}

function displayMessesage() {
    document.getElementById("guide").innerHTML = "Hover over an image to put it on the Grand Display"
}