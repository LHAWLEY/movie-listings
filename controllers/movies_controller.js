const https = require('https'),
      url = require('url');

const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=9084eae9f770e006ebcba95dbd474e28';

module.exports = {
  index (req, res) {
    const { query: { page = 1 } } = url.parse(req.url, true);

    https.get(`${API_URL}&page=${page}`, apiResponse => {
      let body = '';
      apiResponse.on('data', chunk => body += chunk);
      apiResponse.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(body);
      });
    }).on('error', err => {
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 502, message: 'Bad gateway' }));
    });
  }
}
