async function updateMap() {

    let information = await fetch('./data.json');
    let stats = await information.json();

    stats.data.forEach(element => {

        latitude = element.latitude;
        longitude = element.longitude;
        cases = element.infected;

        if (cases>255) {
            color = "rgb(255,0,0)"
        }

        else{
            color = `rgb(${cases},0,0)`
        }

        new mapboxgl.Marker({
            color: color
        })
        .setLngLat([longitude, latitude])
        .addTo(map);

    });
}

updateMap();

document.title = 'Covid 19 viusalizer';
