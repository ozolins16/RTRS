const express = require('express');
const port = 8090;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello from the API!'
    });
}