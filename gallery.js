$(".max-frame img, h2.info_msg").click(function() {
  $('h2.info_msg').css('display','none');
  $('h2.choice').css('display', 'block');
}).hover(function(){
  $('.max-frame img').css('filter','brightness(0.3)');
  $('h2.info_msg').css('display','block');
}, function(){
  $('.max-frame img').css('filter','brightness(1)');
  $('h2.info_msg').css('display','none');
  $('h2.choice').css('display', 'none');
});
