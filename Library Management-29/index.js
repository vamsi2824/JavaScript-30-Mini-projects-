let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let heading = document.getElementById("heading");
let spinner = document.getElementById("spinner");


function create(book) {
    let {
        author,
        imageLink,
        title
    } = book;

    let div = document.createElement("div");
    div.classList.add("main");
    searchResults.appendChild(div);
    let img = document.createElement("img");
    img.src = imageLink;
    div.appendChild(img);
    let p = document.createElement("p");
    p.textContent = author;
    div.appendChild(p);


}


function display(reasult) {
    for (let book of reasult)
        create(book);
}

function findBook(event) {


    searchResults.textContent = "";
    heading.textContent = ""

    if (event.key === "Enter") {
        spinner.classList.remove("d-none");
        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/book-store?title=" + searchInput.value;
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                let {
                    search_results
                } = json;
                spinner.classList.add("d-none");

                if (json.total === 0) {
                    heading.textContent = "No results found";
                } else {
                    heading.textContent = "Popular Books"
                    display(search_results);
                }
            });
    }
}


searchInput.addEventListener("keydown", findBook);