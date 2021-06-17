import { fetchPals, fetchTopics } from "./dataAccess.js";
import { PenPals } from "./PenPals.js";
// console.log("Welcome to the main module");



const mainContainer = document.querySelector("#container");

export const render = () => {
    fetchPals()
    .then(fetchTopics)
    .then(
        () => {
            mainContainer.innerHTML = PenPals();
        }
    );
};

render();

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render();
    }
);