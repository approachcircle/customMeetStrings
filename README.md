# LICENSE
Please read the LICENSE file for more info about what you can and can't do with this project.

# What is it and what does it do?
This is a JavaScript project written to change document elements on the Google Meet site when in a video call. I wrote this with the inspiration of being very bored in online classes, hoping to make things somehow a little more interesting (and also just because i'm very new to JS so it was also a way to test my skills).

# How do i install this!?
The best way to inject this into Google Meet's website is using a chrome extension called TamperMonkey: https://www.tampermonkey.net/. This is an extension that allows you to inject custom JS into any website of your choosing. To use TamperMonkey as a JS injector with my code, all you need to do from your dashboard is to head over to "Utilities" and in the "File" subsection, click the "Choose file" button next to "Import", select the JS file you just downloaded from this github page. Once imported, you should be good to go.

# Okay, now what?
Within 15 seconds of the code starting to execute, it's going to check the page's title, if the title is still just "Meet", it will assume it's still on the homepage and will not continue any further. However, if the title has changed from just "Meet" to something else, then it will continue to execute the rest of the code.