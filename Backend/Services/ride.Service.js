const rideModel = require('../Models/ride.model');
const mapService = require('./maps.Service');
const crypto = require('crypto');

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const distanceInKm = distanceTime.distance.value / 1000;
    const durationInMinutes = distanceTime.duration.value / 60;

    const fare = {
        auto: Math.round(30 + (distanceInKm * 10) + (durationInMinutes * 1.5)),
        car: Math.round(50 + (distanceInKm * 15) + (durationInMinutes * 2)),
        moto: Math.round(20 + (distanceInKm * 8) + (durationInMinutes * 1))
    };

    return fare;
}

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }

    return generateOtp(num);
}

module.exports.getFare = getFare;
module.exports.createRide = async ({
    user, pickup, destination, vehicleType
}) => {
    if(!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }

    const fare = await getFare(pickup, destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(4),
        fare: fare[vehicleType],
        vehicle: vehicleType
    })

    return ride;
}

