import {isShabbat} from "./isShabbat.mjs";
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function useShabbatCheck(date = new Date(), city = 'Jerusalem') {
    return (req, res, next) => {
        if (isShabbat(date, city)) {
            res.set('Content-Type', 'text/html');
            res.sendFile(join(__dirname, '../static/shabbatPage.html'))
        } else {
            next()
        }
    }
}