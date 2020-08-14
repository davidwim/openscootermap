import axios from "axios";

export async function handler(event, context) {

    try {
        const response = await axios.get(`https://api-bird.prod.birdapp.com/bird/nearby?latitude=${event.queryStringParameters.lat}&longitude=${event.queryStringParameters.lon}&radius=9000`,
            {
                headers: {
                        "Authorization": "Bird <TOKEN>",
                        "Location": "{"latitude":${event.queryStringParameters.lat},"longitude":${event.queryStringParameters.lon},"altitude":500,"accuracy":100,"speed":-1,"heading":-1}"
                    }
            }
        );
        const data = response.data;
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            }, // ${event.queryStringParameters.northEastLat}
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
