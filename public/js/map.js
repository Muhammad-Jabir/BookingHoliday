//Mapbox Map
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/standard",
  center: listing.geometry.coordinates,
  zoom: 8,
});

//Mapbox Marker
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location Will be Provided After Booking</p>`,
    ),
  )
  .addTo(map);
