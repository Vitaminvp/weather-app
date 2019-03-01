import "babel-polyfill";
import axios from 'axios';

import { URL, KEY } from '../data/constants';

export  default class SearchModel{
    constructor(query='London,us'){
        this.query = query;
    }

    async getResults(){
        const url = `${URL}${this.query}&appid=${KEY}`;
        try {
            const res = await axios(url);
            this.result = res.data.list;
        } catch (error) {
            console.warn(error);
        }
    }
}

