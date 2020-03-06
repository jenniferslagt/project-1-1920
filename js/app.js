import {
    getData,
    getAllData
} from "./modules/api.js"
import {
    Routie
} from "../library/routes.js"
import {
    getInputValueAndSearch
} from "./modules/search.js"
import {
    changeBackground,
} from "./modules/clickEvents.js"

changeBackground();
getInputValueAndSearch();

const allSections = document.querySelectorAll('section');

// Adding routes by selecting the buttons and the sections
const myRouter = routie({
    ' ': () => {
        updateUI('start-page');
    },
    'main': () => {
        updateUI('main-page');
        getAllData();
    },
    ':id': (id) => {
        updateUI('detail-page');
        getData(id);
    }
});

// Making a function which updates the page when a user clicks on a button
function updateUI(route) {
    const activeSection = document.querySelector(`[data-route=${route}]`);

    allSections.forEach(section => {
        section.classList.remove('active');
    });

    activeSection.classList.add('active');
}