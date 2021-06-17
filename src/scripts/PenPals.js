import { Pals } from "./Pals.js";
import { Topics } from "./Topics.js";
// import { Letters } from "./Letters.js";


export const PenPals = () => {
    return `
        <div>
            <h1>Pen Pal Society</h1>
            <img class="" src="" alt="">
        </div>

        <section class="fields">
            <label class="label" for="selectAuthor">Author:</label>
                ${Pals()}
        </section>

        <section class="fields">
            <label class="label" for="letterContent">Letter:</label>
            <textarea name="letterContent" id="letterContent" columns="15" rows="15"></textarea>
        </section>

        <section class="fields">
            <p>Topics:</p>
                ${Topics()}
        </section>

        <section class="fields">
            <label class="label" for="selectRecipient">Recipient:</label>
                ${Pals()}
        </section>
    
        <button id="sendLetter" class="submitLetter">Send Letter</button>
    
        <section class="sentLetters">
            <h2>Letters:</h2>
        
        </section>
    `
};