let backtotop = document.getElementById('backtotop');
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        backtotop.style.display = "block";
    } else {
        backtotop.style.display = "none";
    }
}
window.onscroll = function () { scrollFunction() };

backtotop.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})