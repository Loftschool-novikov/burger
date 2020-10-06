
// let myMap;

// const init = () => {
//     myMap = new ymap.Map('map', {
//         center: [55.76, 37.64],
//         zoom: 7
//     })
// }

// ymap.ready(init);

document.addEventListener('DOMContentLoaded', function() {
    ymaps.ready(init);
 });
 
 function init() {
    let myMap = new ymaps.Map("map", {
       center: [55.723313, 37.571965],
       zoom: 13,
       controls: ['zoomControl', 'searchControl']
    });
 
    const coords = [
       [55.723313, 37.571965],
       [55.733969, 37.587093],
       [55.733827, 37.569899]
   ];
 
    const myCollection = new ymaps.GeoObjectCollection({}, {
       draggable: false, // отмена перемещения
       iconLayout: 'default#image',
       iconImageHref: './images/icons/sprite.svg#map-marker',
       iconImageSize: [46, 57],
       iconImageOffset: [-35, -52]
    });
    
    for (var i = 0; i < coords.length; i++) {
       myCollection.add(new ymaps.Placemark(coords[i]));
    }
    
    myMap.geoObjects.add(myCollection);
 
    myMap.behaviors.disable('scrollZoom');
    
 };
 
 