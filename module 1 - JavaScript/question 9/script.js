// Fetch using Promise (.then and .catch)

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log("Event Data:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });


// Async/Await with loading spinner

async function loadEvents() {

    const spinner = document.getElementById("loading");
    spinner.style.display = "block";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error);

    } finally {

        spinner.style.display = "none";
    }
}

loadEvents();
