import {
    Routie
} from "../library/routes.js"


const allSections = document.querySelectorAll('section');

// Adding routes by selecting the buttons and the sections
const myRouter = routie({
    main: () => {
        updateUI('main-page');
    },
    ':isbn': () => {
        updateUI('detail-page');
    },
});



// Making a function which updates the page when a user clicks on a button
function updateUI(route) {
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.querySelector(`[data-route=${route}]`);
    console.log("Active section:", activeSection);
    activeSection.classList.add('active');
}