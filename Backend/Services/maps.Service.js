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

    } catch(error) {
        console.error(error);
        throw error;
    }
}