var wTable = ["Blue Skies", "Sunny", "Sunny", "Partial Sun", "Partial Sun",
    "Cloudy", "Cloudy", "Cloudy", "Partial Rain", "Partial Rain", "Rainy", "Rainy", "Rainstorm"];
//Normalfördelad tabell, 13 entries, 0-12 aka modW bör vara 13
var lastW = 0;

function weatherFunction() {
    if (lastW < 12 >= 8) {
        modW = 1;
    } else if (lastW > 0 <= 4) {
        modW = -1;
    } else {
        modW = 0;
    }
    //Om soligt/regn ökad chans för fortsatt samma, inte för Storm och "Blue Skies" 
    var nowW = Math.floor((Math.random() * 13) + modW);
    if (nowW < 0) {
        nowW = 0;
    } else if (nowW > 12) {
        nowW = 12;
    }
    lastW = nowW;
    document.getElementById("weatherTable").innerHTML = wTable[nowW];
}

//this is the scrub version of doing it, now how do I automate things as to not need to change variables and instead automate them relative to the array?...


var wTable = ["Blue Skies", "Sunny", "Sunny", "Partial Sun", "Partial Sun",
    "Cloudy", "Cloudy", "Cloudy", "Partial Rain", "Partial Rain", "Rainy", "Rainy", "Rainstorm"];
//Normalfördelad tabell, 13 entries, 0-12 aka modW bör vara 13
var lastW = 0;
var midValue = Math.floor(wTable.length / 2);
function weatherFunction() {
    if (lastW < wTable.length >= midValue + 2) {
        modW = 1;
    } else if (lastW > 0 <= midValue - 2) {
        modW = -1;
        //Maybe these modifiers should be 2 instead of 1 to make sure the weather doesn't go from blue skies to rainstorms too easily
    } else {
        modW = 0;
    }
    //If sunny/rainy the chance is for similar weather is increased, though not for stormy and "blue skies" 
    var nowW = Math.floor(Math.random() * wTable.length + 1) + modW;
    if (nowW < 0) {
        nowW = 0;
    } else if (nowW > wTable.length) {
        nowW = wTable.length;
    }
    lastW = nowW;
    document.getElementById("weatherTable").innerHTML = wTable[nowW];
}
//This should work... but do we lose out on anything, functionality-wise, that we might want later/somwhere else by not making it an associative array using keys?

//Economy, events/rumors etc all can use this array-function set, they need somewhere to be
//Region / time span can control which functions to use via if statements 
