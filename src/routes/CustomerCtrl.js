let service_customer = require('../service/service_customer');

module.exports = {
    create_customer: (req, res) => {
        let prenom = req.body.prenom ? req.body.prenom : null
        let email = req.body.email ? req.body.email : null

        service_customer.new_customer(prenom, email)
            .then((data) => {
                res.json(data);
                console.log(res.status(200))
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send();
            })
    },

    info_employe: (req,res) => {
        service_customer.selection_client()
            .then((data) => {
                res.json(data);
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send();
            })
    },
}