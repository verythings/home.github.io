$( function() {
  $( ".thumb-1" ).on( "click", function() {
    $(".thumb-3").toggleClass("is-opened", 1000);
    $(".thumb-2").toggleClass("is-opened", 1000);
    $(this).toggleClass("is-opened", 1000);

    $(".thumb-3").insertAfter(this);
    $(".thumb-2").insertAfter(this);
    $(".img-item2").insertAfter(".first");

    $(".thumb-1 p").toggle();
    $(".thumb-2 p").toggle();
    $(".thumb-3 p").toggle();

  });
});

$( function() {
  $( ".thumb-2" ).on( "click", function() {
    $(".thumb-3").toggleClass("is-opened", 1000);
    $(".thumb-1").toggleClass("is-opened", 1000);
    $(this).toggleClass("is-opened", 1000);

    $(".thumb-3").insertAfter(this);
    $(".thumb-1").insertAfter(this);
    $(".img-item").insertAfter(".first");

    $(".thumb-1 p").toggle();
    $(".thumb-2 p").toggle();
    $(".thumb-3 p").toggle();

  });
});

$( function() {
  $( ".thumb-3" ).on( "click", function() {
    $(".thumb-2").toggleClass("is-opened", 1000);
    $(".thumb-1").toggleClass("is-opened", 1000);
    $(this).toggleClass("is-opened", 1000);

    $(".thumb-2").insertAfter(this);
    $(".thumb-1").insertAfter(this);
    $(".img-item").insertAfter(".first");

    $(".thumb-1 p").toggle();
    $(".thumb-2 p").toggle();
    $(".thumb-3 p").toggle();

  });
});