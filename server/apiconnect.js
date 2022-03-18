const axios = require('axios');
const { token } = require('../apiconfig.js');

//how to get around api that sends back circular object data structures and add parsed to get requrest in index.js
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

const getParkDescription = (parkCode) => {
  return axios.get(`https://developer.nps.gov/api/v1/parks?api_key=${token}&parkCode=${parkCode}`)
  .then(description => {
    let filter = JSON.stringify(description, getCircularReplacer())
    return filter
  })
  .catch(err => {
    console.log(err);
  })
}

module.exports = {
  getParkDescription: getParkDescription
}