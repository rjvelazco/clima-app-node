const { argv } = require('./config/yargs');
const ubicacion = require('./ubicacion/ubicacion');
const clima = require('./clima/clima');

// ubicacion.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log);

// clima.getClima(40.71, -74.01)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await ubicacion.getLugarLatLng(direccion);
        const climaZona = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${climaZona}`;
    } catch (err) {
        return `No se pudo deter minar el clima de ${direccion}C`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);