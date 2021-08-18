import express from 'express';
import {useShabbatCheck, shabbatDate} from '../index.js';

const app = express();

app.use(useShabbatCheck());
app.use('/shabbat', useShabbatCheck(shabbatDate));

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.send('<h1>It is not a shabbat today</h1>')
})

app.listen(8070, () => {
    console.log(`server running at port 8070`);
});