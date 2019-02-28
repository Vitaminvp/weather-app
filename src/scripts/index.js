import "babel-polyfill";
import axios from 'axios';

import { URL, KEY } from '../constants';

async function getResults(query){
    const url = `${URL}${KEY}`;
    const result = await axios(url);
    console.log("result", result.data.list);
}

// function getResults(query){
//     const url = `${URL}${KEY}`;
//     fetch(url)
//         .then(data => data.json())
//         .then(data => console.log(data.data.list))
// }

getResults();

console.log("ok~!");

