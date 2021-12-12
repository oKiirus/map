mapboxgl.accessToken = 'pk.eyJ1Ijoib2tpaXJ1cyIsImEiOiJja3gzcXl2emkxdjA1MnVwMng1N3RsYnQ2In0.xHFddfBvmW6uZB6iaaIy9w'

var map = new mapboxgl.Map({
    container : 'map',
    style : 'mapbox://styles/mapbox/navigation-night-v1',
    center : [-123.126010, 49.273734],
    zoom : 18
})

map.addControl(
    
    new mapboxgl.GeolocateControl({
        positionOptions : {enableHighAccuracy : true},
        trackUserLocattion : true,
    })
    
)

map.addControl(
    new MapboxDirections({
        accessToken : mapboxgl.accessToken
    }),
    'top-left'
)