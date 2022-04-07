var menu = $('.menu')
var nav = $('.nav-list')


$(menu).click(function(){
  $('nav').animate({
    width : 'toggle'
  })

  $('.overlay').toggle();
})

