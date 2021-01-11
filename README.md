# LICENSE
Please read the LICENSE file for more info about what you can and can't do with this project.

# What is it and what does it do?
This is a JavaScript project written to change document elements on the Google Meet site when in a video call. I wrote this with the inspiration of being bored as shit in online classes, hoping to make things somehow a little more interesting (and also just because i'm very new to JS so it was also a way to test my skills).
This list may be outdated if i forget to update it, however at the moment the text it changes is:
- The "Raise hand" text on the button
- Soon (in development) either the "Turn on captions" text on the button or the "Present now" text on the button.

# How do i install this!?
The best way to inject this into Google Meet's website is using a chrome extension called TamperMonkey: https://www.tampermonkey.net/. This is an extension that allows you to inject custom JS into any website of your choosing. To use TamperMonkey as a JS injector with my code, all you need to do from your dashboard is to head over to "Utilities" and in the "File" subsection, click the "Choose file" button next to "Import", select the JS file you just downloaded from this github page. Once imported, you should be good to go.

# Okay, now what?
Within 10 seconds of the page loading, it will begin to search for the raise hand element every 10 seconds, when it finds it, it will change the innerHTML.
