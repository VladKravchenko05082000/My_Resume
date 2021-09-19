//@prepros-append burger.js
//@prepros-append translate.js

$(document).ready(function () {
   $('#eng').css('color', 'black');
   $('#eng').click(function (event) {
      $('#ru').css('color', '#828282')
      $('#eng').css('color', 'black')
   });
   $('#ru').css('color', '#828282');
   $('#ru').click(function (event) {
      $('#ru').css('color', 'black')
      $('#eng').css('color', '#828282')
   });
});