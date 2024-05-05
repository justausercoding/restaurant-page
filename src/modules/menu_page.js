function menuPage() {
    console.log("running menuPage()")

    // -- Content of lists --
    const listEntradas = [
        "Picada",
        "Berenjenas Asadas",
        "Empanadas Caseras",
        "Provoleta"
    ]
    const listEspecialidades = [
        "Churrasquito",
        "Milanesa a la Napolitana",
        "Choripan",
        "Lomito"
    ]
    const listPostres = [
        "Panqueques con Dulce de Leche",
        "Flan casero con Dulche de Leche",
        "Bomba de Chocolate"
    ]
    const listBebidas = [
        "Agua mineral",
        "Cola",
        "Fanta",
        "Sprite",
        "Quilmes"
    ]

    // -- Create Elements --
    // indentation: level 1
    const menupage = document.createElement("div");
    menupage.classList.add("menupage");

    // indentation: level 2
    const menupageContainer = document.createElement("div");
    menupageContainer.classList.add("menupage__container");

    // indentation: from here level 3
    const menupageTitle = document.createElement("h2");
    menupageTitle.classList.add("menupage__title");
    menupageTitle.innerHTML = "MENU";

    const menupageEntradas = document.createElement("h3");
    menupageEntradas.classList.add("menupage__subtitle");
    menupageEntradas.innerHTML = "Entradas";

    const menupageEspecialidades = document.createElement("h3");
    menupageEspecialidades.classList.add("menupage__subtitle");
    menupageEspecialidades.innerHTML = "Especialidades Argentinas";

    const menupagePostres = document.createElement("h3");
    menupagePostres.classList.add("menupage__subtitle");
    menupagePostres.innerHTML = "Postres";

    const menupageBebidas = document.createElement("h3");
    menupageBebidas.classList.add("menupage__subtitle");
    menupageBebidas.innerHTML = "Bebidas";

    // -- Append elements (and also create list elements) --
    menupage.appendChild(menupageContainer);
    
    menupageContainer.appendChild(menupageTitle);
    menupageContainer.appendChild(menupageEntradas);
    menupageContainer.append(makeListHtml(listEntradas));
    menupageContainer.appendChild(menupageEspecialidades);
    menupageContainer.append(makeListHtml(listEspecialidades));
    menupageContainer.appendChild(menupagePostres);
    menupageContainer.append(makeListHtml(listPostres));
    menupageContainer.appendChild(menupageBebidas);
    menupageContainer.append(makeListHtml(listBebidas));

    return menupage;
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

export default menuPage;