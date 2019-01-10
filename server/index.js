const express = require('express');
const app = express();
const path = require('path');
const appPort = 3000;
const notFoundTemplate = require('./templates/404');

/*static files*/
app.use('/public', express.static(path.join(__dirname, '..', 'app', 'public')));
app.use('/public/bootstrap', express.static(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist')));
/*app endpoints*/
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'app', 'index.html')));
app.get('/todo', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'app', 'todo.html')));
/*errors*/
app.get('*', (req, res, next) => res.send(notFoundTemplate));

app.listen(appPort, () => console.log(`Listening to port ${appPort}`))

