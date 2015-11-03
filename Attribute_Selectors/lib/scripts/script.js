$("document").ready( function()
    {
        $("button").click(function()
        {
            /*
            //few examples using some Attrubute  selectors
            $("p[class!='paragraph1']").css("color", "lightblue");
            $("a[href$='.com']").css("color", "lightgreen");
            $("a[href$='.org']").css("color","red");
            */

            //$("p[class|='paragraph']").css("color","green");
            //$("p[class^='paragraph']").css("color","green");

            //only selects specifically attribute value followed by whitespace
            //$("p[class~='paragraph']").css("color","green");

            //selects all the paragraphs that have a value of "paragraph" or provided
            $("p[class*='paragraph']").css("color","green");

        }
        );
    }
);