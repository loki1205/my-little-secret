const yesButton = document.getElementById("yes-Button");
const noButton = document.getElementById("no-Button");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const close = document.getElementById("close");
const close2 = document.getElementById("close-2");
yesButton.onclick = function(){
     if (no.classList.contains("show"))
     {
        no.classList.remove("show");
        yes.classList.add("show");
     }
     else{
        yes.classList.add("show");
     }
}

noButton.onclick = function(){
    if (yes.classList.contains("show"))
    {
       yes.classList.remove("show");
       no.classList.add("show");
    }
    else{
       no.classList.add("show");
    }
}

close.onclick = function(){

    if (no.classList.contains("show"))
     {
        no.classList.remove("show");
     }
     else{
        yes.classList.remove("show");
     }
}

close2.onclick = function(){

    if (no.classList.contains("show"))
     {
        no.classList.remove("show");
     }
     else{
        yes.classList.remove("show");
     }
}