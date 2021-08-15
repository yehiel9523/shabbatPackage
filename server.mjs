// import express from 'express';
import Hebcal from 'hebcal';

export function shabbatChack(test = false, city = 'Jerusalem') {
    if (test)
        return (req, res, next) => {
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
                    <img style="width: 1500px;" src="https://www.kipa.co.il/userFiles/735-415/296656_373af8629a50ff540978724a33c9d96a.jpg" alt="shabbat kodesh">
    
                </body>
    
                </html>`)
        }
    else {
        return (req, res, next) => {
            const date = () => {
                const hebcalDate = new Hebcal.HDate(new Date())
                hebcalDate.setCity(city);
                return hebcalDate
            };
            const now = () => new Date();
            if (date().candleLighting()) {
                if (date().candleLighting().getTime() < now().getTime()) {
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
                    <img style="width: 1500px;" src="https://www.kipa.co.il/userFiles/735-415/296656_373af8629a50ff540978724a33c9d96a.jpg" alt="shabbat kodesh">
    
                </body>
    
                </html>`)
                } else next()
            } else
            if (date().havdalah()) {
                if (date().havdalah().getTime() > now().getTime()) {
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
                        <img style="width: 1500px;" src="https://www.kipa.co.il/userFiles/735-415/296656_373af8629a50ff540978724a33c9d96a.jpg" alt="shabbat kodesh">
    
                    </body>
    
                    </html>`)

                } else next()
            } else {
                next()
            }

        }
    }
}

// for testing the function

// const app = express();
// app.use(shabbatChack);

// app.get('/', (req, res) => {
//     res.set('Content-Type', 'text/html')
//     res.send('<h1> test</h1>')
// })

// app.listen(8070);