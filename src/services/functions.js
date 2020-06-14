function validate(startLat, endLat, startLong, endLong, riderName, driverName, driverVehicle){
    const errors = [];

    if (startLat < -90 || startLat > 90 || startLong < -180 || startLong > 180) {
        errors.push('Start latitude and longitude must be between -90 - 90 and -180 to 180 degrees respectively');
    }

    if (endLat < -90 || endLat > 90 || endLong < -180 || endLong > 180) {
        errors.push('End latitude and longitude must be between -90 - 90 and -180 to 180 degrees respectively');
    }

    if (typeof riderName !== 'string' || riderName.length < 1) {
        errors.push('Rider name must be a non empty string');
    }

    if (typeof driverName !== 'string' || driverName.length < 1) {
        errors.push('Driver name must be a non empty string');
    }

    if (typeof driverVehicle !== 'string' || driverVehicle.length < 1) {
        errors.push('Driver vehicle must be a non empty string');
    }
    return errors;
}


module.exports = {
    validate
};