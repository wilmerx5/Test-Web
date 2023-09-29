
let slides =[
    {
        img:"./images/round.png",
        text:"Ronda multicolor",
    },
    {
        img:"./images/square.png",
        text:"Cuadrado multicolor",
    },
    {
        img:"./images/amongus.png",
        text:"Amongus",
    },
    {
        img:"./images/photo.jpg",
        text:"otros",
    }
]
let currentSlide=[0,1,2]
let img1 = document.getElementById("slide1").querySelector(".main__carrousel__container__product__img")
let img2 = document.getElementById("slide2").querySelector(".main__carrousel__container__product__img")
let img3 = document.getElementById("slide3").querySelector(".main__carrousel__container__product__img")
let text1 = document.getElementById("slide1").querySelector(".main__carrousel__container__product__h4")
let text2 = document.getElementById("slide2").querySelector(".main__carrousel__container__product__h4")
let text3 = document.getElementById("slide3").querySelector(".main__carrousel__container__product__h4")
let arrowNext= document.getElementsByClassName("main__carrousel__next")[0]
let arrowPrev =document.getElementsByClassName("main__carrousel__prev")[0]
arrowNext.addEventListener("click", ()=>{
    if (currentSlide[2]<3){
        currentSlide=currentSlide.map(e=>e+1)
    }
    else{
        currentSlide=[0,1,2]
    }
    valuesSlide()
  
})
arrowPrev.addEventListener("click", ()=>{
    if (currentSlide[0]>0){
        currentSlide=currentSlide.map(e=>e-1)
    }
    else{
        currentSlide=[1,2,3]
    }
    valuesSlide()
})

let valuesSlide=()=>{
    img1.style.opacity = "0"; 
    img2.style.opacity = "0";
    img3.style.opacity = "0";

    setTimeout(() => {
        img1.src=slides[currentSlide[0]].img
        img2.src=slides[currentSlide[1]].img
        img3.src=slides[currentSlide[2]].img
        text1.innerHTML=slides[currentSlide[0]].text
        text2.innerHTML=slides[currentSlide[1]].text
        text3.innerHTML=slides[currentSlide[2]].text

        
        setTimeout(() => {
            img1.style.opacity = "1"; 
            img2.style.opacity = "1";
            img3.style.opacity = "1";
        }, 100); 
    }, 500); 
}
valuesSlide()

// toogle 
let burguer= document.getElementsByClassName("header__nav__burguer-menu")[0]
let ulNav =document.getElementsByClassName("header__nav__ul")[0]
burguer.addEventListener("click", ()=>{
ulNav.classList.toggle("header__nav__ul--burguer-menu--toggle")
})

