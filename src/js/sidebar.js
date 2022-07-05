$(document).ready(function () {
  $(".sidebar-menu > li.have-children a").on("click", function (i) {
    i.preventDefault();
    if (!$(this).parent().hasClass("active")) {
      $(".sidebar-menu li ul").slideUp();
      $(this).next().slideToggle();
      $(".sidebar-menu li").removeClass("active");
      $(this).parent().addClass("active");
    } else {
      $(this).next().slideToggle();
      $(".sidebar-menu li").removeClass("active");
    }
  });
});

// Donut Chart
