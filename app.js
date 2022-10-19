const http = require('http');
const mysql = require('mysql');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'gnpark',
      password : 'gnpark',
      database : 'study'
    });

    connection.connect();

    var reqUrl = req.url;   // 클라이언트로부터 요청이 온 urlStr
    var parsedUrl = url.parse(reqUrl, true);  // 요청받은 urlStr -> urlObj로 변환

    var pathname = parsedUrl.pathname;
    var qeuryString = parsedUrl.query;

    console.log(pathname, qeuryString);

    if (pathname === '/login') {

        const params = [];
        params.push(qeuryString.email);
        params.push(qeuryString.password);

        connection.query('SELECT * from user where email = ? and password = ?', params, (error, rows, fields) => {
            if (error) throw error;

            console.log('User info is: ', rows);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            var result = JSON.stringify(rows);

            res.end(result);
        });
    }

    else if (pathname === '/join') {

        connection.query('SELECT * from user', (error, rows, fields) => {
            if (error) throw error;

            console.log('User info is: ', rows);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                            'fields : ' + JSON.stringify(fields);
            res.end(result);
        });
    }

    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    }

    connection.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});