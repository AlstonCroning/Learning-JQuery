$("document").ready( function()
    {
    /*
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
    */

        $("button").click( function()
            {
                //Here are some more Selector Examples
                //$("p:eq(1)").css("color","red");//eq selector example
                //$("p:even").css("color","green");//even selector example
                //$("p:odd").css("color","green");//odd selector example
                //$("p:first").css("color","green");//first selector example
                //$("p:last").css("color","green");//last selector example
                //$("p:gt(2)").css("color","green");//'greater than' selector example
                //$("p:lt(3)").css("color","green");//'less than' selector example

                /*Focus Selector Example
                $("input#input1").focus();
                $(":focus").css("background-color","green");
                */

                //not selector example
                //$("p:not(.para)").css("background-color","green");

                //root selector example
                //$(":root").css("background-color","green");

                //Header selector example
                //$(":header").css("background-color","green");

                //language selector example
                //$("p:lang(en)").css("background-color","green");
            }
        );

    }
);