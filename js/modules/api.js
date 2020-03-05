import {
    renderData
} from "./render.js"

import {
    filterData
} from "./filter.js"

import {
    getInputValueAndSearch
} from "./search.js"

import jsonData from '../../data/data.js'



function getData(isbn) {
    // /*** Fetching data -> refactor into module later ***/
    // const main = document.querySelector('main');
    // const cors = 'https://cors-anywhere.herokuapp.com/';
    // const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    // const query = 'bier';
    // const key = '03b058d877ec4276bb63dd1c6e1f3768';
    // const secret = '31978bcbb4e5eb7239f01c180e2f07b1';
    // // By to many request use this one for secret: cdb8415c172ec6178b63451e222891a6
    // const detail = 'Default';
    // const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

    // const config = {
    //     Authorization: `Bearer ${secret}`
    // };

    // fetch(url, config)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         filterData(data, isbn)
    //             .then(result => {
    //                 renderData(result);
    //             })

    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });


    renderData(filterData(jsonData, isbn));
}

export {
    getData
}