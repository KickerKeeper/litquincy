$( document ).ready( function () {
    $.ajax({
        url: "/report-raw",
        method: "get",
        dataType: "text",
        success: function(data) {
            $("#dump").text(data);
        },
        failure: function() {
            alert("Request timed out or failed.");
        },
        timeout: 3000
    });
});


