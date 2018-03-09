//Front end
$(document).ready(function() {
    $('#Bri1').click(function() {
      alert("ur mom gay owo");
      $('#ivanOne').show();
      $('#briOne').hide();
      event.preventDefault();
  });
    $('#Ivan1').click(function() {
      alert("wtf u say!!!!!");
      $('#ivanOne').hide();
      $('#briOne').hide();
      $('#briTwo').show();
      event.preventDefault();
  });
  $('#Bri2').click(function() {
    alert("Uwu heard me");
    $('#briTwo').hide();
    $('#ivanTwo').show();
    event.preventDefault();
  });
  $('#Ivan2').click(function() {
    alert("no one talk to my momma like that!!!");
    $('#ivanTwo').hide();
    $('#briTwo').hide();
    $('#briThree').show();
    event.preventDefault();
  });
  $('#Bri3').click(function() {
    alert("Bri poked big nigga");
    $('#briThree').hide();
    $('#ivanThree').show();
    event.preventDefault();
  });
  $('#Ivan3').click(function() {
    alert("Big nigga with cheese touch poked Bri");
    $('#ivanThree').hide();
    $('#briThree').show();
    event.preventDefault();
  });
});
