import { fetchPals, fetchTopics, fetchLetters } from "./dataAccess.js";
import { PenPals } from "./PenPals.js";
// console.log("Welcome to the main module");



const mainContainer = document.querySelector("#container");

export const render = () => {
    fetchPals()
    .then(fetchTopics)
    .then(fetchLetters)
    .then(
        () => {
            mainContainer.innerHTML = PenPals();
        }
    );
};

render();

mainContainer.addEventListener("stateChanged", customEvent => {
    render();
});