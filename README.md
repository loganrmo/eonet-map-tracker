# EONET Mapping Tracker: An Environmental Event Map 🌎

The EONET Mapping Tracker tracks natural events and disasters. It is powered by NASA's API and uses Google Maps to map out the current whereabouts of natural events, including wildfires, volcanos, storms, and icebergs. It was built in React and makes use of Fetch, ES6, and a variety of technologies. It is currently not deployed but the source code is available.

![Screenshot](/ss.png)


## Development
Clone this repository and `cd` to the project directory. First, run `npm install` to install all dependencies and libraries, after which you can run `npm start` in order to run in development mode. By default, it should be live on Port 3000.

## About the Project
This was a project that interested me because it mapped a variety of natural events directly to a map that everyone is familiar with, and it is re-rendered everytime the site is visited, allowing for real-time mapping to see what is going on directly from the Earth Observatory Natural Events Tracking system. It is not currently deployed due to budgeting limitation with the Google API. 

Originally, I followed a tutorial that taught me how to call an API and how to display items on the Map, however I extended it to display a variety of events, I added menu functionality, dynamic location based on where the user is located, implemented a better loading screen, and a new color scheme as well as my own CSS for design. Due to the fact that the API is simplistic, I implemented a backend with Node and Express but found there was no real performance increase by processing the API call in the backend, so ultimately, I scrapped that idea. 
