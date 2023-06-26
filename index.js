//learn javascript w/out DOM

function welcome(){
    var name = prompt("What is your name?");

    var slicedName = name.slice(0, 1);
    var upperSlicedName = slicedName.toUpperCase();

    var restOfName = name.slice(1, name.length);
    var lowerRestOfName = restOfName.toLowerCase();

    alert("Hello, " + upperSlicedName + lowerRestOfName);
}

function tweet(){
    var tweet = prompt("compose your tweet");
    alert(tweet.slice(0, 140));
    alert("you have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.");
}

function getMilk(money, costPerBottle){
    var numberOfBottles = Math.floor(money / costPerBottle);
    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");

    return calcChanges(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    
    return numberOfBottles;
}

function calcChanges(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;

    return change;
}

function love(){
    var name1 = prompt("Insert first name");
    var name2 = prompt("Insert second name");

    var calculate = Math.random();
    calculate = Math.floor(calculate * 100);

    alert(name1 + " and " + name2 + " matches for " + calculate + "%");

    if(calculate < 49){
        alert("RIP BOZO, NO BITCHES 4 U");
    }
    else if(calculate > 50 && calculate < 74){
        alert("theres still hope");
    }
    else if(calculate > 75 && calculate < 89){
        alert("very close try to ask for date")
    }
    else if(calculate >= 99 && calculate == 100){
        alert("go get some pussies");
    }
}

function guestlist(){
    var guestList = ["Minato", "Yukari", "Max", "Warren"];
    var guestName = prompt("Your name? (capital included)");
    guestList.push("Sendy");
    
    if(guestList.includes(guestName)){
        alert("Welcome, " + guestName);
    }
    else{
        alert("Sorry, maybe next time");
    }
}

function fizzbuzz(){
    for(var fb = 1; fb <= 100; fb++){
        if(fb % 3 == 0 && fb % 5 == 0){
            console.log("FizzBuzz");
        } else if(fb % 3 == 0){
            console.log("Fizz");
        } else if(fb % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(fb)
        }
    }
}

var output = [];
var count = 1;

function fizzbuzz1(){
    if(count % 3 == 0 && count % 5 == 0){
        output.push("FizzBuzz");
    } else if(count % 3 == 0){
        output.push("Fizz");
    } else if(count % 5 == 0){
        output.push("Buzz");
    } else {
        output.push(count);
    }

    count++;
    console.log(output);
}

function buyLunch(names){
    var numOfPpl = names.length;
    var randomPersonPos = Math.floor(Math.random() * numOfPpl);
    var randomPerson = names[randomPersonPos];

    return randomPerson + " is buying lunch today";
}

function beer99(){
    var beer = 99;

    while(beer >= 0){
        var word = "bottle";
        if(beer === 1){
            word = "bottles";
        }
        console.log(beer + " " + word + " of beer on the wall " + beer + " " + word + " of beer,");
        console.log("Take one down, pass it around,");
            beer--;
        console.log(beer + " " + word + " of beer on the wall.");
    }
}

function fibonacciGenerator(n){
    var output = [];
    if(n === 1){
        output = [0];
    }
    else if(n === 2){
        output = [0, 1];
    }
    else{
        output = [0, 1];

        for(var i = 2; i < n; i++){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

// For my personal website

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});