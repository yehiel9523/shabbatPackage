import express from 'express';
import { isShabbat, useShabbatCheck, getUserLocation, useExpressip } from './server.mjs';

const app = express();
useExpressip()
app.use(getUserLocation)
app.use(useShabbatCheck());
console.log(isShabbat())
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send('<h1> test</h1>')
})
const port = process.env.PORT || 8070;
app.listen(port);