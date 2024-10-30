let footer = document.querySelector(".footerText");
let year = new Date().getFullYear()
footer.innerHTML = `&copy; Codesty Games | <span>${year}</span>`
console.log(footer)