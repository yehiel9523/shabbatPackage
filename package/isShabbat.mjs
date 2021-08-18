import Hebcal from 'hebcal';

export function isShabbat(date = new Date(), city = 'Jerusalem') {
    const HebrewDate = () => {
        const hebcalDate = new Hebcal.HDate(new Date(date))
        hebcalDate.setCity(city);
        return hebcalDate
    };
    const now = () => new Date(date);
    if (HebrewDate().candleLighting()) {
        if (HebrewDate().candleLighting().getTime() < now().getTime()) {
            return true
        } else if (HebrewDate().next().candleLighting())
            return true
        else
            return false
    } else if (HebrewDate().havdalah()) {
        if (HebrewDate().havdalah().getTime() > now().getTime()) {
            return true
        } else return false
    } else {
        return false
    }
}