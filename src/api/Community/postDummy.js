import axios from "axios";

export default class postDummy {

    constructor() {

    }

    async postInit(postno) {
        return axios
        .get(`/data/Community/dummypost.json`)
        .then((res) => res.data);
    }
}