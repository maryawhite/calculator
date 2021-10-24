(function(){
    "use strict"

$(".inner-divs > div").click(function(){
    var userInput = ($(this).text());
    console.log(userInput);
    if (userInput === 0 || userInput === "CLR") {
        userInput = "";
    }
    $("#userinput").append(userInput);
});

$()

})();

