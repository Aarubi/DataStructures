const express = require ('express');
const routes = require ('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3300, () => {
    console.log('Server running at por 3300!');
})