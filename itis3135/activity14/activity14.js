$(document).ready(function() {
    $("#nav_list li").click(function(){
        var title = $(this).children("a").attr("title"); 
    

        $.ajax({
            type: "get",
            url: "json_files/" + title + ".json",
            beforeSend: function() {
                $("#team").html("Loading...");
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                $("main").html("");

                $.each(data, function(){
                    $.each(this, function(key, value){
                        $("main").append(
                            "<h1>" + value.title + "</h1>"+
                            "<h2>" + value.month + "</h2>" + 
                            "<h3>" + value.speaker + "</h3>" +
                            "<img src=" + value.image + " alt=" + title + "_picture >" +
                            "<p>" + value.text + "</p>"
                        )
                    })
                    
                })
            }
        });
    });
}); // end ready