function loopAndSetGridImages() {
  const gridItems = Array.from(document.getElementsByClassName('grid-adventures')[0].children)

  let index = 1
  for (item of gridItems) {
    item.style.backgroundImage = `url(./assets/exp${index}.jpg)`
    index++
  }
}

function setFocusImage(hoveredImage) {
  // console.log(hoveredImage.style.backgroundImage)
  const regex = /\.\/assets\/exp[0-9]\.jpg/
  let imagePath = hoveredImage.style.backgroundImage.match(regex)
  // console.log(imagePath)
  const focusDisplay = document.getElementById('focusDisplay')

  focusDisplay.src = imagePath
  document.getElementById('focusTitle').innerHTML = hoveredImage.getAttribute('adventureTitle')

  // const gridItems = Array.from(document.getElementsByClassName('grid-adventures')[0].children)

  // let index = 1
  // for (item of gridItems) {
  //   item.style.backgroundImage = `url(./assets/exp${index}.jpg)`
  //   index++
  // }
}

loopAndSetGridImages()
