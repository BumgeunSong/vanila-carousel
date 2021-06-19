const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const currentImg = document.querySelector(".slides img");
const dots = document.querySelectorAll(".dot");


const imgUrl = [ 
    "images/image-1.png",
    "images/image-2.png",
    "images/image-3.png",
    "images/image-4.png",
    "images/image-5.png",
    "images/image-6.jpg"
]

const totalNumber = imgUrl.length; // total number of image
let imgNumber = 0; // number of current image

function goNext () {
    dots[imgNumber].classList.toggle('active') // // remove active from preveious dot.
    
    if (imgNumber < totalNumber - 1) {
        imgNumber += 1;
    } else {
        imgNumber = 0; // If current img is last one, go to first one.
    }
    
    currentImg.src = imgUrl[imgNumber]; // Change image
    dots[imgNumber].classList.toggle('active'); // set current dot active
}

function goPrev () {
    dots[imgNumber].classList.toggle('active') // // remove active from preveious dot.
    if (imgNumber > 0) {
        imgNumber -= 1;
    } else {
        imgNumber = totalNumber - 1; // If current img is first one, go to last one.
    }
    currentImg.src = imgUrl[imgNumber]; // Change image
    dots[imgNumber].classList.toggle('active'); // set current dot active
}

function onDotClick (event) {
    dots[imgNumber].classList.toggle('active'); // remove active from preveious dot.
    imgNumber = parseInt(this.value); // convert string to number
    currentImg.src = imgUrl[imgNumber]; // Change image
    this.classList.toggle('active'); // set current dot active
}

arrowRight.addEventListener("click", goNext);
arrowLeft.addEventListener("click", goPrev);

dots.forEach(dot => dot.addEventListener("click", onDotClick));