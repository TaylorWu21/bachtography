$(document).ready( () => {
  $('.parallax').parallax();

  $(".button-collapse").sideNav({
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });

  $('.modal').modal();
})