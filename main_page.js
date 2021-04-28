const imageLine = (i) => {
    return `<div class = "container-item"><a href="../gallery.html/?id=${i}"><img src = "../art work/art${i}.jpg"></a></div>`
}

const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

function earthquake(){
    $(document).animate({
        scrollTop: '+= 70'
    }, 300);
}

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }

var num_of_arts = loadFile('../art work/list.csv').split("\n").length;
var GALLERY = `<div class = "container-item"><h1>GALLERY</h1> <h1>GALLERY</h1> <h1>GALLERY GALLERY GALLERY</h1></div>`
var RIOT = `<div class = "container-item"><h1><a href = "../RIOT/riot.html">RIOTRIOT</a></h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1></div>`
var Boogie_Woogie = `<div class = "container-item"><h1>Boogie-Woogie-Boogie-Woogie</h1></div>`
var text = ``;
const getnumber = (min,max) => {return Math.floor(Math.random()*(max-min)+min)};

const text_generator = () =>{
    const multiplier = (i, text) => {return text.repeat(i)};
    const imageLine = i => {return `<div class = "container-item"><a href="../gallery.html/?id=${i}"><img src = "../art work/art${i}.jpg"></a></div>`};
    const listGenerator =  () => {
        var text = '';
        for (var i = 0; i<num_of_arts; i++){
            text += imageLine(i+1);
        }
        return text;
    }
    const randomListGenerator = (h) =>{
        var text = '';
        for (var i=0;  i<h; i++){
            text += imageLine(getnumber(1,num_of_arts))
        }
        return text
    }
    var j = 5;
    return_text = '';
    for (var k =0; k<j; k++){
        return_text += randomListGenerator(7);
        return_text += GALLERY;
        return_text += randomListGenerator(2);
        return_text += RIOT;
        return_text += randomListGenerator(3);
        return_text = multiplier(3, return_text);
        return_text += randomListGenerator(4);
        return_text += Boogie_Woogie;
        return_text += randomListGenerator(2);
    }
    
    
    return return_text;
}

const american = text_generator();
document.querySelector(".container").innerHTML = american;


/*
var n=5;

for(var i = 0; i<n; i++){
    var inner = text;
    inner += text+ GALLERY + RIOT + Boogie_Woogie; 
};
document.querySelector('.container').innerHTML = inner;

*/
const toTop = document.querySelector(".to-top");
const toLeft = document.querySelector(".to-left");


var checkYScrollSpeed = (function(settings){
    settings = settings || {};
    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 1000; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();

var checkXScrollSpeed = (function(settings){
    settings = settings || {};
    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 1000; // in "ms" (higher means lower fidelity )
    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(){
      newPos = window.scrollX;
      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };

})();


var modal = document.getElementById("speedmodal");
var speedlimit = document.querySelector(".speedlimit")
var container = document.querySelector(".container");
var scrollCounter= 0;

function firstWarning(){
    scrollCounter = 0;
    speedlimit.classList.add("centerflash");
}

$(window).on('load', function(){
    window.scrollBy(getnumber(2456,4563),getnumber(3565,5363));
    setTimeout(function(){
        $(".loader-wrapper").hide();
        $(".speedlimit").addClass("active");
        $(".earthquake").addClass("active");
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100){
                toTop.classList.add("active");
            } else{
                toTop.classList.remove("active");
            }
        });
        $(".to-top").click(function(){
          alert("Elevator Up!");
          window.scrollBy(0,getnumber(-13556,-25));
        });

        $(".to-left").click(function(){
          alert("Elevator Down!");
          window.scrollBy(-203,5930);
        });
        $(".earthquake").click(function(){
            alert("EARTHQUAKE!!!");
            earthquake();
        });

    },2000);

    setTimeout(function(){
        $(window).scroll(function(){
        if ((Math.abs(checkYScrollSpeed()) >100) || (Math.abs(checkXScrollSpeed())>100)){
        scrollCounter += 1;
        console.log(scrollCounter);
        if(scrollCounter == 1){
            earthquake(305);
        }
        else if(scrollCounter == 2){
            speedlimit.classList.add("flash");
        }
        /*if(scrollCounter == 3){
            speedlimit.classList.add("centerflash");
            setTimeout(function(){
                speedlimit.classList.remove("centerflash");
            }, 2000);
        }*/

        else if(scrollCounter>3){
            var someDate = new Date();
            var numberOfDaysToAdd = 30;
            var newDate = new Date(someDate.getDate() + numberOfDaysToAdd); 
            console.log(checkYScrollSpeed());
            console.log(checkXScrollSpeed());
            var maxspeed = Math.max(checkYScrollSpeed(), checkXScrollSpeed());
            console.log(maxspeed)
            speedlimit.classList.add("centerflash");
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
            setTimeout(function(){
            speedlimit.classList.remove("centerflash");
            }, 2000);
        }
    }
    })
    }, 5000);

});

/*Totop, Toleft */









