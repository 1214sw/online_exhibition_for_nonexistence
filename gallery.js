function btn_click(){
  alert('Hello World!');
  // btns[0].style.backgroundColor = 'gray';
}

var btn_on = false;
var title_chosen = false;
var btns = document.getElementsByClassName('button');
var result = document.getElementsByClassName('result');
var img = document.getElementById('artwork');


function ImageClick(){
  // alert('img click');
  // alert(title_chosen);
  // alert(btn_on);
  if(!title_chosen){
    if(!btn_on){
      for(var i=0; i<btns.length; i++)
      {
        btns[i].style.display = 'block';
      }
      img.style.filter = 'brightness(0.3)';
      btn_on = true;
    }else{
      for(var i=0; i<btns.length; i++){
        btns[i].style.display = 'none';
      }
      img.style.filter = 'brightness(1)';
      btn_on = false;
    }
  }else{
    if(!btn_on){
      result[0].style.display = 'block';
      img.style.filter = 'brightness(0.3)';
      btn_on = true;
    }else{
      result[0].style.display = 'none';
      img.style.filter = 'brightness(1)';
      btn_on = false;
    }
  }
}



function titleSelect(elem){
  title_chosen = true;
  for(var i=0; i<btns.length; i++){
    btns[i].style.display ='none';
  }
  result[0].style.display = 'block';
  result[0].innerHTML = 'Your answer is "' + elem.value + '".';
}
