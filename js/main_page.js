import {waterfall} from './waterfall.js';

//Contents Loading && Container Creation
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

function getNumber(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}

function textGenerator(){
    var num_of_arts = loadFile('../art work/list.csv').split("\n").length;
    var GALLERY = `<div class = "container-item"><h1>GALLERY</h1> <h1>GALLERY</h1> <h1>GALLERY GALLERY GALLERY</h1></div>`
    var RIOT = `<div class = "container-item"><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1><h1>RIOTRIOT</h1></div>`
    var WATERFALL = `<div class = "container-item"><canvas class = "waterfall-canvas"></canvas></div>`
    var text = ``;

    const multiplier = (i, text) => {return text.repeat(i)};
    const imageLine = i => {return `<div class = "container-item"><a href="../gallery.html"><img src = "../art work/art${i}.jpg"></a></div>`};
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
            text += imageLine(getNumber(1,num_of_arts))
        }
        return text
    }
    var j = 6;
    var return_text = '';
    for (var k =0; k<j; k++){
        return_text += randomListGenerator(7);
        return_text += GALLERY;
        return_text += randomListGenerator(2);
        return_text += RIOT;
        return_text += randomListGenerator(3);
        return_text = multiplier(3, return_text);
        return_text += randomListGenerator(4);
        return_text += randomListGenerator(2);
        if (k == 2 || k == 3 || k==4){return_text += WATERFALL;}
    }
    
    return return_text;
}




function renderContent(){
    document.querySelector(".container").innerHTML = textGenerator();
}

renderContent();

var canvases = document.querySelectorAll('.waterfall-canvas');
for(var i = 0; i <canvases.length; i++){
    waterfall(canvases[i]);
}

//Check X Speed, Check Y Speed, Implement Speed Control, To-Top, To-Left

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

function firstWarning(){
    scrollCounter = 0;
    speedlimit.classList.add("centerflash");
    setTimeout(function(){
        speedlimit.classList.add("centerflash");
    }, 2000);
    setInterval(function(){
        document.body.style.overflow = "hidden";
    }, 2000);
}


var scrollCounter = 0;
var strikeCounter = 0;

$(window).on('load', function(){
    window.scrollBy(getNumber(356,2465),getNumber(657,5675));
    setTimeout(function(){
        $(".speedlimit").addClass("active");
        $(".loader-wrapper").hide();
        $(".to-top").click(function(){
          alert("Elevator Up!");
          window.scrollBy(0,getNumber(-13556,-25));
        });

        $(".to-left").click(function(){
          alert("Elevator Down!");
          window.scrollBy(-203,5930);
        });

    },2000);

    setTimeout(function(){
        $(window).scroll(function(){
        if ((Math.abs(checkYScrollSpeed()) >100) || (Math.abs(checkXScrollSpeed())>100)){
        scrollCounter += 1;
        console.log(scrollCounter);
        if(scrollCounter == 2){
            speedlimit.classList.add("flash");
        }
        else if(scrollCounter==3 && (strikeCounter==0||strikeCounter==1)){
            speedlimit.classList.toggle("centerflash");
            modal.classList.toggle("active");
            setTimeout(function(){
                speedlimit.classList.toggle("centerflash");
                modal.classList.toggle("active");
                scrollCounter = 0;
                strikeCounter = 1 + strikeCounter;
                console.log(scrollCounter, strikeCounter);
            }, 5000)
        }
        else if(scrollCounter==3 && strikeCounter==2){
            speedlimit.classList.toggle("centerflash");
            modal.classList.toggle("active");
            document.body.style.overflow = "hidden";
        }
    }
    })
    }, 5000);

});









