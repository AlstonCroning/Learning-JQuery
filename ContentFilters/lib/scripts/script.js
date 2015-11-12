$("document").ready( function()
    {
        $("button").click(function()
            {
                //contains() selector
                $("p:contains(1)").css("color","green");
            }
        );
    }
);