import { Pals } from "./Pals.js";
import { Topics } from "./Topics.js";
import { Letters } from "./Letters.js";
import { addLetterTopics, getLetters, sendLetter } from "./dataAccess.js";


export const PenPals = () => {
    return `
        <div>
            <h1>Pen Pal Society</h1>
            <img class="gif" src="../images/penpal.png" alt="pen pal gif">
        </div>

        <section class="fields">
            <label class="label" for="selectAuthor">Author:</label>
            <select class="selectPal" id="selectAuthor"><option value="">Choose...</option>
                ${Pals()}
            </select>
        </section>

        <section class="fields">
            <label class="label" for="letterContent">Letter:</label>
            <textarea name="letterContent" id="letterContent" columns="15" rows="10"></textarea>
        </section>

        <section id="topics" class="field">
            <p>Topics:</p>
                ${Topics()}
        </section>

        <section class="fields">
            <label class="label" for="selectRecipient">Recipient:</label>
            <select class="selectPal" id="selectRecipient"><option value="">Choose...</option>
                ${Pals()}
            </select>
        </section>
    
        <button id="sendLetter" class="submitLetter">Send Letter</button>
    
        <section class="sentLetters">
            <h2>Letters:</h2>
                ${Letters()}
        </section>
    `
};

let topicState = {topics: []};

export const setLetterTopic = (id) => {
    // This conditional ensures there are no duplicate topics
    if(topicState.topics.includes(id)) {
        // This line of code takes care of deleting the id when the checkbox is unchecked
        // It creates a whole new array without the topic de-select
        // In other words return through the filter all the ids that do not equal the id was just passed to this function
        // and create a new array of only the topics chosen.
      topicState.topics = topicState.topics.filter(topicId => topicId !== id)
    } else {
        // If the id isn't already in the topics array then it adds it.
      topicState.topics.push(id)
    }
};


const mainContainer = document.querySelector("#container");

mainContainer.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "sendLetter") {
            const authorId = document.querySelector("#selectAuthor").value;
            const recipientId = document.querySelector("#selectRecipient").value;
            const letterBody = document.querySelector("#letterContent").value;
            // getLetters fxn is invoked to obtain the new letters that are added accordingly.
            let letters = getLetters();
            const lastIndex = letters.length - 1
            // Loop through the topics from topicState that the user has already selected
            for ( const topicId of topicState.topics ) {
                // Create an object that contains the letter id and the topic id
                const newLetterTopic = {
                    // because the letter has not been posted yet, the letter id is still unknown, so it needs to be calculated here
                    letterId: letters.length - 1 >= 0 ? letters[lastIndex].id + 1 : 1,
                    topicId: topicId
                }
                // for each topic selected, an object is posted to the database that has the relationship of the topic to the letter.
                addLetterTopics(newLetterTopic);
            }
            let letterData = {
                authorId: parseInt(authorId),
                recipientId: parseInt(recipientId),
                letterBody: letterBody,
                dateSent: new Date().toLocaleDateString(),
            }
            // After all the topics have been posted that have this specific letter's id, the state of topics in topicState needs to be reset, so that
            // the next letter can start fresh with no topics.
            topicState.topics = [];
            sendLetter(letterData);    
        };
    }
);