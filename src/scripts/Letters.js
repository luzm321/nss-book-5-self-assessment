import { getPals, getTopics, getLetters } from "./dataAccess.js";


export const Letters = () => {
    const pals = getPals();
    const topics = getTopics();
    const letters = getLetters();

    let letterHTML = `${letters.map(letter => {
        const authorOfLetter = pals.find(pal => pal.id === parseInt(letter.authorId));
        const topicOfLetter = topics.find(topic => topic.id === parseInt(letter.topicId));
        const recipientOfLetter = pals.find(pal => pal.id === parseInt(letter.recipientId));

        return `<section class="letter">
            Dear ${recipientOfLetter.name} (${recipientOfLetter.email}),<br><br>
            ${letter.letterBody}<br><br>
            Sincerely, ${authorOfLetter.name} (${authorOfLetter.email})<br><br>
            <div class="timestamp">
                Sent on ${new Date(letter.dateSent).toLocaleDateString()}
            </div>
            <div>
                <button class="topicButton">${topicOfLetter.label}</button>
            </div>
        </section>`}).join("")}
    `

    return letterHTML;
};