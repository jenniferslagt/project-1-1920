import {
    Routie
} from "../library/routes.js"


export const allSections = document.querySelectorAll('section');

// Adding routes by selecting the buttons and the sections
export const myRouter = routie({
    " ": () => {
        updateUI('main-page');
    },
    ':id': () => {
        updateUI('detail-page');
    },
});



// Making a function which updates the page when a user clicks on a button
export function updateUI(route) {
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.querySelector(`[data-route=${route}]`);
    console.log("Active section:", activeSection);
    activeSection.classList.add('active');
}