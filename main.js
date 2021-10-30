(function(){
    "use strict"

// $(".inner-divs > div").click(function(){
//     var userInput = ($(this).text());
//     console.log(userInput);
//     if (userInput === "clr") {
//         userInput = "";
//     }
//     $("#userinput").append(userInput);
// });
//if you click on a class of number or oper, we want to save it as input
    //if they click CLR, we want to delete the entire input

    var userInput = $("#userinput").text();

    //when the user clicks a class of number, append that to the userInput field
    $(".number").click(function(){
        var userInput = ($(this).text());
        $("#userinput").append(userInput);
    });

    //when they click on the decimal it should append a decimal point to their number
    $("#decimalpoint").click(function(){
        var userInput = ($(this).text());
        $("#userinput").append(userInput);
    });

    //when the user clicks a class of oper, append that to the userInput field
    $(".oper").click(function(){
        var userInput = ($(this).text());
        $("#userinput").append(userInput);
    });

    //when the user clicks clear set the text of the input and output spans to an empty string
    $("#clr").click(function(){
        $("#userinput").text("");
        $("#output").text("");
    });

    //when you press the equals sign, it should evaluate the string and print it to the output field, span #output
    $("#equals").click(function(){
        var userInput = $("#userinput").text();
        var output = eval(userInput);
        $("#output").text(output);
    });

    //when you click the percent sign, it should take the input and divide that number by 100. i.e. 3% would be 3/100 which is .03
    $("#percentage").click(function(){
        var userInput = $("#userinput").text();
        var divideby100 = userInput/100;
        $("#output").text(divideby100);
    });


    //when they click x squared, it should eval that number ** 2. take their input and ** 2
    $("#xSquared").click(function(){
        var userInput = parseInt($("#userinput").text());
        var squared = userInput**2;
        $("#output").text(squared);
        // $("#output").text(eval(userInput**2)) //this also works
    });

    //when they click square root button, it should eval that number ** .5 (sqrt is raise to the 1/2 power)
    $("#sqrt").click(function(){
        var userInput = parseInt($("#userinput").text());
        var sqrt = userInput**(1/2);
        $("#output").text(sqrt);
    });

    $("#comet").click(function(){
        $("body").css("background-image", "linear-gradient(315deg, #FAD961 11%, #ff8c4a 50%, #feff10 91%)");
        $(".inner-divs .oper").css("background-color", "purple");
        $("#paren1, #paren2").css("background-color", "#EF7BE9FF");
    });

    //when you click on the +/- sign, it should store that number and then convert it; a positive number to negative and a negative number to positive
    // $("#pos-neg").click(function(){
    //     var userInput = parseInt($("#userinput").text());
    //     console.log(userInput);
    //     if(userInput > 0) {
    //         var newUserInput;
    //         newUserInput = userInput * -1;
    //     }
    //     // console.log(userInput);
    //     // return userInput;
    //     $("#userinput").text(newUserInput);
    // });
//if the userinput is positive, change it to negative and if it's negative, change it to positive...

    // OR...just append a negative sign? this only prepends it to the first number. How to do -3 + -3 = -6?
    // $("#pos-neg").click(function(){
    //     var userInput = parseInt($("#userinput").text());
    //     if(userInput > 0) {
    //         $("#userinput").prepend("-");
    //     }
    // });


})();

