function contactPage() {
    // -- Content of lists --
    const listAddress = [
        "Some Street 234",
        "12345 City",
        "Country"
    ]
    const listPhone = [
        "+123 456 7890"

    ]
    const listEmail = [
        "aninvented@emailadress.com"
    ]

    // -- Create Elements --
    // indentation: level 1
    const contact = document.createElement("div");
    contact.classList.add("page");

    // indentation: level 2
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("page__container");

    // indentation: from here level 3
    const contactTitle = document.createElement("h2");
    contactTitle.classList.add("page__title");
    contactTitle.innerHTML = "CONTACT";

    const contactAddress = document.createElement("h3");
    contactAddress.classList.add("page__subtitle");
    contactAddress.innerHTML = "Address";

    const contactPhone = document.createElement("h3");
    contactPhone.classList.add("page__subtitle");
    contactPhone.innerHTML = "Phone";
    
    const contactEmail = document.createElement("h3");
    contactEmail.classList.add("page__subtitle");
    contactEmail.innerHTML = "e-Mail";

    // -- Append elements (and also create list elements) --
    contact.appendChild(contactContainer);

    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contactAddress);
    contactContainer.append(makeListHtml(listAddress));
    contactContainer.appendChild(contactPhone);
    contactContainer.append(makeListHtml(listPhone));
    contactContainer.appendChild(contactEmail);
    contactContainer.append(makeListHtml(listEmail));

    return contact;
}


function makeListHtml(list) {
    const ul = document.createElement("ul");
    for (let i of list) {
        let element = document.createElement("li");
        element.innerHTML = i;
        ul.appendChild(element)
    }
    return ul;
}

export default contactPage;
