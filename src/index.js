const cors = require('cors');
const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');


// SERVER

// configura el servidor, hay que ponerlo siempre
const app = express();
app.use(express.json({ limit: '10mb' }));   //para limitar el tamaño de los archivos que se envían al servidor 
app.use(cors());

//configura ejs(embedded javascript templates) para el motor de plantillas. 
// permite procesar la página html con extensión .ejs (nuestra card.ejs) en el servidor antes de servirla a la usuaria
app.set('view engine', 'ejs');

// inicia la aplicación de express, hay que ponerlo siempre
const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// inicia y configura la base de datos
const db = new Database('./src/data/cards.db', {
  // esta linea muestra en consola las queries de la base de datos
  verbose: console.log,
});

// configura el servidor estático, escucha los archivos en public
const staticServerPath = './public';
app.use(express.static(staticServerPath));


// ENDPOINTS, que son 'funciones' para decirle al servidor qué rutas escuchar


app.get('/card/:id', (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);     //selecciona todas las columnas de la base de datos
  const data = query.get(req.params.id);

  console.log(data);

  res.render('pages/card', data);
});


//esta es la ruta http://localhost/card/ ---el último else guarda los datos de la tarjeta
app.post('/card', (req, res) => {
  console.log('reqbody', req.body);

  const response = {};

  if (!req.body.name) {
    response.success = false;
    response.error = 'missing name parameter';
  } else if (!req.body.job) {
    response.success = false;
    response.error = 'missing job parameter';
  } else if (!req.body.email) {
    response.success = false;
    response.error = 'missing email parameter';
  } else if (!req.body.photo) {
    response.success = false;
    response.error = 'missing photo parameter';
  } else if (!req.body.github) {
    response.success = false;
    response.error = 'missing github parameter';
  } else if (!req.body.linkedin) {
    response.success = false;
    response.error = 'missing linkedin parameter';
  } else {                              
    const stmt = db.prepare('INSERT INTO cards (palette,name,job,email,phone,photo,linkedin,github) VALUES (?,?,?,?,?,?,?,?)');
    const result = stmt.run(req.body.palette, req.body.name, req.body.job, req.body.email, req.body.phone, req.body.photo, req.body.linkedin, req.body.github);

    response.success = true;

    if (req.hostname === 'localhost') {
      response.cardURL = "http://localhost:3000/card/" + result.lastInsertRowid;
    }
    else {
      response.cardURL = 'https://awesome-profile-cards-lolies.herokuapp.com/card/' + result.lastInsertRowid;
    }
  }


  res.status(200).json(response);   //responde con un status 200(todo ok) y la response, en este caso un json
});

