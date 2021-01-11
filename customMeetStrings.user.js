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
    'use strict';
    console.log("%c detected google meet site", "color: green;"); //detect meet site
    //STRING DUMP:
    let greenCSS = "color: green;";
    let redCSS = "color: red;";
    let ba = "%c assigned shorthand document variable";
    let ca = "%c after 60 seconds elapse, the custom strings will be loaded.";
    let va = "%c success, raise hand text is not undefined";
    let fa = "%c attempted to assign custom innerHTML to raise hand innerHTML";
    let fand = "Success!";
    let CT = "Raise your fucking hand";
    console.log("%c assigned main string vars", greenCSS);
    console.log(ba, greenCSS); //doc var
    console.log(ca, greenCSS); //after 60 secs
    setTimeout(function(){ //begin func for 60 secs to elapse
        if (document.querySelectorAll('[class="sPXonc"]')[0] != undefined){ //if element returns undefined
            try {
                console.log(va, greenCSS); //element !undefined
                document.querySelectorAll('[class="sPXonc"]')[0].innerHTML = CT; //change innerHTML to custom text
                console.log(fa, greenCSS); //log attempt
                alert(fand); //alert attempt
                // while (document.querySelectorAll('[class="sPXonc"]')[0].innerHTML == "Raise hand") { //while the text is default, set it to custom text
                    // document.querySelectorAll('[class="sPXonc"]')[0].innerHTML = CT; //change innerHTML to custom text
                // } // doesn't work, possibly investigate?

            } catch (err) {
                console.log('%c ' + err, redCSS);
                alert(err);
            }
        }
        else { //the element has failed the check, and has returned undefined
            console.log('%c raise hand text element returned ' + document.querySelectorAll('[class="sPXonc"]')[0], redCSS); //log undefined returnal
            alert('Oops, something went wrong with approachcircle\'s javascript. raise hand text element returned ' + document.querySelectorAll('[class="sPXonc"]')[0]); //alert undefined returnal
        }
    }, 32500); //end func for 32.5 sec timeout
    console.log('%c all code executed, thank you and goodbye.', greenCSS); //code execution complete
})();