const errorCodes = new Map([
    [200, 'ok'],
    [400, 'Bad request'],
    [401, 'Unauthorised'],
    [403, 'Forbidden'],
    [404, 'Page not found'],
    [405, 'Method not allowed'],
    [408, 'Request timeout'],
    [410, 'Page is no longer availiable'],
    [500, 'Internal server error'],
    [503, 'Service unaviliable - come back later'],
    [511, 'Network authentication required'],
]);

export const getIPData = async function (url) {

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorMsg = errorCodes.get(response.status);
            throw new Error(errorMsg || `Unknown error - status code: (${response.status})`);
        }

        return await response.json();
    } catch (e) {
        throw e;
    }
}