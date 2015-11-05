$("document").ready( function()
    {
    //Example of using :animated selector
        function animation ()
        {
            $("#div1").animate({width:"50%"},"slow");
            $("#div1").animate({width: "100%"},"slow",animation);
        }

        animation();

        $("button").click( function()
            {
                $(":animated").css("background","green");
            }
        );

    }
);