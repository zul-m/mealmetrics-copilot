// create a server with express and make the default port 8080

const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.listen(port, () => {
    console.log('Server is running on port 8080')
}
)