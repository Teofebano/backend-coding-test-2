class RideModel {
    static getAll(db, cb){
        db.all('SELECT * FROM Rides', function (err, rows) {
            if (err) {
                cb(err, null);
            }else{
                cb(null, rows);
            }
        });
    }

    static addRide(db, values, cb){
        db.run('INSERT INTO Rides(startLat, startLong, endLat, endLong, riderName, driverName, driverVehicle) VALUES (?, ?, ?, ?, ?, ?, ?)', values, function (err) {
            if(err){
                cb(err, null);
            }else{
                db.all('SELECT * FROM Rides WHERE rideID = ?', this.lastID, function (err, rows) {
                    if(err){
                        cb(err, null);
                    }else{
                        cb(null, rows);
                    }
                });
            }
        });
    }

    static getOneById(db, id, cb){
        db.all('SELECT * FROM Rides WHERE rideID = ?', id, function (err, rows) {
            if(err){
                cb(err, null);
            }else{
                cb(null, rows);
            }
        });
    }
}

module.exports = RideModel;