const cors = require('cors');
const express = require('express');
// const path = require('path');

// SERVER

// config server hay que ponerlo siempre
const app = express();
app.use(express.json());
app.use(cors());

// init express aplication hay que ponerlo siempre
const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// // config express static server
// const staticServerPath = './public'; // relative to the root of the project
// app.use(express.static(staticServerPath));

// API request > POST > http://localhost:3000/card
// app.post('/card', (req, res) => {
//   // console request body params
//   console.log(`Creating new card: ${req.body}`);
//   const response = {
//     result: `User created: ${req.body}`,
//   };
//   res.json(response);
// });


app.post("/card", (req, res) => {
  console.log(req.body);

  const response = {};

  if (!req.body.name) {
    response.succes = false;
    response.error = 'missing name parameter';
  }
  else if (!req.body.job) {
    response.succes = false;
    response.error = 'missing job parameter';
  }
  else if (!req.body.email) {
    response.succes = false;
    response.error = 'missing email parameter';
  }
  else if (!req.body.photo) {
    response.succes = false;
    response.error = 'missing photo parameter';
  }
  else {
    response.success = true;
    response.cardURL = "https://todo-ha-ido-bien.com"
  }

  res.json(response);
});

// app.get("/card/:id/", (req, res) => {
//   console.log(req.body);

//   res.json(["ni idea"]);
// });

// // not found error
// app.get('*', (req, res) => {
//   // relative to this directory
//   const notFoundFileRelativePath = '../public/404-not-found.html'; // este fichero tenemos que crearlo en server/public
//   const notFoundFileAbsolutePath = path.join(__dirname, notFoundFileRelativePath);
//   res.status(404).sendFile(notFoundFileAbsolutePath);
// });