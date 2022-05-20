let arrowElements = document.getElementsByClassName("arrow");
let questionPicked;
for(let i = 0; i < arrowElements.length; i++){
    arrowElements[i].addEventListener("click", (e) =>
    {
        switch(true){
            case e.target.classList.contains("q1"):
                questionPicked = "q1";
                break;
            case e.target.classList.contains("q2"):
                questionPicked = "q2";
                break;
            case e.target.classList.contains("q3"):
                questionPicked = "q3";
                break;
            case e.target.classList.contains("q4"):
                questionPicked = "q4";
                break;
            case e.target.classList.contains("q5"):
                questionPicked = "q5";
                break;
                default: break;
        }           
        e.target.classList.toggle("turnArrow");
        e.target.previousElementSibling.classList.toggle("bold");
        for (i = 0; i < arrowElements.length; i++){
            if (!arrowElements[i].classList.contains(questionPicked)){
                arrowElements[i].previousElementSibling.classList.remove("bold");
                arrowElements[i].classList.remove("turnArrow");
            }
        }
        let textShow = document.querySelectorAll(".answer");
        console.log(textShow.length);
        for(i = 0; i < textShow.length; i++){
            if (textShow[i].classList.contains(questionPicked)){
                textShow[i].classList.toggle("hidden");
                textShow[i].classList.toggle("show");
            } else {
                textShow[i].classList.remove("show");
                textShow[i].classList.add("hidden");
            }
        }
        
        
    })
}
function resize(){
        if(screen.width > 699) {
            document.querySelector(".shadow").src = "images/bg-pattern-desktop.svg"
            document.querySelector(".box").classList.remove("hidden");
            document.querySelector(".background").src = "images/illustration-woman-online-desktop.svg"
        }
        if(screen.width <= 699) {
            document.querySelector(".shadow").src = "images/bg-pattern-mobile.svg"
            document.querySelector(".box").classList.add("hidden");
            document.querySelector(".background").src = "images/illustration-woman-online-mobile.svg"
        }
    }
    window.addEventListener("resize", resize);
    resize();