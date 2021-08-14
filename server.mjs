import express from 'express';
import Hebcal from 'hebcal';


// const date = () => new Hebcal.HDate();
// // const now = (date = null) => { return date ? new Date(date) : new Date() }
// const now = () => new Date();

// date().setCity('Jerusalem');
// console.log(date().candleLighting())
// console.log(now().getTime())

export function shabbatChack(req, res, next) {
    const date = () => new Hebcal.HDate(new Date());
    const now = () => new Date();
    date().setCity('Jerusalem');
    if (test || date().candleLighting()) {
        if (test || date().candleLighting().getTime() < now().getTime()) {
            // app.use(express.static('/'))
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

const app = express();
app.use(express.json());
app.use(shabbatChack
    //     (req, res, next) => {
    //     if (date().candleLighting()) {
    //         if (date().candleLighting().getTime() < now().getTime()) {
    //             // app.use(express.static('/'))
    //             res.set('Content-Type', 'text/html');
    //             res.send(`<!DOCTYPE html>
    //             <html lang="en">

    //             <head>
    //                 <meta charset="UTF-8">
    //                 <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //                 <title>Shabbat Kodesh</title>
    //             </head>

    //             <body>
    //                 <h1 style="text-align: center;"> !!! שבת קודש</h1>
    //                 <img style="width: 1500px;" src="https://www.kipa.co.il/userFiles/735-415/296656_373af8629a50ff540978724a33c9d96a.jpg" alt="shabbat kodesh">

    //             </body>

    //             </html>`)
    //         }
    //     } else {
    //         if (date().havdalah()) {
    //             if (date().havdalah().getTime() > now().getTime()) {
    //                 res.set('Content-Type', 'text/html');
    //                 res.send(`<!DOCTYPE html>
    //                 <html lang="en">

    //                 <head>
    //                     <meta charset="UTF-8">
    //                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //                     <title>Shabbat Kodesh</title>
    //                 </head>

    //                 <body>
    //                     <h1 style="text-align: center;"> !!! שבת קודש</h1>
    //                     <img style="width: 1500px;" src="https://www.kipa.co.il/userFiles/735-415/296656_373af8629a50ff540978724a33c9d96a.jpg" alt="shabbat kodesh">

    //                 </body>

    //                 </html>`)

    //             }
    //         } else
    //             next()
    //     }
    // }
);

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')

    res.send('<h1> test</h1>')
})

app.listen(8070);