const {DogsDAO} = require('./DogsDAO');

class DogsService {
    static findDogs(id) {
        if (id !== undefined) {
            return DogsDAO.findById(id).toJSON();
        }

        return DogsDAO.find().map((dog) => dog.toJSON());
    }

    static addDogs(dog) {
        console.log(dog)
        return DogsDAO.insert(dog).toJSON();
    }

    static deleteDogs(id) {
        return DogsDAO.delete(id).map((dog) => dog.toJSON());
    }
}

module.exports = {
    DogsService,
}