//import xml and json files//
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "filmes.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

var jsonhttp = new XMLHttpRequest();
jsonhttp.open("GET", "filmes.json", false);
jsonhttp.send();
var jsonDoc = JSON.parse(jsonhttp.responseText);

