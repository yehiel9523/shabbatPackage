import express from 'express';
import { useShabbatCheck, shbbatDateObj } from '../index.mjs';

const app = express();
const PORT = process.env.PORT || 8070;

app.use('/', useShabbatCheck());
app.use('/shabbat', useShabbatCheck(shbbatDateObj));

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send('<h1>It is not shabbat</h1>')
})
app.listen(PORT);