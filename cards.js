function switchCards(target) {
  // console.log(window.innerWidth)
  // console.log(window.innerHeight)
  if (window.innerWidth <= 800 && window.innerHeight <= 800) {
    console.log('Mobile detected')
    return
  }

  // console.log(target)
  // console.log(event)
  const allCards = Array.from(document.getElementsByClassName('section3')[0].children)

  // If middle card clicked, do nothing
  if (target.classList.contains('card-middle')) return

  // If left-card clicked, switch with middle one
  if (target.classList.contains('card-left')) {
    // replace class of middle card
    for (let child of allCards) {
      if (child.classList.contains('card-middle')) {
        child.classList.replace('card-middle', 'card-left')
      }
    }
    // replace card class of left card
    target.classList.replace('card-left', 'card-middle')
    return
  }

  // If right-card clicked, switch with middle one
  if (target.classList.contains('card-right')) {
    // replace class of middle card
    for (let child of allCards) {
      if (child.classList.contains('card-middle')) {
        child.classList.replace('card-middle', 'card-right')
      }
    }
    // replace card class of right card
    target.classList.replace('card-right', 'card-middle')
    return
  }
}
