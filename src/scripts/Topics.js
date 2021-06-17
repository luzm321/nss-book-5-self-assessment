import { getTopics } from "./dataAccess.js";


export const Topics = () => {
    const topics = getTopics();

    let topicHTML = `${topics.map(topic => {
        return `<input type="checkbox" class="checkboxes" name="topic" id="${topic.id}" value="${topic.id}">
        <label class="checkboxes" for="${topic.id}">${topic.label}</label>`
        }).join("")} 
    `
    
    return topicHTML;
};




                        