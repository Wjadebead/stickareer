import axios from 'axios';

export default class BoxDataService {

    constructor() {
    }

    async getBoxData() {
        return axios
            .get('data/HomePage/boxData.json')
            .then((res) => res.data);
    }
}
