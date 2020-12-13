import * as L from 'leaflet';
const iconBase = {
    iconSize: [39, 46.5],
    iconAnchor: [20, 47.5]
};

export const limeIcon = new L.Icon({
    iconUrl: require("../../assets/lime.png"),
    ...iconBase
});

export const onzoIcon = new L.Icon({
    iconUrl: require("../../assets/onzo.png"),
    ...iconBase
});

export const beamIcon = new L.Icon({
    iconUrl: require("../../assets/beam.png"),
    ...iconBase
});

export const birdIcon = new L.Icon({
    iconUrl: require("../../assets/bird.png"),
    ...iconBase
});

export const flamingoIcon = new L.Icon({
    iconUrl: require("../../assets/flamingo.png"),
    ...iconBase
});

export const lchargeIcon = new L.Icon({
    iconUrl: require("../../assets/lcharge.png"),
    ...iconBase
});

export const jumpIcon = new L.Icon({
    iconUrl: require("../../assets/jump.png"),
    ...iconBase
});

export const lhubIcon = new L.Icon({
    iconUrl: require("../../assets/lhub.png"),
    ...iconBase
});

export const blipIcon = new L.Icon({
    iconUrl: require("../../assets/blip.png"),
    ...iconBase
});
