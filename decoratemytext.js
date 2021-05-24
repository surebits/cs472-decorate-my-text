window.onload = function() {
    const content = document.getElementById("content");
    const input = document.getElementById("input");
    const [colorButton, fontButton] = document.getElementsByTagName("button");

    input.onkeyup = function(e){        
        content.innerText = e.target.value;
    }

    fontButton.onclick = function(){
        content.style.fontSize =  "55px";
    }

    colorButton.onclick = function(){
        content.style.color = "red";
    }

}