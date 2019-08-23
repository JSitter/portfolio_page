# Portfolio Page

This project was boostrapped using `npx create-react-app`. 

Heroku has an easy to use service for hosting web apps that you make. They also have a free tier that allows you to build and show off projects. While generous, the dyno available to the free tier will go to sleep after a period of inactivity.

Due to several projects being hosted on Heroku's free tier, it was useful to have some sort of indication that those projects were indeed starting up and not crashed. 

This portfolio page uses React to keep track of the state of multiple projects and displays when they are ready to be visited.

Many of the CSS styles come from the CSS library that exists [here](https://github.com/JSitter/lightweight_css_library).

This project uses a php script that will return back when a url has returned 1K of data. That script should be included in the project's root directory on the server that is hosting the site.

This project assumes the server is running Apache and PHP.