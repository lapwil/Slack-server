var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var port       = process.env.PORT || 3000;
var hellobot   = require('./hellobot');
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send("Vous venez de lancer le standupmeeting!\\n@channel c'est l'heure du StandUp Meeting !\\nPrenez le temps de répondre à ces quelques questions:\\n\\n1 - Sur quoi avez-vous travaillé hier ?\\n2 - Sur quoi allez-vous travailler aujourd'hui ?\\n3 - Y a-t'il quelque chose qui vous bloque ?\\n4 - Avez vous besoin d'aide ?\\n") });
 
// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
 
app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});

app.post('/hello', hellobot);