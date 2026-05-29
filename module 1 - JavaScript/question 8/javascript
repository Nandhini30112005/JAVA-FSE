// onclick for Register buttons
const buttons = document.querySelectorAll(".registerBtn");

buttons.forEach(button => {
    button.onclick = function () {
        alert("Successfully Registered!");
    };
});

// onchange for category filter
document.getElementById("categoryFilter").onchange = function () {

    const selected = this.value;
    const events = document.querySelectorAll(".event");

    events.forEach(event => {

        if (
            selected === "All" ||
            event.dataset.category === selected
        ) {
            event.style.display = "block";
        } else {
            event.style.display = "none";
        }
    });
};

// keydown for quick search
document.getElementById("searchBox").addEventListener("keydown", function () {

    setTimeout(() => {

        const value = this.value.toLowerCase();
        const events = document.querySelectorAll(".event");

        events.forEach(event => {

            if (
                event.textContent.toLowerCase().includes(value)
            ) {
                event.style.display = "block";
            } else {
                event.style.display = "none";
            }
        });

    }, 100);

});
