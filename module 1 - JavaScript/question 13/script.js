function submitForm() {

    // Get input value
    const name = document.getElementById("name").value;

    // Log form submission
    console.log("Form Submitted");

    // Breakpoint for debugging
    debugger;

    // Validation
    if (name === "") {

        console.error("Name field is empty");

        alert("Please enter your name");

        return;
    }

    // Fetch API request
    fetch("https://jsonplaceholder.typicode.com/posts", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username: name
        })

    })

    .then(response => response.json())

    .then(data => {

        console.log("Server Response:", data);

        alert("Registration Successful");

    })

    .catch(error => {

        console.log("Error:", error);

    });

}
