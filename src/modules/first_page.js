import image from "../images/restaurant.jpg";

const firstPage = () => {
    
    // -- Create elements --
    const container = document.createElement("div");
    container.classList.add("firstpage");

    const img = new Image();
    img.src = image;
    img.classList.add("firstpage__img");

    const textTitle = document.createElement("p");
    textTitle.innerHTML = "Argentinian steak house";
    textTitle.classList.add("firstpage__text1");

    const textParragraph1 = document.createElement("p");
    textParragraph1.innerHTML = "Welcome to baires, where culinary excellence meets warm hospitality.";
    textParragraph1.classList.add("firstpage__text2");

    const textParragraph2 = document.createElement("p");
    textParragraph2.innerHTML = "Our story is one of passion, dedication, and a commitment to delivering an exceptional dining experience to our cherished guests."
    textParragraph1.classList.add("firstpage__text2");

    // -- Append elements --
    container.appendChild(img);
    container.appendChild(textTitle);
    container.appendChild(textParragraph1);
    container.appendChild(textParragraph2);

    return container;
}


export default firstPage;