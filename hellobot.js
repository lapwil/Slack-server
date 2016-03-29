module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : "Merci, " + userName + " de m'avoir invoqué!\nVous venez de lancer le Stand Up Meeting!\n@channel c'est l'heure!\nPrenez le temps de répondre à ces quelques questions:\n\n1 - Avez vous commencé tous vos projets du run en cours ?\n2 - Sur quoi avez-vous travaillé hier ?\n3 - Sur quoi allez-vous travailler aujourd'hui ?\n4 - Y a-t'il quelque chose qui vous bloque ?\n5 - Avez vous besoin d'aide ?\n6 - Qu'est-ce qui vous a amusé hier? (jeu, vidéo, film, série...)\n"
  };

  // on check le user pour éviter que Slackbot boucle sur lui même
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
