export let createNewElement = ([elemName, elemClass = null, elemParent, elemContent = null, attributes = {}]) => {
    let newElement = document.createElement(`${elemName}`);
    if (Array.isArray(elemClass)) {
        $(elemClass, className => $(newElement).addClass(`${className}`));
    } else if (typeof elemClass === "string") { $(newElement).addClass(`${elemClass}`); }
    if (elemContent != null) { $(newElement).html(elemContent); }
    if (attributes && typeof attributes === "object") {
        for (const attrKey in attributes) { $(newElement).attr(attrKey, attributes[attrKey]); }
    }
    if (typeof elemParent === "string") {
        let selectedParent = $(elemParent);
        if (selectedParent) {
            $(selectedParent).append(newElement);
        } else { console.log(`Error: Parent element with selector "${elemParent}" not found.`); }
    } else if (elemParent instanceof HTMLElement) {
        $(elemParent).append(newElement);
    } else { console.log("Error: Invalid parent element."); }
    return newElement;
};