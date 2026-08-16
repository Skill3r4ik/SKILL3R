const snow = document.getElementById("snow");

for (let i = 0; i < 80; i++) {
    const flake = document.createElement("div");

    flake.classList.add("snowflake");

    flake.style.left = Math.random() * 100 + "%";
    flake.style.width = Math.random() * 5 + 2 + "px";
    flake.style.height = flake.style.width;

    flake.style.animationDuration =
        Math.random() * 6 + 5 + "s";

    flake.style.animationDelay =
        Math.random() * 8 + "s";

    snow.appendChild(flake);
}