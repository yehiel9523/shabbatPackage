import geoip from 'geoip-lite';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import {isShabbat} from "./isShabbat.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const JERUSALEM_LOCATION = [31.771959, 35.217018];

export function shabbatBlockerMiddleware(date = new Date(), defLocation = JERUSALEM_LOCATION) {
    return (req, res, next) => {
        let location = getUserLocation(req) || defLocation;

        if (isShabbat(date, location)) {
            res.set('Content-Type', 'text/html');
            res.sendFile(join(__dirname, '../static/shabbatPage.html'))
        } else {
            next()
        }
    }
}

function getIpInfo(ip) {
    // IPV6 addresses can include IPV4 addresses
    // So req.ip can be '::ffff:86.3.182.58'
    // However geoip-lite returns null for these
    if (ip.includes('::ffff:')) {
        ip = ip.split(':').reverse()[0]
    }
    var lookedUpIP = geoip.lookup(ip);
    if ((ip === '127.0.0.1' || ip === '::1')) {
        return {error: "This won't work on localhost"}
    }
    if (!lookedUpIP) {
        return {error: "Error occured while trying to process the information"}
    }
    return lookedUpIP;
}

function getUserLocation(req) {
    let xForwardedFor = (req.headers['x-forwarded-for'] || '').replace(/:\d+$/, '');
    let ip = xForwardedFor || req.connection.remoteAddress;
    let location = {ip, ...getIpInfo(ip)};

    if (location) {
        return location.ll
    } else {
        return null
    }
}