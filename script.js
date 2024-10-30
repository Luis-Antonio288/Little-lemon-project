function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile-photo img")

  if (html.classList.contains("light")) {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Fotos/avatar-light.png")
  } else {
    // se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/Fotos/DeCol.png")
  }
}
