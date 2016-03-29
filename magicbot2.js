module.exports = function (req, res, next) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlreq         = new XMLHttpRequest();
    xmlreq.open('GET', 'https://api.deckbrew.com/mtg/cards?name=nekusar', false);
    xmlreq.send(null);
    var result = eval("(" + xmlreq.responseText + ")");
    return res.status(200).send(result[0].editions[0].image_url);
}
