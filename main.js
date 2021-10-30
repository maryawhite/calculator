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

    //when you click on the +/- sign, it should convert a positive number to negative and a negative number to positive
    $("#pos-neg").click(function(){
        var userInput = parseInt($("#userinput").text());
        console.log(userInput);
        if(userInput > 0) {
            userInput *= -1;
        }
        console.log(userInput);
        return userInput;
    });
//if the userinput is positive, change it to negative and if it's negative, change it to positive...
    //this is converting a postive num to neg, but it's not saving it or evaluating it as negative.



    //when they click x squared, it should eval that number ** 2. take their input and
    $("#xSquared").click(function(){
        var userInput = $("#userinput").text();
        var squared = userInput**2;
        $("#output").text(squared);
    });


})();

