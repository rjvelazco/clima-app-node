const axios = require('axios');

const getClima = async(lat, lng) => {
    const apiKey = '8f3712c0b3a0c081e03aa1fc6f145a83';
    const units = 'metric';

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${units}&appid=${apiKey}`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
}