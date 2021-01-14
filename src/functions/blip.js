import axios from "axios";

export async function handler(event, context) {

    try {
        const response = await axios.get(`https://blip.frontend.fleetbird.eu/api/prod/v1.06/map/cars?lat1=${event.queryStringParameters.northEastLat}&lon1=${event.queryStringParameters.northEastLon}&lat2=${event.queryStringParameters.southWestLat}&lon2=${event.queryStringParameters.southWestLon}`,
            {
                headers: {
                        "User-Agent": "CarSharing/2.35.2 (com.blip.sharing; build:656; iOS 14.0.0) Alamofire/4.9.1"
                    }
            }
        );
        const data = response.data;
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
        }
    }
}
