import axios from "axios";

export default class communityDummy {

    constructor() {

    }

    async communityInit() {
        return axios
        .get(`/data/Community/community.json`)
        .then((res) => res.data);
    }
}