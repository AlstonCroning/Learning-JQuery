$("document").ready( function()
    {
        $("button").click(function()
            {
                //child selector
                //$("div > span").wrap("<span style='background-color:green' />");

                //decendant selector
                //$("div  span").wrap("<span style='background-color:green' />");

                //adjacent selector
                //$("div + p").css("color","green");

                // sibling selector
                $("div ~ p").css("color","green");
            }
        );
    }
);