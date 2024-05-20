import axios from "axios";

export default class hashtagDummy {

    constructor() {

    }

    async hashtagInit() {
        return axios
        .get(`data/Hashtag/hashtag.json`)
        .then((res) => res.data);
    }
}