var boxopened = "";
var imgopened = "";
var found =  0;
 
 $("button").on("click", resetGame);
function resetGame() {
    $("button").text("Finish");
    $("img").hide();
    $("img").removeClass("opacity");
    $("p").text('Game"Memory"');
    boxopened = "";
    imgopened = "";
    found = 0;
    return false;
}
 
$(document).ready(function() {
    $("img").hide();
    $("#boxcard div").click(openCard);
 
    function openCard() {
 
        id = $(this).attr("id");
 
        if ($("#"+id+" img").is(":hidden")) {
            $("#boxcard div").unbind("click", openCard);
 
            $("#"+id+" img").slideDown('fast');
 
            if (imgopened == "") {
                boxopened = id;
                imgopened = $("#"+id+" img").attr("src");
                setTimeout(function() {
                    $("#boxcard div").bind("click", openCard)
                }, 300);
            } else {
                currentopened = $("#"+id+" img").attr("src");
                if (imgopened != currentopened) {
                    setTimeout(function() {
                        $("#"+id+" img").slideUp('fast');
                        $("#"+boxopened+" img").slideUp('fast');
                        boxopened = "";
                        imgopened = "";
                    }, 400);
                } else {
                    
                    $("#"+id+" img").addClass("opacity");
                    $("#"+boxopened+" img").addClass("opacity");
                    found++;
                    boxopened = "";
                    imgopened = "";
                }
 
                setTimeout(function() {
                    $("#boxcard div").bind("click", openCard)
                }, 400);
            }
 
             
            if (found == 5) {
                $("button").text("Start");
                $("p").text("Yeeeeees! You win!");
            }
        }
    }
});