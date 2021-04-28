var max_id = 14;
var cur_id = Math.floor(Math.random() * max_id) + 1; // read query string
var visited = [];
var visit_cnt = 0;
for(var i=1; i<=max_id; i++) visited[i] = false;


var artimg = document.querySelector("main img");
var elems = document.querySelectorAll("#info p");
function Initialize()
{
    visited[cur_id] = true;
    visit_cnt++;
    artimg.src = `./art work/art${cur_id}.jpg`;
    elems[0].innerHTML = data[cur_id-1][0];
    elems[1].innerHTML = data[cur_id-1][1];
}

Initialize();

function NextArt()
{
    if(visit_cnt < max_id)
    {
        cur_id = Math.floor(Math.random() * max_id) + 1;
        // alert(cur_id);
        while(visited[cur_id])
        {
            if(cur_id < max_id) cur_id++;
            else cur_id = 1;
        }
        Initialize();
    }
    else
    {
        alert("You have seen all art works.");
    }
}

  
$("#next_button").hover(function(){
    $(this).toggleClass("hovering");
})