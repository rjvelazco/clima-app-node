const axios = require('axios');
// async
const getLugarLatLng = async(ubicacion) => {
    const localizacion = encodeURI(ubicacion);
    const apiKey = '8f3712c0b3a0c081e03aa1fc6f145a83';

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${localizacion}&appid=${apiKey}`);
    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
    // try {
    //     const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${localizacion}&appid=${apiKey}`);
    //     const data = resp.data;
    //     const direccion = data.name;
    //     const lat = data.coord.lat;
    //     const lng = data.coord.lon;

    //     return {
    //         direccion,
    //         lat,
    //         lng
    //     }
    // } catch (err) {
    //     throw new Error(`No hay resultados para ${ubicacion}`);
    // }

    /**
     * // Con Promesas
     * const resp = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${localizacion}&appid=${apiKey}`);
     * return resp;
     * const resp = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${localizacion}&appid=${apiKey}`);
        return resp.then((resp) => {
            const data = resp.data;
            const direccion = data.name;
            const lat = data.coord.lat;
            const lng = data.coord.lon;

            const localizacion = {
                direccion,
                lat,
                lng
            }
            console.log(localizacion)
        });
     */
}
module.exports = {
    getLugarLatLng
}

/**
    * const instance = axios.create({
            baseURL: 'api.openweathermap.org/data/2.5/weather?q=',
            headers: {'X-RapidAPI-Key': 'Ydamskj123sad091weaCaxcjz23219dLSAjdsaJd'}
        });

        intance.get()
            .then((resp) => console.log(resp))
            .catch((err) => console.log(err));
     */