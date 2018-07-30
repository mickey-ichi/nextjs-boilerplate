import cookie from "js-cookie";

class Cookies {

    static set(key, value) {
        cookie.set(key, value);
    }

    static remove(key) {
        cookie.remove(key);
    }

    static get(key, request) {
        if (request) {
            return Cookies._getServer(key, request)
        }
        return this._getClient(key)
    }

    static _getClient(key) {
        return cookie.get(key);
    };

    static _getServer(key, request) {
        let cookies = request.cookies;
        if(cookies) {
            return cookies[key];
        }
        return undefined;
    };

}

export default Cookies
