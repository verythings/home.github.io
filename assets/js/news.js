$( function() {
  $( ".thumb-1" ).on( "click", function() {
    $(".thumb-3").removeClass("is-opened", 1000);
    $(".thumb-2").removeClass("is-opened", 1000);
    $(this).addClass("is-opened", 1000);

    $(".thumb-3").insertAfter(this);
    $(".thumb-2").insertAfter(this);
    $(".img-item").insertAfter(".first");

    $(".thumb-1 p").toggle();
    $(".thumb-2 p").hide();
    $(".thumb-3 p").hide();

  });
});

$( function() {
  $( ".thumb-2" ).on( "click", function() {
    $(".thumb-3").removeClass("is-opened", 1000);
    $(".thumb-1").removeClass("is-opened", 1000);
    $(this).addClass("is-opened", 1000);

    $(".thumb-3").insertAfter(this);
    $(".thumb-1").insertAfter(this);
    $(".img-item2").insertAfter(".first");

    $(".thumb-1 p").hide();
    $(".thumb-2 p").toggle();
    $(".thumb-3 p").hide();

  });
});

$( function() {
  $( ".thumb-3" ).on( "click", function() {
    $(".thumb-2").removeClass("is-opened", 1000);
    $(".thumb-1").removeClass("is-opened", 1000);
    $(this).addClass("is-opened", 1000);

    $(".thumb-2").insertAfter(this);
    $(".thumb-1").insertAfter(this);
    $(".img-item").insertAfter(".first");

    $(".thumb-1 p").hide();
    $(".thumb-2 p").hide();
    $(".thumb-3 p").toggle();

  });
});

// 