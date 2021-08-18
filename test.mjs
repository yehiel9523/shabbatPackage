import express from 'express';
import { isShabbat, useShabbatCheck } from './server.mjs';

const app = express();
app.use(useShabbatCheck());
console.log(isShabbat());
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send('<h1> test</h1>')
})

app.listen(8070);