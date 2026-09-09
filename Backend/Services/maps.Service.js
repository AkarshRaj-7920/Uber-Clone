const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apikey = process.env.AWS_LOCATION_API_KEY;
    const url = `https://places.geo.ap-south-1.amazonaws.com/v2/geocode?key=${apikey}`;

    try {
        const response = await axios.post(url,
            {
                QueryText: address,
                MaxResults: 1,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!response.data.ResultItems || response.data.ResultItems.length === 0) {
            throw new Error('Unable to find coordinates of this address');
        }

        const [lng, lat] = response.data.ResultItems[0].Position;

        return {
            lat,
            lng
        };

    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and Destination are required')
    }

    const apikey = process.env.AWS_LOCATION_API_KEY;
    const url = `https://routes.geo.ap-south-1.amazonaws.com/v2/routes?key=${apikey}`; // TO be changes

    try {
        const originCoordinates = await this.getAddressCoordinate(origin);
        const destinationCoordinates = await this.getAddressCoordinate(destination);

        const response = await axios.post(
            url, {
            Origin: [originCoordinates.lng, originCoordinates.lat],
            Destination: [destinationCoordinates.lng, destinationCoordinates.lat],
            TravelMode: 'Car',
            OptimizeRoutingFor: 'FastestRoute'
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        const route = response.data.Routes[0];

        return {
            distance: {
                text: `${(route.Summary.Distance / 1000).toFixed(2)} km`,
                value: route.Summary.Distance
            },
            duration: {
                text: `${Math.floor(route.Summary.Duration / 3600)} hours ${Math.floor((route.Summary.Duration % 3600) / 60)} mins`,
                value: route.Summary.Duration
            }
        };

    } catch (err) {
        console.log(err);
        throw err;
    }

}

module.exports.getAutoCompleteSuggestion = async (input) => {
    if (!input) {
        throw new Error('Query is required');
    }

    const apikey = process.env.AWS_LOCATION_API_KEY;
    const url = `https://places.geo.ap-south-1.amazonaws.com/v2/autocomplete?key=${apikey}`;

    try {
        const response = await axios.post(
            url,
            {
                QueryText: input,
                MaxResults: 5
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data.ResultItems;
    } catch (err) {
        console.log(err.response?.data || err.message);
        throw err;
    }
}
