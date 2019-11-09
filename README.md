# GameMania
A Full stack web application that serves as a personal video game library to keep track of games that you would like to play as well as the ones that you have played already.

Direct link to app: 

## Home page 
<img width="1346" alt="Screenshot of Finished App" src=

### Result:

In this application we utilized the Giant Bomb API to implement a search for video game titles. Ultimately, GameMania allows the user to keep a list of video games they want to play. Once the video game is selected, a model generates a brief description of the video game including; image, title, platform, company, characters, year of release and ratings. The user has the option to keep the video game in the game log or mark the game as “played”. 

## Movie general info 
<img width="1347" alt="Screenshot of App" src=

### Technologies used:

Bootstrap (Front-end framework)

Cards, Modal

Express.js (Server framework)

Handlebars (Templating engine)

Heroku (Cloud platform)

JawsDB (Heroku database add-on)

MySQL (RDBMS)

Node.js (Javascript environment)

Sequelize (ORM)

## Getting Started

### Prerequisites
- MySQL
- Node.js

### Installing
If you would like the view the site from a user's point of view, you have the option of viewing the site on Heroku. It is located at <"coming soon">.
 
If you would like to run the application locally, please ensure that you have the prerequisites installed, then take the following steps:
- Clone this repository to your local machine with `git clone <repo-url>`.
- Install NPM dependencies by running `npm install` in the project directory.
- If you use a MySQL username other than `root` or have a MySQL password, open `config/config.json` and update these values on lines 3 and 4.
- Log into MySQL CLI with `mysql -u root` (substitute your username and add `-p <your password>` if needed).
- Run `CREATE DATABASE usergames;`
- Exit MySQL with `exit`.
- Ensure that you are in the root project directory, then run `npm start`.
- The application will be running at `localhost:3000/`


## Authors
Jack Brettell, Darcy Atlas, Linlin Xing, Davontae Glenn 
