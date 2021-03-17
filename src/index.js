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


// ENDPOINTS:

//este aún no va
app.get('/card/:id', (req, res) => {
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);     //selecciona todas las columnas de la base de datos
  const data = query.get(req.params.id);

  console.log(data);  

  res.render('pages/card', data);
});


//en este sólo funciona el último else
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
  }  else {                              //esta es la única condición que está funcionando: manda los datos a la base de datos
    const query = db.prepare('INSERT INTO cards (id, palette,name,job,email,phone,photo,linkedin,github) VALUES (?,?,?,?,?,?,?,?,?)');
    const result = query.run(req.body.id,req.body.palette,req.body.name,req.body.job, req.body.email,req.body.phone,req.body.photo,req.body.linkedin,req.body.github); 
    
    response.success = true;
    response.cardURL = 'https://todo-ha-ido-bien.com';
  }

  res.status(200).json(response);   //responde con un status 200(todo ok) y la response, en este caso un json
});



// error de no encontrado, lanza página 404 (no está funcionando, creo)
app.get('*', (req, res) => {
  const notFoundFileRelativePath = '../public/404-not-found.html';
  const notFoundFileAbsolutePath = path.join(__dirname, notFoundFileRelativePath);
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
