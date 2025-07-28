// Add your code to this file

let body = document.querySelector("body")
body.style.backgroundColor = "darkblue"

let h1 = document.querySelector("h1")
h1.style.textDecoration = "underline"

let h2 = document.querySelector("h2")
h2.innerHTML = "Here are Pokemon's incredible Gen 1 Starters!"

let individual_names = document.querySelectorAll(".pokemon_names")
let individual_pokemon = document.querySelectorAll("img")

for (let i = 0; i < individual_names.length; i++) {
    individual_names[i].style.color = "yellow"
    individual_names[i].innerHTML += "!"
}

for (let i = 0; i < individual_pokemon.length; i++) {
    individual_pokemon[i].style.border = "dotted yellow"
}

let footer = document.querySelector("footer")
footer.innerHTML = "All Star Code - DOM Project"
footer.style.textDecoration = "underline overline"