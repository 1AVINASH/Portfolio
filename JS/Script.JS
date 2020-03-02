// window.onscroll = function() {myFunction()};
// var header = document.getElementById("myTopnav");
// var sticky = header.offsetTop;

// function myFunction(){
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//       } else {
//         header.classList.remove("sticky");
//       }
// }
$(".round").click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(".arrow").toggleClass("bounceAlpha");
});
function downLoad() {
  if (document.all) {
    document.all["layer1"].style.visibility = "hidden";
    document.all["layer2"].style.visibility = "visible";
  } else if (document.getElementById) {
    node = document.getElementById("layer1").style.visibility = "hidden";
    node = document.getElementById("layer2").style.visibility = "visible";
  }
}
