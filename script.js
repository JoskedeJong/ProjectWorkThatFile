$(document).ready(function() {
    $("#button1").click(function() {

        $.ajax({
            url: 'URL OF MY PHP',
            dataType: 'php',
            method: 'POST',
            success: function (data) {
                console.log(data);
                // for(i=0; i<9; i++){
                //     x = data[i]["description"];
                //     if (x != null){
                //         $(".content"+i).append("<p>"+x+"</p>");
                //     }
                //     y = data[i]["pushed_at"];
                //     $(".content"+i).append("This project was last pushed at: "+y);
                // }
            },
            error: function (error) {
                console.log(error)
            }
        });
    });

    // $("#button2").click(function() {

    //     $.ajax({
    //         url: 'URL OF MY PHP',
    //         dataType: 'json',
    //         method: 'POST',
    //         success: function (data) {
    //             console.log(data);
    //             //code to make my PHP 
    //         },
    //         error: function (error) {
    //             console.log(error)
    //         }
    //     });
    // });



    // $("#button3").click(function() {

    //     $.ajax({
    //         url: 'URL OF MY PHP',
    //         dataType: 'json',
    //         method: 'GET',
    //         success: function (data) {
    //             console.log(data);
    //         },
    //         error: function (error) {
    //             console.log(error)
    //         }
    //     });
    // });

});