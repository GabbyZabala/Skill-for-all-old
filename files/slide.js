var slideInd = 0;
slideShow();

function slideShow() {
    var i;
    var x = document.getElementsByClassName("deslide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideInd++;
    if (slideInd > x.length) { slideInd = 1; }
    x[slideInd - 1].style.display = "block";
    setTimeout(slideShow, 3000); // Change slide every 3 seconds
}