function updateMap() {
  console.log("refresh");
   fetch("https://raw.githubusercontent.com/raj708/coronaData/master/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp.data);

      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        nameOfCountry =element.name
        if (cases > 225) {
          color = "rgb(255,0,0)";
        } else {
          color = `rgb(${cases},0,0)`;
        }

        //Mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color: color,
          
        })
          .setLngLat([longitude, latitude])
          .addTo(map)
          .setPopup(
            new mapboxgl.Popup() //add popups
              .setHTML(
                '<h3>' + nameOfCountry  + '</h3> <p>' + cases + '</p> ' 
             
              )
          );
      });
    });
}
updateMap();
let interval = 200000;
setInterval(updateMap, interval);
