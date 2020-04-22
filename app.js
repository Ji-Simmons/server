console.log("Simple Web Server Assignment")

const express = require('express');
const port = 3036;
const appName = 'Simple Express Web Server Assignment';
const app = express();
const server = express();


// Middleware
app.use(middle);

function middle(req, res, next) {
    console.log('Server has received a request. . . ');
    next();
};

app.get('/test', (req, res, next) => {
    res.send('Hey now!');
})

app.use(express.static(`public`));

app.get('/other', (req, res, next) => {
    res.set({
        "Content-Type": "text/html"
    });
    const body = `
        <h1>Other Route!</h1>
        <p>You have requested an HTML response</p>
    `;
    res.send(body);
});

const logger = (req, res, next) => {
    console.log(req.method, req.path);
    next();
}
app.use(logger);
app.use(express.json());


app.get('/', (req, res, next) => {
    res.send('D-U-N done.');
});

// LISTENER

app.listen(port, (err) => {
    if (err) {
        console.log('Error launching app: ', err);
    }
    console.log(`${appName} listening on port ${port}...`);
});