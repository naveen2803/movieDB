import axios from 'axios';
import Config from '../../constants/config';
import service from './service';

class API {

    getSearchAutoSuggest(config) {
        return service.getRestClient(Config.HOME_URL).get('/search/multi', config);
    }

    getSearchItems(config) {
        return service.getRestClient().get('/export/exportCsv', config);
    }

    getMovieDetils(config, id) {
        return service.getRestClient().get(`movie/${id}`, config);
    }

    getPopularMovies(config) {
        return service.getRestClient().get('movie/popular', config);
    }
}

export default API
