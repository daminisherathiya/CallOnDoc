function enablePopOver() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  });
}

function adjustNavbar() {
  const activeElement = $(".horizontal-navbar .active").first();
  const activeElementLeftOffset = activeElement.offset().left;
  const activeElementParentLeftOffset = activeElement.parent().offset().left;
  $(".horizontal-navbar").scrollLeft(
    activeElementLeftOffset - activeElementParentLeftOffset
  );
}

$(document).ready(function(){
  enablePopOver();
  adjustNavbar();
});
