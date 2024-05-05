import image from "../images/restaurant.jpg";

const homePage = () => {
    
    // -- Create elements --
    const homepage = document.createElement("div");
    homepage.classList.add("homepage");

    const img = new Image();
    img.src = image;
    img.classList.add("homepage__img");

    const textTitle = document.createElement("p");
    textTitle.innerHTML = "Argentinian steak house";
    textTitle.classList.add("homepage__text1");

    const textParragraph1 = document.createElement("p");
    textParragraph1.innerHTML = "Welcome to baires, where culinary excellence meets warm hospitality.";
    textParragraph1.classList.add("homepage__text2");

    const textParragraph2 = document.createElement("p");
    textParragraph2.innerHTML = "Our story is one of passion, dedication, and a commitment to delivering an exceptional dining experience to our cherished guests."
    textParragraph2.classList.add("homepage__text2");

    // -- Append elements --
    homepage.appendChild(img);
    homepage.appendChild(textTitle);
    homepage.appendChild(textParragraph1);
    homepage.appendChild(textParragraph2);

    return homepage;
}

export default homePage;