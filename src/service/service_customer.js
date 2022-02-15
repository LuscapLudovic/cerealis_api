const model_customer = require('../models/model_customer');

module.exports = {
    new_customer : (prenom, email) => {
        return new Promise((resolve, reject) => {
            model_customer.insert_customer(prenom, email)
                .then((data) => {
                    resolve(data[0]);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },

    selection_client : () => {
        return new Promise((resolve, reject) => {
            model_customer.select_customer()
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
}