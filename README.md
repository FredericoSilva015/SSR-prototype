# SSR Prototype

1. [Details](#prototyping-ssr-on-react)
2. [Changes](#changes)

from :
*  https://medium.com/@danlegion/react-server-side-rendering-with-express-b6faf56ce22
shout out for the amazing tutorial, very well done!

## prototyping ssr on react

* so i challenge myself to find a way to build SSR into react with out using any framework, this is mainly a research exercise or proof of concept
* for those interested, i would recomend  to check out either next.js or gatsby.js which comes with this and other features out of the door (there are more framworks that provide this)

## changes

* i made some changes, but i mostly agree with the practices from the author, bare in mind that these changes are opiniated and may not reflect your impression
* the author added few comments, which might confuse some that read through the project, i helped fix that, and tried to stay as neutral as possible, again these might be opinianated, so take it with a grain of salt if you disagree
* i also changed the structure slightly, since i do not agree with the idea of injecting a string as the main template, also it would not be reflective of an actual project, so added a file for this