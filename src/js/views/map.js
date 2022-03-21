

class MapComponent {
    _map;

    initMap(lat, long, zoom = 16) {
        this._map = L.map('map').setView([lat, long], zoom);
        L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
        }).addTo(this._map);

        this._setMarker([lat, long]);
    }

    renderLocation(lat, long, zoom = 13) {
        this._map.setView(L.latLng(lat, long), zoom);
        this._setMarker([lat, long]);
    }

    _setMarker(latLong) {
        L.marker(latLong).addTo(this._map)
    }
}

export default new MapComponent();