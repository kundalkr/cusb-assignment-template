import book_sugget from "/js/src/dynamic-template.json" with {type: "json"};

function asthetic_template_crawler(object) {
    let allbookss = "";
    for (let tempt of object.template) {

        for (let book of tempt.asthetic_template) {
            allbookss += ` <div class="ms-2"><a target="_blank" href="${book.template_link}">
                                    <img loading="lazy" src="${book.template_image}"
                                        alt="${book.image_alt}">
                                </a>
                            </div>`;
        }
    }
    return allbookss;
}
function colourfull_template_crawler(object) {
    let allbookss = "";
    for (let tempt of object.template) {

        for (let book of tempt.colourfull_template) {
            allbookss += ` <div class="ms-2"><a target="_blank" href="${book.template_link}">
                                    <img loading="lazy" src="${book.template_image}"
                                        alt="${book.image_alt}">
                                </a>
                            </div>`;
        }
    }
    return allbookss;
}

let asthe_loader = document.getElementById('asthe');
asthe_loader.addEventListener('click', () => {

    asthe_loader.classList.add("invisible");
    let asthetic_template = document.querySelector("#asthetic-template");
    asthetic_template.insertAdjacentHTML('beforeend', asthetic_template_crawler(book_sugget));
})

let colorf_loader = document.getElementById('colorf');
colorf_loader.addEventListener('click', () => {
    colorf_loader.classList.add("invisible");
    let colourfull_templates = document.querySelector("#colourfull-templates");
    colourfull_templates.insertAdjacentHTML('beforeend', colourfull_template_crawler(book_sugget));
});