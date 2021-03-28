const renderMap = (dataList, renderData) => {
  let map = L.map('map-canvas').setView([35.652832, 139.839478], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  const pinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  dataList.map(dataItem => {
    L.marker([dataItem.location.x, dataItem.location.y], { icon: pinIcon }).addTo(map)
      .bindPopup(renderData(dataItem))
      .openPopup();
  });

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });


  const mainPinMarker = L.marker(
    {
      lng: 139.839478,
      lat: 35.652832,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  )
    .addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    console.log(evt.target.getLatLng());
  });
}

export { renderMap };
