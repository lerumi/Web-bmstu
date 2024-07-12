const {DogsService} = require('./DogsService');

class DogsController {
    static findDogs(req, res) {
        try {
            res.send(DogsService.findDogs());
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }

    static findDogsById(req, res) {
        try {
            const id = Number.parseInt(req.params.id);
            res.send(DogsService.findDogs(id))
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }

    static addDog(req, res) {
        try {
            res.send(DogsService.addDogs(req.body));
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }

    static deleteDog(req, res) {
        try {
            const id = Number.parseInt(req.params.id);
            res.send(DogsService.deleteDogs(id));
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }
}

module.exports = {
    DogsController,
};