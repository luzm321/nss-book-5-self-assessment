import { getPals, getTopics, getLetters, getLetterTopics } from "./dataAccess.js";



export const Letters = () => {
    const pals = getPals();
    const topics = getTopics();
    const letters = getLetters();
    const letterTopics = getLetterTopics();

    let letterHTML = `${letters.map(letter => {
        const authorOfLetter = pals.find(pal => pal.id === parseInt(letter.authorId));
        const recipientOfLetter = pals.find(pal => pal.id === parseInt(letter.recipientId));

        return `<section class="letter">
            Dear ${recipientOfLetter.name} (${recipientOfLetter.email}),<br><br>
            ${letter.letterBody}<br><br>
            Sincerely, ${authorOfLetter.name} (${authorOfLetter.email})<br><br>
            <div class="timestamp">
                Sent on ${new Date(letter.dateSent).toLocaleDateString()}
            </div>

            ${letterTopics.map(letterTopic => {
                    if (letterTopic.letterId === letter.id) {
                        let topicFound = topics.find(topic => topic.id === letterTopic.topicId);
                        // console.log('topics found', topicFound); 
                           return `<div class="topics_button">
                            <button class="topicButton">${topicFound.label}</button>
                            </div>`
                    }
            }).join("")
            }
        </section>`}).join("")}
    `
                
    return letterHTML;
           
};


// in reference to line 28:
// loop through all the topics that are related to letters in the letterTopics section of the database
// if the topic's letter id matches the actual letterId then go through the topics and find the topic which id matches the topic that has a
// letterId from the letterTopic section of the database.






// export const Letters = () => {
//     const pals = getPals();
//     const topics = getTopics();
//     const letters = getLetters();

//     // let lettersArraySorted = letters.sort((a,b) => {
//     //     return parseInt(a.dateSent.split("-").join("")) - parseInt(b.dateSent.split("-").join(""));
//     // });

//     let letterHTML = `${letters.map(letter => {
//         const authorOfLetter = pals.find(pal => pal.id === parseInt(letter.authorId));
//         const topicOfLetter = topics.find(topic => topic.id === parseInt(letter.topicId));
//         const recipientOfLetter = pals.find(pal => pal.id === parseInt(letter.recipientId));

//         return `<section class="letter">
//             Dear ${recipientOfLetter.name} (${recipientOfLetter.email}),<br><br>
//             ${letter.letterBody}<br><br>
//             Sincerely, ${authorOfLetter.name} (${authorOfLetter.email})<br><br>
//             <div class="timestamp">
//                 Sent on ${new Date(letter.dateSent).toLocaleDateString()}
//             </div>
//             <div>
//                 <button class="topicButton">${topicOfLetter.label}</button>
//             </div>
//         </section>`}).join("")}
//     `

//     return letterHTML;
// };

