$(function () {
    var flag=false;
    $(".icon-liebiao2").parent().click(function () {
        if (flag) {
            $("nav ul li").hide();
            flag=false;
        } else {
            $("nav ul li").show();
            flag=true;
        }
    })
})