const createContainer = () => {
    const container = document.createElement("div");
    container.classList.add("container");

    return container;
}
const createTitle = (container) => {
    const heading = document.createElement("h1");
    heading.id = "main-title";
    heading.textContent = "Kitten Pic";

    container.append(heading);
    return container;
};

const createPicture = (container, url) => {
    const img = document.createElement("img");
    img.id = "main-img";
    img.src = url;

    container.append(img);
    return container;
};

const getUrl = () => {
    return fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => {
            return data[0].url;
        });
}

async function main() {
    const container = createContainer();
    createTitle(container);
    const url = await getUrl();
    createPicture(container, url);
    document.body.append(container);
};

window.onload = main();
