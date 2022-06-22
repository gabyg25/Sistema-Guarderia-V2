const db = require('../config/database');

let reservations = { 
    id_Reservation : null,
    code_Verification: null,
    name_Client : null,
    telephones : null,
    emails : null,
    date_reservations : null
};


module.exports = {

    // Busqueda
    getReservation : (names, callback) => {
        let sql = 'SELECT * FROM reservaciones WHERE n_cliente = ?';
        db.query(sql,names, (err, datas) => {
            if (err) throw err;
            if (datas.length > 0 ) return callback(data[0]);
            return callback(null);
        });
    },
    
    // Extraccion de datos de la BD
    setReservation : (data) => {
        reservations.id_Reservation = data.id_reservacion
        reservations.code_Verification = data.cod_verificacion
        reservations.name_Client = data.n_cliente
        reservations.telephones = data.tel_cliente
        reservations.emails = data.correo_cliente
        reservations.date_reservations = data.fecha

        this.reservation = data;
        console.log(this.reservation);
    },
    func: function() {
        return (null, reservations);
    },

    // Mostrar todos los datos de la BD
    getAllReservation : (callback) => {
        let sql = 'SELECT * FROM reservaciones';
        db.query(sql, (error, datas) => {
            if (error) throw error;
            if (datas.length > 0) return callback(datas);
            console.log(num_random);
            return callback(null);
        });
    },
    addReservation : (msg, callback) => {
        let sql = 'INSERT INTO reservaciones SET ?';
        db.query(sql, msg, (err, datas) => {
            if (err) throw err;
            return callback(datas);
        });
    }
};
