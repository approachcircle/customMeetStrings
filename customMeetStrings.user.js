// ==UserScript==
// @name         customMeetStrings
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  custom google meet text
// @author       approachcircle
// @match        *://*.meet.google.com/*
// @grant        none
// ==/UserScript==

//----TODO: Add a element check in which the program elapses 10 secs, uses if statement to check if element exists, if it doesn't exist, wait 1 (or more) seconds
//and check again, repeat this for about a minute depending on initial wait time. if the element exists in these checks then proceed with the program obviously.----

(function() {
    setTimeout(function(){
        var doctitle = document.title;
        if (doctitle == "Meet") { //if the title of the page is just "Meet" then we're on the homepage
            console.log("%c detected user is on google meet homepage", "color: orange;");
        } else { // else, we're on a video call
            console.log("%c detected google meet site", "color: green;"); //detect meet site
            //STRING DUMP:
            var greenCSS = "color: green;";
            var redCSS = "color: red;";
            var ba = "%c assigned shorthand document variable";
            var va = "%c success, raise hand text is not undefined";
            var fa = "%c attempted to assign custom innerHTML to raise hand innerHTML";
            var fand = "successfully made all changes to the document, thank you and goodbye";
            var CT = "Raise your fucking hand";
            console.log("%c assigned main string vars", greenCSS);
            console.log(ba, greenCSS); //doc var
            function raiseHandf() {
                if (document.querySelectorAll('[class="sPXonc"]')[0] != undefined){ //if element returns undefined
                    try {
                        console.log(va, greenCSS); //element !undefined
                        document.querySelectorAll('[class="sPXonc"]')[0].innerHTML = CT; //change innerHTML to custom text
                        console.log(fa, greenCSS); //log attempt
                        alert(fand); //alert attempt
                    } catch (err) {
                        console.log('%c ' + err, redCSS);
                        alert("Critical error occurred regarding the change of strings: " + err);
                    }
                }
                else { //the element has failed the check, and has returned undefined
                    console.log("%c check failed, returned " + document.querySelectorAll('[class="sPXonc"]')[0], redCSS);
                    alert("An error occurred, element check returned " + document.querySelectorAll('[class="sPXonc"]')[0] + ". Will now begin checking element every 10 seconds.");
                    setTimeout(function(){
                        raiseHandf();
                    }, 15000);
                    //console.log('%c raise hand text element returned ' + document.querySelectorAll('[class="sPXonc"]')[0], redCSS); //log undefined returnal
                    //alert('Oops, something went wrong with approachcircle\'s javascript. raise hand text element returned ' + document.querySelectorAll('[class="sPXonc"]')[0]); //alert undefined returnal
                }
            }
            console.log("%c defined raiseHand() function", greenCSS);
            setTimeout(function(){ //begin func for time to elapse
                raiseHandf();
            }, 15000); //end func for 30 sec timeout
            //console.log('%c plugin initialised, timeout begun', greenCSS); //code execution complete
        }
    }, 15000);
})();
