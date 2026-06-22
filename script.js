document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

document.querySelector("form").addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    this.reset();

});



const roles = [
    "Web Designer",
    // "YouTuber",
    "Frontend Developer",
    "Backend Developer",
    // "Blockchain Developer"
];

let index = 0;
const changingText = document.getElementById("changing-text");

function changeRole() {
    changingText.textContent = roles[index];
    index = (index + 1) % roles.length;
}

// Show first role immediately
changeRole();

// Change every 2 seconds
setInterval(changeRole, 2000);

