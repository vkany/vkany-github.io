
$(function hide() {
    var image1 = document.getElementById("image1");
    var hide  = document.getElementById('hide');
    hide.onclick=image1.style.display = "none";
});

$(function show() {
    var image1 = document.getElementById("image1");
    var show = document.getElementById('show');
    show.onclick = image1.style.display = "block";
});


$("#hide").click(function(){
    $("image1").hide();
});

$("#show").click(function(){
    $("image1").show();
});
