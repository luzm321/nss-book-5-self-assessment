// import { render } from "./main.js";
// const mainContainer = document.querySelector("#container");

const applicationState = {
    pals: [],
    topics: [],
    letters: [],
    letterTopics: []
};

// FETCH CALL REQUESTS:

const API = "http://localhost:8088";

export const fetchPals = () => {
    return fetch(`${API}/pals`)
        .then(response => response.json())
        .then(
            (palsData) => {
                // Store the external state in application state
                applicationState.pals = palsData
            }
        );
};

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topicsData) => {
                // Store the external state in application state
                applicationState.topics = topicsData
            }
        );
};

//exporting copy of specified object properties of application state:

export const getPals = () => {
    return applicationState.pals.map(pal => ({...pal}));
};

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}));
};

//Fetching HTTP POST request API; the POST fetch call will dispatch the stateChanged custom event after the POST operation
//is completed; every time state changes, you have to generate new HTML representations of the state:

