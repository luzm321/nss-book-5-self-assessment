import { getTopics } from "./dataAccess.js";
import { setLetterTopic } from "./PenPals.js";

document.addEventListener("change", (event) => {
    if (event.target.name === "topic") {
      const topicId = event.target.value;
      setLetterTopic(parseInt(topicId));
    }
  });

export const Topics = () => {
    const topics = getTopics();

    let topicHTML = `${topics.map(topic => {
        return `<input type="checkbox" class="checkboxes" name="topic" id="${topic.id}" value="${topic.id}">
        <label class="checkboxes" for="${topic.id}">${topic.label}</label>`
        }).join("")} 
    `
    
    return topicHTML;
};




                        