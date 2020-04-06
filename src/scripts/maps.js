ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map("map", {
    center: [55.723313, 37.571965],
    zoom: 13,
    controls: ["zoomControl", "searchControl"],
  });

  const coords = [
    [55.723313, 37.571965],
    [55.733969, 37.587093],
    [55.733827, 37.569899],
  ];

  marker = new ymaps.Placemark(
    [55.723313, 37.571965],
    {
      hintContent: "Собственный значок метки",
      balloonContent: "Это красивая метка",
    }, 
    {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: "default#image",
    // Своё изображение иконки метки.
    iconImageHref: "../images/marker.png",
    // Размеры метки.
    iconImageSize: [25, 35],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38],
    }
  );
  marker1 = new ymaps.Placemark(
    [55.733969, 37.587093],
    {
      hintContent: "Собственный значок метки",
      balloonContent: "Это красивая метка",
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "../images/marker.png",
      // Размеры метки.
      iconImageSize: [25, 35],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    }
  );
  marker2 = new ymaps.Placemark(
    [55.733827, 37.569899],
    {
      hintContent: "Собственный значок метки",
      balloonContent: "Это красивая метка",
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "../images/marker.png",
      // Размеры метки.
      iconImageSize: [25, 35],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    }
  );
  myMap.geoObjects.add(marker).add(marker1).add(marker2);

  myMap.behaviors.disable("scrollZoom");
}
