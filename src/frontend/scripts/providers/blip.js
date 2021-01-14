import {blipIcon} from "../utils/icons";
import * as L from "leaflet";

/**
 * Loader for the Lime API. Returns an array of vehicle objects that conform to a common format.
 * @param northEast             The coordinates of the northeast corner of the map currently in the viewport
 * @param southWest             The coordinates of the southwest corner of the map currently in the viewport
 * @returns {Promise<Array>}    Promise which returns the array of vehicle objects.
 */
function loader(northEast, southWest) {

    const centreLat = (northEast.lat + southWest.lat) / 2;
    const centreLon = (northEast.lng + southWest.lng) / 2;

    return fetch(`${window.location.href}.netlify/functions/blip?northEastLat=${centreLat}&northEastLon=${centreLon}`)
        .then((res) => {
            return res.json().then((data) => {
                if (!data.data) return [];
                return data.map((vehicle) => {
                    return {
                        id: vehicle.carID,
                        lat: vehicle.lat,
                        lon: vehicle.lon,
                        generation: vehicle.vehicleTypeId,
                        vehicle_type: 'Scooter',
                        battery: vehicle.fuelLevel
                    }
                });
            }).catch((err) => {
                console.error(err);
            })
        })
}

export const Blip = {
    brand: 'Blip',
    icon: blipIcon,
    group: L.layerGroup(),
    loader
};
