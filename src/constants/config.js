/**
 *   CONFIG DETAILS
 **/

const IMAGE_BASE_URL                            = "http://image.tmdb.org/t/p";
const IMAGE_SECURE_BASE_URL                     = "https://image.tmdb.org/t/p";
const API_KEY                                   = "6ed12e064b90ae1290fa326ce9e790ff";
const API_URL                                   = "https://api.themoviedb.org/3";
const HOME_URL                                  = "https://www.themoviedb.org/";

class Config {
    static get IMAGE_BASE_URL() {
        return IMAGE_BASE_URL;
    }

    static get IMAGE_SECURE_BASE_URL() {
        return IMAGE_SECURE_BASE_URL;
    }

    static get API_KEY() {
        return API_KEY;
    }

    static get API_URL() {
        return API_URL;
    }

    static get HOME_URL() {
        return HOME_URL;
    }
}

export default Config;
