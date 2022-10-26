const http = require('http');
const mysql = require('mysql');
const url = require('url');
const cors = require('cors');

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

    if (pathname === '/login') {

        const params = [];
        params.push(qeuryString.email);
        params.push(qeuryString.password);

        connection.query('SELECT * from user where email = ? and password = ?', params, (error, rows, fields) => {
            if (error) throw error;

            console.log('User info is: ', rows);

            res.statusCode = 200;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
            res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
            res.setHeader('Content-Type', 'text/plain');

            var result = JSON.stringify(rows);

            res.end(result);
        });
    }

    else if (pathname === '/join') {

        const params = [];
        params.push(qeuryString.email);
        params.push(qeuryString.name);
        params.push(qeuryString.password);

        connection.query('INSERT INTO user (email, name, password) VALUES (?, ?, ?)', params, (error, rows, fields) => {
            if (error) throw error;

            console.log('User info is: ', rows);

            res.statusCode = 200;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
            res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
            res.setHeader('Content-Type', 'text/plain');
            var result = JSON.stringify(rows);

            res.end(result);
        });
    }

    else {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
        res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    }

    connection.end();
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});