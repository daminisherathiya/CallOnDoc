$(document).ready(function(){
  
  const activeElement = $(".horizontal-navbar .active").first();
  const activeElementLeftOffset = activeElement.offset().left;
  const activeElementParentLeftOffset = activeElement.parent().offset().left;
  $(".horizontal-navbar").scrollLeft(
    activeElementLeftOffset - activeElementParentLeftOffset
  );
});
