const cors = require('cors');
const express = require('express');

// SERVER

// config server hay que ponerlo siempre
const app = express();
app.use(express.json());
app.use(cors());

// init express aplication hay que ponerlo siempre
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// // API request > POST > http://localhost:3000/card
// server.post('/card', (req, res) => {
//   // console request body params
//   console.log(`Creating new card: "${req.body.card}"`);
//   const response = {
//     result: `User created: ${req.body.card}`,
//   };
//   res.json(response);
// });
