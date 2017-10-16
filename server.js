const http = require('http'),
      url = require('url'),
      htmlController = require('/movie-listings/controllers/html_controller'),
      moviesController = require('/movie-listings/controllers/movies_controller'),
      searchController = require('/movie-listings/controllers/search_controller');


const server = http.createServer((req, res) => {
  const { method } = req;
  const { pathname } = url.parse(req.url, true);

  if (method === 'GET' && pathname === '/') {
    htmlController.index(req, res);
  } else if (method === 'GET' && pathname === '/movies') {
    moviesController.index(req, res);
  } else if (method === 'GET' && pathname === '/search') {
    searchController.index(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 404, message: 'Resource not found.' }));
  }
});

console.log('Listening on localhost:8080...');
server.listen(8080);
