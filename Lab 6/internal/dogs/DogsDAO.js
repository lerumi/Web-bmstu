const {DogsRepository} = require('./DogsRepository');

class DogsDAO {
    constructor(id, src, title, description) {
        this.id = id;
        this.src = src;
        this.title = title;
        //this.details = details;
        this.description = description;
    }

    static _validateId(id) {
        const numberId = Number.parseInt(id);
        if (Number.isNaN(numberId)) {
            throw new Error('invalidate id');
        }
    }

    static _validate(dog) {
        if (
            dog.id === undefined ||
            dog.src === undefined ||
            dog.title === undefined ||

            dog.description === undefined
        ) {
            throw new Error('invalidate dog data');
        }

        this._validateId(dog.id);
    }

    static find() {
        const dogs = DogsRepository.read();

        return dogs.map(({id, src, title, description}) => {
            return new this(id, src, title, description);
        });
    }

    static findById(id) {
        this._validateId(id);

        const dogs = DogsRepository.read();
        const dog = dogs.find((s) => s.id === id);

        return new this(dog.id, dog.src, dog.title, dog.description);
    }

    static insert(dog) {
        this._validate(dog);

        const dogs = DogsRepository.read();
        DogsRepository.write([...dogs, dog]);

        return new this(dog.id, dog.src, dog.title, dog.description);
    }

    static delete(id) {
        this._validateId(id);

        const dogs = DogsRepository.read();
        const filteredDogs = dogs.filter((s) => s.id !== id);

        DogsRepository.write(filteredDogs);

        return filteredDogs.map(({id, src, title, description}) => {
            return new this(id, src, title, description);
        });
    }

    toJSON() {
        return {
            id: this.id,
            src: this.src,
            title: this.title,

            description: this.description
        }
    }
}

module.exports = {
    DogsDAO,
}