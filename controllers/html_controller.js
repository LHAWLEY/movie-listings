const fs = require('fs');

module.exports = {
  index (req, res) {
    fs.readFile('movie-listings/views/index.html', 'utf8', (err, html) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<div><img src="http://cdn1.thecomeback.com/wp-content/uploads/sites/94/2015/10/Screen-Shot-2015-10-27-at-9.33.30-PM.png"><h1>500 Internal Server Error</h1></div>');
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    });
  }
}
