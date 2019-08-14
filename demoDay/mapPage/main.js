let mymap = L.map('mapid').setView([40.730610, -73.935242], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoic2Fub3NkdSIsImEiOiJjano4ZngyZ2UxNmFrM2JubDJ2ZHRjeG1wIn0.IQ4Ik5wlkSU-YHFvEdusbw'
}).addTo(mymap);
var searchLayer = L.geoJson().addTo(mymap);
console.log(searchLayer);
// L.map("map", {searchControl: {layer:searchLayer}})

//... adding data in searchLayer ...
mymap.addControl( new L.Control.Search({layer: searchLayer}) );
// searchLayer is a L.LayerGroup contains searched markersvar searchLayer = L.geoJson().addTo(mymap)
