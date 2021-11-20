$(document).on('ready', function() {
		
    $(".variable").slick({
      
      infinite: true,
      variableWidth: true,
       autoplay: true,
       autoplaySpeed: 2000,
       responsive: [
{
  breakpoint: 768,
  settings: {
    arrows: true,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3
  }
},
{
  breakpoint: 320,
  settings: {
    arrows: true,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
  }
}
]						
    });
   
});

//checkbox bold jquery
$('#boldCheckbox').on('change', function() {
  $('#bold-para').css({color: this.checked?'black':'#999595'});
});
$('#boldCheckbox1').on('change', function() {
  $('#bold-para1').css({color: this.checked?'black':'#999595'});
});
$('#boldCheckbox2').on('change', function() {
  $('#bold-para2').css({color: this.checked?'black':'#999595'});
});
$('#boldCheckbox3').on('change', function() {
  $('#bold-para3').css({color: this.checked?'black':'#999595'});
});
$('#boldCheckbox4').on('change', function() {
  $('#bold-para4').css({color: this.checked?'black':'#999595'});
});
$('#boldCheckbox5').on('change', function() {
  $('#bold-para5').css({color: this.checked?'black':'#999595'});
});
$('#boldCheckbox6').on('change', function() {
  $('#bold-para6').css({color: this.checked?'black':'#999595'});
});

//back to top 
$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
      } else {
          $('.scrollup').fadeOut();
      }
  });
  $('.scrollup').click(function () {
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      return false;
  });
});