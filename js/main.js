$(document).ready(function(){
    
    // Hide Notification
    $(".btn-notification").click(function(){
      $(".notification").slideUp(300);
    });

    // Close Panel

    setTimeout(function(){       
      $(".slidePanel").fadeIn(300);
    }, 5000);

    $(".closePanel").click(function(){
      $(".slidePanel").fadeOut(300);
    })
});