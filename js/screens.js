$(document).ready(function() {
  let width = $(window).width();
  let height = $(window).height();
  let ratio = Math.min(width / 375, height / 667);
  console.log('width', width, 'height', height, 'ratio', ratio);
  $('#container').css('transform', `scale(${ratio})`);
  setTimeout(function() {
    // window.location = 'index8.html';
    $('#splash').hide();
    $('#scan').show();
  }, 2000);
});
