  window.onload = initialize;

function initialize(){
    document.querySelector("#speaker-button").addEventListener("click", ambientSound);
}

function ambientSound(event){
    var mySky = document.querySelector("#my-sky");
    var speakerImg = document.querySelector("#speaker-img");
    var sounding = mySky.getAttribute("sounding");

    if(sounding == "true"){
        mySky.setAttribute("sounding", false);
        speakerImg.src = "img/Sound_off.png";
        mySky.components.sound.stopSound();
    } else {
        mySky.setAttribute("sounding", true);
        speakerImg.src = "img/Sound_on.png";
        mySky.components.sound.playSound();
    }
}