document.getElementById("registerForm")
.addEventListener("submit", function (event) {

    event.preventDefault();

    const form = event.target;

    const name = form.elements["username"].value;
    const email = form.elements["email"].value;
    const selectedEvent = form.elements["event"].value;

    if (name === "" || email === "" || selectedEvent === "") {

        document.getElementById("error").innerText =
            "All fields are required";

    } else {

        document.getElementById("error").innerText =
            "Registration Successful";

        console.log(name, email, selectedEvent);
    }

});
