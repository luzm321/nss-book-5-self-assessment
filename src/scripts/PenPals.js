import { Pals } from "./Pals.js";
import { Topics } from "./Topics.js";
import { Letters } from "./Letters.js";
import { sendLetter } from "./dataAccess.js";


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


const mainContainer = document.querySelector("#container");

mainContainer.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "sendLetter") {
            const authorId = document.querySelector("#selectAuthor").value;
            const recipientId = document.querySelector("#selectRecipient").value;
            const letterBody = document.querySelector("#letterContent").value;
            const checkedTopic = document.querySelector("input[name='topic']:checked");
            const topicId = checkedTopic.value;

            
            const letterData = {
                authorId: parseInt(authorId),
                recipientId: parseInt(recipientId),
                letterBody: letterBody,
                topicId: parseInt(topicId),
                dateSent: new Date().toLocaleDateString(),
            }

             sendLetter(letterData);
        };
    }
);