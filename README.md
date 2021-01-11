# LICENSE
Please read the LICENSE file for more info about what you can and can't do with this project.

# What is it and what does it do?
This is a JavaScript project written to change document elements on the Google Meet site when in a video call. I wrote this with the inspiration of being bored as shit in online classes, hoping to make things somehow a little more interesting (and also just because i'm very new to JS so it was also a way to test my skills).
This list may be outdated if i forget to update it, however at the moment the text it changes is:
- The "Raise hand" text on the button
- Soon (in development) either the "Turn on captions" text on the button or the "Present now" text on the button.

# How do i install this!?
The best way to inject this into Google Meet's website is using a chrome extension called TamperMonkey: https://www.tampermonkey.net/. This is an extension that allows you to inject custom JS into any website of your choosing. To use TamperMonkey as a JS injector with my code, all you need to do is create a Custom UserScript and just copy and paste the code into there, from there you should be good to go.

# Okay, now what?
Well unfortunately with my limited knowledge of JS and how the Google Meet site works, upon the page loading with an invite link to join a class, you need to join the class within 32.5 seconds otherwise the code will just say that the element which corresponds to the "Raise hand" button doesn't exist, and will just fail. Once you're actually into the call, a popup saying "Success!" should appear, followed by the custom strings and anything else. I have added quite a lot of functions to log information to the console as it's happening. In your browser's developer console, there should be a lot of messages telling you what's happening in the code straight after it happens. This is a very useful debugging function.
