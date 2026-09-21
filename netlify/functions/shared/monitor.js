const axios = require('axios');

function sendMetric(name, value) {
  return axios.post('https://api.datadoghq.com/api/v1/series', {
    series: [{
      metric: name,
      points: [[Date.now() / 1000, value]],
      type: 'gauge',
      tags: ['env:production']
    }]
  }, {
    headers: {
      'DD-API-KEY': process.env.DATADOG_API_KEY,
      'Content-Type': 'application/json'
    }
  });
}

module.exports = { sendMetric };
