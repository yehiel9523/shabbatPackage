import express from 'express';
import { isShabbat, useShabbatCheck, getUserLocation, location } from './server.mjs';

const app = express();
app.use(getUserLocation)
app.use(useShabbatCheck());
console.log(isShabbat())
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send('<h1> test</h1>')
})
const port = process.env.PORT || 8070;
app.listen(port);