var snackElms = document.getElementsByClassName("snack");
for (var i = 0; i < snackElms.length; ++i) {
  snackElms[i].addEventListener("click", function(){
    var paragraph = this.nextElementSibling;
    var style = window.getComputedStyle(paragraph);
    //accordion show/hide controls
     if(style.display === 'none'){ //paragraph is hidden
         paragraph.style.display = 'initial';//paragraph is shown

     } else {
         paragraph.style.display = 'none';//paragraph is hidden
     }
 });
}
