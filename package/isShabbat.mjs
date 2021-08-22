import Hebcal from 'hebcal';

const JERUSALEM_LOCATION = [31.771959, 35.217018];

export function isShabbat(date = new Date(), location = JERUSALEM_LOCATION) {
    const hebrewDate = () => {
        const hebcalDate = new Hebcal.HDate(new Date(date))
        hebcalDate.setLocation(location)

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
    } else if (hebrewDate().havdalah()) {
        if (hebrewDate().havdalah().getTime() > now().getTime()) {
            return true
        } else return false
    } else {
        return false
    }
}