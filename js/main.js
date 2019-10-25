$(document).ready(function(){
    
    // Hide Notification
    $(".btn-notification").click(function(){
      $(".notification").slideUp(300);
    });

    // Close Panel
    $(".closePanel").click(function(){
      $(".slidePanel").fadeOut(300);
    })
});