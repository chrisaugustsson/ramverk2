const sqlite = require("sqlite3");
const db = require("../db/database.js");

exports.get = function (kmom) {
    const result = new Promise((resolve, reject) => {
        db.get("SELECT * FROM reports WHERE name = ?",
            kmom,
            (err, rows) => {
                if (err) {
                    return reject(err);
                }
                return resolve(rows);
            }
        )
    })

    return result;
};

exports.addReport = function (name, content) {
    const result = new Promise((resolve, reject) => {
        db.run("INSERT INTO reports (name, content) VALUES (?, ?)",
            name,
            content,
            (err) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ data: { message: "Reports added" } });
            }
        )
    })

    return result;
};