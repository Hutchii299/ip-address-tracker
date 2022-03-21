
import { MAP_KEY } from '../config.js';

class MapComponent {
    _map;

    initMap(lat, long, zoom = 18) {
        this._map = L.map('map').setView([lat, long], zoom);
        L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${MAP_KEY}`, {
            maxZoom: 25,
        }).addTo(this._map);

        this._setMarker([lat, long]);
    }

    renderLocation(lat, long, zoom = 18) {
        this._map.setView(L.latLng(lat, long), zoom);
        this._setMarker([lat, long]);
    }

    _setMarker(latLong) {
        L.marker(latLong).addTo(this._map)
    }
}

export default new MapComponent();