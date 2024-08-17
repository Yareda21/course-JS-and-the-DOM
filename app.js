document.addEventListener("click", function () {
    console.log("you've clicked the document");
});

document.addEventListener("click", function () {
    // select the element
    const mainHeading = document.querySelector("h1");

    // change its background color to red
    mainHeading.style.backgroundColor = "red";
});

// create a new div element
const myCustomDiv = document.createElement("div");

for (let i = 1; i <= 200; i++) {
    // create a new paragraph element
    const newElement = document.createElement("p");

    // add text to the paragraph
    newElement.textContent = "This is paragraph number " + i;

    // register an event listener to the paragraph element
    newElement.addEventListener("click", function respondToTheClick(evt) {
        console.log("A paragraph was clicked.");
    });

    // append the paragraph to the new div element
    myCustomDiv.appendChild(newElement);
}

// append the new div element to the page
document.body.appendChild(myCustomDiv);

// favorite buttons
const ndList = document.querySelectorAll(".card--nanodegree__title");
ndList.forEach(function (nd) {
    const button = document.createElement("button");
    button.textContent = "Add to Favorites";
    button.classList = "button button--primary";
    nd.appendChild(button);
});

function toggleFavorite(event) {
    const target = event.target;
    if (target.nodeName === "BUTTON") {
        event.preventDefault();
        if (target.textContent.startsWith("Add")) {
            event.target.textContent = "Remove from favorites";
            const fav = document.createElement("p");
            fav.textContent = "⭐ ⭐ ⭐ ";
            target.parentElement.appendChild(fav);
        } else {
            event.target.textContent = "Add to favorites";
            target.nextSibling.remove();
        }
    }
}

const ndsContainer = document.querySelector(".list-nanodegrees");
ndsContainer.addEventListener("click", toggleFavorite);
