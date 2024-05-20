import axios from "axios";

export default class informationDummy {

    constructor() {

    }

    async informationInit() {
        return axios
        .get(`data/Information/information.json`)
        .then((res) => res.data);
    }
}