const exress = require('express');
const router = require('./routers')

const app = express();

app.use(express.json());

const PORT = 5000;

app.listen(PORT);