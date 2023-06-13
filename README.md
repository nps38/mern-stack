# mern-stack
A MERN stack is the combination of four different technologies used to create an interactive web application or website. Involves front-end and back-end programming.

Consists of:
  1. React - frontend API (runs in the browser)
  2. Node.js - backend API
  3. Express - Framework for node (runs in Node/js)
  4. Mongodb - nosql database used to store application data

In backend folder:
  npm init -y --> creates package.json
  npm install express
  npm install -g nodemon --> install node globally
  nodemon server.js --> runs application; reruns at detection of change
  npm install dotenv --> creates .env for env vars
  npm install mongoose --> Object Data Modeling (ODM) Library; uses methods to read & write database docs & declare models & schemas

Postman download: https://www.postman.com/downloads/

API Endpoints:
GET    /workouts     --> Gets all workout docs
POST   /workouts     --> Creates new workout doc
GET    /workouts/:id --> Gets single workout doc
DELETE /workouts/:id --> Deletes single workout
PATCH  /workouts/:id --> Updates single workout

Mongo DB Atlas
- Service that creates a database online and have it fully configured and hosted for the developer
- https://www.mongodb.com/atlas/database