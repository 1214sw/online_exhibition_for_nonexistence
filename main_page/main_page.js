var sample_txt = document.querySelector('.container').innerHTML;

var n=12;

for(var i = 0; i<n; i++){
document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + document.querySelector('.container').innerHTML;
};


/* Scroll to specific image*/

$(document).ready(function() {
var page_url = window.location.href;
var page_id = page_url.substring(page_url.lastIndexOf("#") +1);
alert(page_id);
$("html, body").animate({
  scrollTop: $(".container-item " + page_id).offset().top
}, 10000);
});
// $("html, body").animate({
//   scrollTop: $(".container-item " + page_id).offset().top
// }, 1000);

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
  alert("CLICK!");
});

$(".to-left").click(function(){
  alert("LEFT CLICK!")
});