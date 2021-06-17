import { getPals } from "./dataAccess.js";


export const Pals = () => {
    const pals = getPals();

    let palHTML = `<select class="selectPal" id="pals"><option value="">Choose...</option>
        ${pals.map(pal => {
            return `<option value="${pal.id}--${pal.name}">
                ${pal.name}
            </option>`}).join("")
        }
    </select>`

    return palHTML;

    // let palHTML = `${pals.map(pal => {
    //     return `<option value="${pal.id}--${pal.name}">
    //         ${pal.name}
    //     </option>`}).join("")}
    // `

    // return palHTML;
};

