

function runTheSite() {
    const button_link = document.getElementById('nav-button');

    button_link.addEventListener("mouseover", function() {
        button_link.style.backgroundColor = "rgb(200, 200, 200)";

    });

    button_link.addEventListener("mouseout", function() {
        button_link.style.backgroundColor = "cornflowerblue";
    });

    const thank_you = document.getElementById("thank-you");

    thank_you.addEventListener("click", function() {
        thank_you.style.backgroundColor = "yellow";
        thank_you.style.color = "black";
    });
}


runTheSite();
