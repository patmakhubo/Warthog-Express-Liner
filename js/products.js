
var slideInd1 = 0;
var slideInd2 = 0;
var slideInd3 = 0;
showSlides1();
showSlides2();
showSlides3();
function currentSlide1(n) {
    showSlides1(slideInd1 = n);
}
function currentSlide2(n) {
    showSlides2(slideInd2 = n);
}
function currentSlide3(n) {
    showSlides3(slideInd3 = n);
}

function showSlides1() {
    var j;
    var slides1 = document.getElementsByClassName("pic1");
    var dots1 = document.getElementsByClassName("dot1");
    
    for (j = 0; j < slides1.length; j++) {
        slides1[j].style.display = "none";
    }
    
    slideInd1 = 1+(slideInd1 % 3);
    
    for (j = 0; j < dots1.length; j++) {
        dots1[j].className = dots1[j].className.replace(" active", "");
    }
    
    slides1[slideInd1-1].style.display = "block";  
    dots1[slideInd1-1].className += " active";
    setTimeout(showSlides1, 9000); // Change image every 3 seconds
}
function showSlides2() {
    var j;
    var slides2 = document.getElementsByClassName("pic2");
    var dots2 = document.getElementsByClassName("dot2");
    
    for (j = 0; j < slides2.length; j++) {
        slides2[j].style.display = "none";
    }
    
    slideInd2 = 1+(slideInd2 % 3);
    
    for (j = 0; j < dots2.length; j++) {
        dots2[j].className = dots2[j].className.replace(" active", "");
    }
    slides2[slideInd2-1].style.display = "block";  
    dots2[slideInd2-1].className += " active";
    setTimeout(showSlides2, 6000); // Change image every 3 seconds
}
function showSlides3() {
    var j;
    var slides3 = document.getElementsByClassName("pic3");
    var dots3 = document.getElementsByClassName("dot3");
    
    for (j = 0; j < slides3.length; j++) {
        slides3[j].style.display = "none";
    }
       
    slideInd3 = 1+(slideInd3 % 3);
    
    for (j = 0; j < dots3.length; j++) {
        dots3[j].className = dots3[j].className.replace(" active", "");
    }
    slides3[slideInd3-1].style.display = "block";  
    dots3[slideInd3-1].className += " active";
    setTimeout(showSlides3, 6000); // Change image every 3 seconds
}