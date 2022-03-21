import { IP_API } from '../../../config.js';
import { getIPData } from '../helpers.js';

export const state = new Map([
    ['ip address', ''],
    ['location', ''],
    ['timezone', ''],
    ['isp', ''],
    ['latitude', ''],
    ['longitude', '']
]);

const _createURL = function (api = IP_API, ip) {
    return `https://geo.ipify.org/api/v2/country,city?apiKey=${api}${ip ? `&ipAddress=${ip}` : ''}`;
};

export const updateDataFromIP = async function (ip) {
    const data = await getIPData(_createURL(IP_API, ip));
    state.set('ip address', data?.ip);
    state.set('location', `${data?.location.city || `🤷🏻‍♂️'`}, ${data?.location.country || ''} ${data?.location.geonameId || ''}`);
    state.set('timezone', `UTC ${data?.location.timezone}`);
    state.set('isp', data?.isp);
    state.set('latitude', data?.location.lat);
    state.set('longitude', data?.location.lng);
}