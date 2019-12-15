const connection = require("./connection");

const orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) cb(err, null);
            cb(null, JSON.stringify(data, undefined, 2));
        });
    },
    selectAllBy: function (condition, value, cb) {
        const sqlQuery = `SELECT * FROM burgers WHERE ${condition} = ${value}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },
    // insertOne: function (burgerName, cb) {
    insertOne: function (value, cb) {
        console.log("inserOne ", value)
        const burgerName = value["burger_name"];
        const is_favorite = value["is_favorite"];
        // const sqlQuery = `INSERT INTO burgers(burger_name) VALUES('${burgerName}')`;
        const sqlQuery = `INSERT INTO burgers(burger_name , is_favorite) VALUES('${burgerName}','${is_favorite}')`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    updateOne: function (condition, id, cb) {
        const sqlQuery = `UPDATE burgers SET is_favorite = ${condition} WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    },

    deleteOne: function (id, cb) {
        const sqlQuery = `DELETE FROM burgers WHERE id = ${id}`;
        connection.query(sqlQuery, function (err, data) {
            if (err) cb(err, null);
            cb(null, data)
        });
    }
};

module.exports = orm;
