$(document).ready(function(){
    $(".drop > li > span").click(function(){
        $(this).parents().toggleClass("open");
    })

    $("a[data-modal]").click(function(){
        $("#modal").css({"display":"flex"})
        $("#modal > div").hide();
        $("#modal > div[data-modalid='"+$(this).attr("data-modal")+"']").show()
    })
})