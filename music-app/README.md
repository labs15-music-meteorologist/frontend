# Music Meteorologist Frontend

Welcome to our Data Science Music Recommendation.

Click [here](https://music-meteorologist.com/) to visit the app or click on the .gif below to watch our video and demo tutorial:

[![Music Meteorologist](src/assets/user_gif.gif)](https://www.youtube.com/watch?v=xxxx)

Music Meteorologist is a fullstack web application that has been built during the Labs15 (1st August 2019 - 30 September 2019) by
[LambdaSchool](https://lambdaschool.com/) students. Each student fulfills a role in the project to collectively build the application. (See Team Section)

Music Meteorologist provides a web application where users can play a guessing game and get to know themself better. A sophisticated Machine Learning model will try to predict better than the user itself if a certain music song will be liked or not. For that a lot of different characteristics of a songs are considered. At the end the user can revisit the assessment of the model and give feedback about its correctness. To deliver this experience a Node.JS Backend and a React.JS Frontend were built.

## Team

|                                  [**Daniel Starling<br> (Team Lead)**](https://github.com/Dstar4)                                  |                                       [**Ben Feoley<br> (Web Developer)**](https://github.com/bfeole)                                       |                               [**Sascha Majewsky<br> (Web Developer)**](https://github.com/SaschaWebDev)                                |                                      [**Justin Chen<br> (Web Developer)**](https://github.com/justiny2c)                                      |                                         [**Rushi Arumalla<br> (Web Developer)**](https://github.com/rushi444)                                         |                                       [**Jean Lafontant<br> (Web Developer)**](https://github.com/jrl508)                                        |                                     [**Tom Higgins<br> (Data Scientist)**](https://github.com/Higgins2718)                                     |
| :--------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: |
|             [<img src="https://avatars3.githubusercontent.com/u/28398122?s=80" width="80">](https://github.com/Dstar4)             |                 [<img src="https://avatars2.githubusercontent.com/u/13921158?s=80" width="80">](https://github.com/bfeole)                  |            [<img src="https://avatars1.githubusercontent.com/u/19645465?s=80" width="80">](https://github.com/SaschaWebDev)             |                 [<img src="https://avatars1.githubusercontent.com/u/49797469?s=80" width="80">](https://github.com/justiny2c)                 |                     [<img src="https://avatars3.githubusercontent.com/u/49988869?s=80" width="80">](https://github.com/rushi444)                      |                    [<img src="https://avatars1.githubusercontent.com/u/25849763?s=80" width="80">](https://github.com/jrl508)                    |                [<img src="https://avatars3.githubusercontent.com/u/22261894?s=80" width="80">](https://github.com/Higgins2718)                 |
|                     [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/Dstar4)                      |                          [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/bfeole)                          |                     [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/SaschaWebDev)                     |                         [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/justiny2c)                          |                              [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/rushi444)                              |                            [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/jrl508)                             |                         [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/Higgins2718)                         |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/dstarling/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/ben-feole-aa760322/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/saschamajewsky/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/justin-chen-19296b8b/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/rushyanth-arumalla-095782161/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/jean-lafontant-b3304772/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/tom-higgins-4b0327123/) |

## Built With

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Language used to make the webpage interactive
- [React](https://reactjs.org/) - Front end framework for building single page apps
- [React-Router](https://reacttraining.com/react-router/) - Used for routing in react projects
- [Redux](https://redux.js.org/) - State management for React
- [Recharts](http://recharts.org/en-US/) - Data Visualization tool
- [Material-UI](https://material-ui.com/) - Component Library/ Style Guide

## Installation

- Download and install [Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

- Clone the project from the [GitHub](https://github.com/labs15-music-meteorologist/frontend) Master oder Development branch

- Open the terminal and use the following steps

```
cd frontend
cd music-app
yarn
```

- Now all dependencies for the application are installed still the environmental variables are not set up to install these use the following steps in terminal

```
touch .env
```

- Enter that new .env file and insert one of the following environmental setups there and save the file

FOR LOCAL SETUP

```
REACT_APP_BACKEND_BASE_URL=http://localhost:5000/
REACT_APP_REDIRECT_URL=http://localhost:3000/
```

FOR DEVELOPMENT EVIRONMENT SETUP

```
REACT_APP_BACKEND_BASE_URL=https://music-meteorology-development.herokuapp.com/
REACT_APP_REDIRECT_URL=https://music-meteorologist-development.netlify.com/
```

FOR STAGING1 EVIRONMENT SETUP

```
REACT_APP_BACKEND_BASE_URL=https://music-meteorology-staging1.herokuapp.com/
REACT_APP_REDIRECT_URL=https://music-meteorologist-staging1.netlify.com/
```

FOR STAGING2 EVIRONMENT SETUP

```
REACT_APP_BACKEND_BASE_URL=https://music-meteorology-staging2.herokuapp.com/
REACT_APP_REDIRECT_URL=https://music-meteorologist-staging2.netlify.com/
```

- Finally start the application with the following command in terminal

```
yarn start
```

- When used locally you should also start our backend project locally as well to give the frontend another application to speak to and a database to persist data into. Visit our backend and an installation tutorial [here](https://github.com/labs15-music-meteorologist/backend).

## Architecture and Project Structure

The product is build to be a single page application. Responsibilities of modules and components have been splitted into a easy to grasp and extend upon file structore. So views which mainly contain code that is displayed to the user and builupon single components are seperated. Then components contain the business logic are seperated into the components folder. Reducers and Action providing a global application storage through Redux have been seperated into distinct folders. Also styled containing the CSS logic have their own distinct place.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
