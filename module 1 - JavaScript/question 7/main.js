const events = [
    {
        name: "Music Festival",
        seats: 10
    },
    {
        name: "Art Workshop",
        seats: 5
    }
];

const container = document.querySelector("#eventContainer");

// Create Cards Dynamically
events.forEach(event => {

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = event.name;

    const seats = document.createElement("p");
    seats.textContent = `Available Seats: ${event.seats}`;

    const button = document.createElement("button");
    button.textContent = "Register";

    // Update UI
    button.addEventListener("click", () => {

        if (event.seats > 0) {
            event.seats--;
            seats.textContent = `Available Seats: ${event.seats}`;
            alert("Registration Successful");
        }
        else {
            alert("No Seats Available");
        }
    });

    card.appendChild(title);
    card.appendChild(seats);
    card.appendChild(button);

    container.appendChild(card);
});
