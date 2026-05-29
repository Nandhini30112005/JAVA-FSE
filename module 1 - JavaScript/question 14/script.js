$(document).ready(function () {

    // Click event
    $("#registerBtn").click(function () {

        alert("Successfully Registered!");

        // fadeOut effect
        $("#eventCard").fadeOut(1000);

        // fadeIn effect
        $("#eventCard").fadeIn(1000);

    });

    // Benefit of React/Vue
    $("#frameworkBenefit").text(
        "React and Vue provide reusable components, faster UI updates, and better code management."
    );

});
