module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var carte    = req.body.text.replace('mc: ', '');

  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var xmlreq         = new XMLHttpRequest();
  xmlreq.open('GET', 'https://api.deckbrew.com/mtg/cards?name=' + carte, false);
  xmlreq.send(null);
  var result = eval("(" + xmlreq.responseText + ")");
  var last_edition = 0;
  if (result[0].editions[0] > 1) {
    last_edition = result[0].editions[0].length -2;
  }
  var botPayload = {
    text : result[0].editions[last_edition].image_url
  };

  // on check le user pour éviter que Slackbot boucle sur lui même
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
