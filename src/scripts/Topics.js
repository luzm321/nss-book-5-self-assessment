import { getTopics } from "./dataAccess.js";


export const Topics = () => {
    const topics = getTopics();

    let topicHTML = `${topics.map(topic => {
        return `<input type="checkbox" name="topic" id="${topic.id}" value="topic--${topic.id}--${topic.label}">
        <label for="${topic.id}">${topic.label}</label>`
        }).join("")} 
    `
    
    return topicHTML;
};




                        