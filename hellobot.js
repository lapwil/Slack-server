module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : "Hello, " + userName + "!\nVous venez de lancer le standupmeeting!\n@channel c'est l'heure du StandUp Meeting !\nPrenez le temps de répondre à ces quelques questions:\n\n1 - Sur quoi avez-vous travaillé hier ?\n2 - Sur quoi allez-vous travailler aujourd'hui ?\n3 - Y a-t'il quelque chose qui vous bloque ?\n4 - Avez vous besoin d'aide ?\n"
  };
 
  // on check le user pour éviter que Slackbot boucle sur lui même
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}