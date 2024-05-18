import axios from "axios";

export default class personalDataDummy {

    constructor() {

    }

    async personalDataInit() {
        return axios
        .get(`data/Mypage/personalData.json`)
        .then((res) => res.data);
    }
}