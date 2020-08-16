import axios from "axios";

export async function handler(event, context) {

    try {
        const response = await axios.get(`https://blip.frontend.fleetbird.eu/api/prod/v1.06/map/cars/?lat1=${event.queryStringParameters.lat}&lat2=${event.queryStringParameters.lat}&lon1=${event.queryStringParameters.lon}&lon2=${event.queryStringParameters.lon}`,
            {
                headers: {
                        "accept": "*/*"
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
