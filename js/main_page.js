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
        return_text += randomListGenerator(2);
    }
    
    return return_text;
}

function renderContent(){
    document.querySelector(".container").innerHTML = textGenerator();
}

renderContent();

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

function toggleClassesAsReady(){
    setTimeout(function(){
        document.querySelector(".loader-wrapper").style.opacity = 0;
        document.querySelector(".speedlimit").classList.add('active');
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100){
                toTop.classList.add("active");
                toLeft.classList.add("active");
            } else{
                toTop.classList.remove("active");
                toLeft.classList.remove("active");
            }
        });
        document.querySelector(".to-top").addEventListener('click',function(){
            alert("Button On Strike: We won't take you to the top!");
            window.scrollBy(0, getNumber(-136,25));
        });
        document.querySelector(".to-left").addEventListener('click',function(){
            alert("Button On Strike: We won't take you to the left!")
            window.scrollBy(getNumber(-15,34),0);
        });
        
    }, 2000);
}

function speedControl(){
    var speedCounter = 0;
    setTimeout(function(){
        document.addEventListener('scroll', function(){
            if(((Math.abs(checkXScrollSpeed))>100) || (Math.abs(checkYScrollSpeed) >100)){
                speedCounter += 1;
                console.log(speedCounter);
            }
        })
    }, 5000);
}

speedControl();


document.addEventListener('DOMContentLoaded', function(){
    console.log('loaded');
    window.scrollBy(getNumber(2456,4563),getNumber(3565,5363));

})

var scrollCounter = 0;
$(window).on('load', function(){
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


        else if(scrollCounter>3){
            var someDate = new Date();
            var numberOfDaysToAdd = 30;
            var newDate = new Date(someDate.getDate() + numberOfDaysToAdd); 
            var maxspeed = Math.max(checkYScrollSpeed(), checkXScrollSpeed());
            speedlimit.classList.add("centerflash");
            modal.classList.add("active");
            document.body.style.overflow = "hidden";

        }
    }
    })
    }, 5000);

});









