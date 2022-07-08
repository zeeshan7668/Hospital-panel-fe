// ============ Side Bar ===============//
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

// ==================  End Side bar =============

// =============== Toogle side bar =============================

function toggleSidebar(isOpen) {
  if (isOpen === true) {
    document.getElementById("sidebar").classList.toggle("toggle-sidebar");
  }
}
