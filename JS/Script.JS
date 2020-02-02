function date(){
    document.body.innerHTML = "Todays date is " + new Date() + "";
}

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
$('.round').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});