function getnumber(min,max){
    return Math.random()*(max-min)+min
}

$(document).ready(function(){
    window.scrollTo(getnumber(2534,6485),getnumber(3456,5456));
})


function imageLine(i){
    return `<div class = "container-item"><img src = "../art work/art${i}.jpg"></div>`
}

var sample_txt = $('.container').html();
var RIOT = `<div class = "container-item"><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1></div>`
var Boogie_Woogie = `<div class = "container-item"><h1>Boogie-Woogie-Boogie-Woogie</h1></div>`
var n=5;

for(var i = 0; i<n; i++){
    document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + RIOT + imageLine(2)+ document.querySelector('.container').innerHTML+ document.querySelector('.container').innerHTML+ Boogie_Woogie.repeat(i) + document.querySelector('.container').innerHTML;
};

document.querySelector('.container').insertAdjacentHTML('beforeEnd', imageLine(3))


/*Totop, Toleft */

const toTop = document.querySelector(".to-top")
const toLeft = document.querySelector(".to-left")


window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})

window.addEventListener("scroll", () => {
    if (window.pageXOffset > 100){
        toLeft.classList.add("active");
    } else{
        toLeft.classList.remove("active");
    }
})



$(".to-top").click(function(){
  alert("Elevator Up!");
  window.scrollBy(0,getnumber(-13556,-25));
});

$(".to-left").click(function(){
  alert("Elevator Down!");
  window.scrollBy(-203,5930);
});