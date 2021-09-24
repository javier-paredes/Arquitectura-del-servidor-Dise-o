class FactoryPersistencias {

    constructor() { }

    getPersistencia(tipo) {
        try {
            let modulo = require(`./persistencia/${tipo}`);
            return modulo
        } catch (error) {
            console.log(`No se encontro el tipo de persistencia: ${tipo}`);
        }
    }
}

module.exports = new FactoryPersistencias();