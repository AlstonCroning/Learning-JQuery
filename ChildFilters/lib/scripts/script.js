$("document").ready( function()
    {
        $("button").click(function()
            {
                //':first-child' selector
                //$("p:first-child").css("color","green");

                //':first-of-type' selector
                //$("p:first-of-type").css("color","green");

                //':last-of-type' selector
                //$("p:last-of-type").css("color","green");

                //':last-child' selector
                //$("p:last-child").css("color","green");

                //':nth-child' selector
                //$("p:nth-child(1)").css("color","green");

                //':nth-last-child' selector
                //$("p:nth-last-child(1)").css("color","green");

                //':only-child' selector
                //displays only if one child is present
                //if there is more children nothing will be displayed
                //$("p:only-child").css("color","green");

                //':only-of-type' selector
                //displays only one child is present but of the same type as paragraph
                //if there is more than one paragraph types tags present then it won't
                //u can have more tags other than paragraphs tags in this case
                //$("p:only-of-type").css("color","green");
            }
        );
    }
);