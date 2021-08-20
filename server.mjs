import Hebcal from 'hebcal';
import express from 'express';
import expressip from 'express-ip'
const app = express();
app.use(expressip().getIpInfoMiddleware);

let location;
export const getUserLocation = (req, res, next) => {
    location = req.ipInfo.ll;
    console.log(location);
    next()
}

export function isShabbat(date = new Date(), city = 'Jerusalem') {
    const hebrewDate = () => {
        const hebcalDate = new Hebcal.HDate(new Date(date))
        if (location)
            hebcalDate.setLocation(location)
        else
            hebcalDate.setCity(city);
        return hebcalDate
    };
    const now = () => new Date(new Date(date));
    if (hebrewDate().candleLighting()) {
        if (hebrewDate().candleLighting().getTime() < now().getTime()) {
            return true
        } else if (hebrewDate().next().candleLighting())
            return true
        else
            return false
    } else
    if (hebrewDate().havdalah()) {
        if (hebrewDate().havdalah().getTime() > now().getTime()) {
            return true
        } else return false
    } else {
        return false
    }
}

export function useShabbatCheck(date = new Date(), city = 'Jerusalem') {
    return (req, res, next) => {
        if (isShabbat(date, city)) {
            res.set('Content-Type', 'text/html');
            res.send(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Shabbat Kodesh</title>
                </head>
                <body>
                    <h1 style="text-align: center;"> !!! שבת קודש</h1>
                    <img style="width: 100%;" 
                        src="https://www.kipa.co.il/userFiles/735-415/296656_373af8629a50ff540978724a33c9d96a.jpg" alt="shabbat kodesh">
                </body>

                </html>`)
        } else {
            next()
        }
    }
}