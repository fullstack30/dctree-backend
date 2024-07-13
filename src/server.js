
const http = require('node:http');
const fs = require('node:fs');


const homePage = (req, res) => {
    let html = fs.readFileSync(__dirname + '/view/home.html', 'utf8');
    res.setHeader('Content-type', 'text/html');
    res.end(html);
}

const aboutPage = (req, res) => {
    let html = fs.readFileSync(__dirname + '/view/home.html', 'utf8');
    res.setHeader('Content-type', 'text/html');
    res.end('about');
}

const routes = {
    "/": homePage,
    "/about": aboutPage,
}

const server = http.createServer((req, res) => {
    let extension = req.url.split('.').pop();
    
    if(extension.includes('css') || extension.includes('js')){
        let file = fs.readFileSync(__dirname + req.url, 'utf8');
        res.setHeader('Content-type', `text/${extension}`);
        return res.end(file);
    }

    if(routes[req.url]){
        let controller = routes[req.url]
        return controller(req, res);
    } else {
        res.statusCode = 404;
        res.end('404 Page not found');
    }
});

server.listen(1234);
