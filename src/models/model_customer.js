const client = require('../config/database');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    insert_customer : (prenom, email) => {
        return new Promise((resolve, reject) => {
            client.query({
                text : 'insert into customer (id, prenom, email) VALUES ($1, $2, $3) RETURNING id',
                values : [uuidv4(), prenom, email]
            })
                .then((response) => {
                    resolve(response.rows);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
    select_customer : () => {
        return new Promise((resolve, reject) => {
            client.query({
                text : "select * from customer"
            })
                .then((response) => {
                    resolve(response.rows);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
}