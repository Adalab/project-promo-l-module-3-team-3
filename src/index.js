const cors = require('cors');
const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');

// SERVER

// config server hay que ponerlo siempre
const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(cors());

app.set('view engine', 'ejs');

// init express aplication hay que ponerlo siempre
const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/data/cards.db', {
  // this line log in console all data base queries
  verbose: console.log,
});

// config express static server
const staticServerPath = './public';
app.use(express.static(staticServerPath));

app.get('/card/:id', (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);
  const data = query.get(req.params.id);

  console.log(data);

  res.render('pages/card', data);
});

// app.get('/card/:id', (req, res) => {
//   const data = {
//     //aquí los datos de la tarjeta
//     palette: 1,
//     name: 'Nombre Apellidos',
//     job: 'Front-end unicor',
//     phone: '',
//     email: 'sally-hill@gmail.com',
//     linkedin: 'sallyhill',
//     github: 'sallyhill',
//     photo: '',
//   };

//   res.render('pages/card', data);
// });

app.post('/card', (req, res) => {
  console.log(req.body);

  const response = {};

  if (!req.body.name) {
    response.succes = false;
    response.error = 'missing name parameter';
  } else if (!req.body.job) {
    response.succes = false;
    response.error = 'missing job parameter';
  } else if (!req.body.email) {
    response.succes = false;
    response.error = 'missing email parameter';
  } else if (!req.body.photo) {
    response.succes = false;
    response.error = 'missing photo parameter';
  } else if (!req.body.github) {
    response.succes = false;
    response.error = 'missing github parameter';
  } else if (!req.body.linkedin) {
    response.succes = false;
    response.error = 'missing linkedin parameter';
  }  else {
    const query = db.prepare('INSERT INTO cards (id, palette,name,job,email,phone,photo,linkedin,github) VALUES (?,?,?,?,?,?,?,?,?)');
    const result = query.run(req.body.id,req.body.palette,req.body.name,req.body.job, req.body.email,req.body.phone,req.body.photo,req.body.linkedin,req.body.github); 
    
    response.success = true;
    response.cardURL = 'https://todo-ha-ido-bien.com';
  }

  res.json(response);
});

// not found error
app.get('*', (req, res) => {
  // relative to this directory
  const notFoundFileRelativePath = '../public/404-not-found.html';
  const notFoundFileAbsolutePath = path.join(__dirname, notFoundFileRelativePath);
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
