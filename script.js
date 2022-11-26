//// GrayColor Setup /////
let grey = document.querySelector("#grey")
grey.addEventListener("click", greyColor);
function greyColor(e){
    e.preventDefault();
    document.body.style.backgroundColor = "gray";

    //// HTML TAG COLORS ////
    document.querySelector("h1").style.color = "yellow";
    document.querySelector("h2").style.color = "yellow";
}


//// whiteColor Setup /////
let white = document.querySelector("#white")
white.addEventListener("click", whiteColor);
function whiteColor(e){
    e.preventDefault();
    document.body.style.backgroundColor = "white";

    //// HTML TAG COLORS ////
    document.querySelector("h1").style.color = "blue";
    document.querySelector("h2").style.color = "blue";
}


//// blueColor Setup /////
let blue = document.querySelector("#blue")
blue.addEventListener("click", blueColor);
function blueColor(e){
    e.preventDefault();
    document.body.style.backgroundColor = "blue";

    //// HTML TAG COLORS ////
    document.querySelector("h1").style.color = "white";
    document.querySelector("h2").style.color = "white";
}


//// yellowColor Setup /////
let yellow = document.querySelector("#yellow")
yellow.addEventListener("click", yellowColor);
function yellowColor(e){
    e.preventDefault();
    document.body.style.backgroundColor = "yellow";

    //// HTML TAG COLORS ////
    document.querySelector("h1").style.color = "red";
    document.querySelector("h2").style.color = "red";
}
