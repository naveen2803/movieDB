import axios from 'axios';
import Config from '../../constants/config';

class Service {
    serviceInstance = null;

    constructor() {
        this.serviceInstance = null;
    }

    getRestClient(BASE_URL) {
        let base_url = BASE_URL || Config.API_URL;
        let config =
        {
            baseURL: base_url,
            timeout: 900000
        };

        if (this.serviceInstance == null) {
            this.serviceInstance = axios.create(config);
        }
        return this.serviceInstance;
    }
}

export default (new Service());
