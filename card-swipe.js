let cardMiddle = document.getElementsByClassName('card-middle')[0]
// console.log(cardMiddle)

cardMiddle.addEventListener('touchstart', handleTouchStart, false)
cardMiddle.addEventListener('touchmove', handleTouchMove, false)

var xDown = null
var yDown = null

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ) // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0]
  xDown = firstTouch.clientX
  yDown = firstTouch.clientY
  // console.log(`xDown:${xDown}  yDown:${yDown}`)
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return
  }

  var xUp = evt.touches[0].clientX
  var yUp = evt.touches[0].clientY

  var xDiff = xDown - xUp
  var yDiff = yDown - yUp
  // console.log(`xDiff:${xDiff}`)
  // console.log(`yDiff:${yDiff}`)
  // console.log(evt)

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* right swipe */
      let cardRight = document.getElementsByClassName('card-right')[0]
      // Swapping the classes of middle/left card (which makes them swap places)
      cardRight.classList.replace('card-right', 'card-middle')
      cardMiddle.classList.replace('card-middle', 'card-right')

      // Remove Listeners from old middle card and add them to new middle card
      cardRight.addEventListener('touchstart', handleTouchStart, false)
      cardRight.addEventListener('touchmove', handleTouchMove, false)
      cardMiddle.removeEventListener('touchstart', handleTouchStart, false)
      cardMiddle.removeEventListener('touchmove', handleTouchMove, false)

      cardMiddle = cardRight
    } else {
      /* left swipe */
      let cardLeft = document.getElementsByClassName('card-left')[0]
      // Swapping the classes of middle/right card (which makes them swap places)
      cardLeft.classList.replace('card-left', 'card-middle')
      cardMiddle.classList.replace('card-middle', 'card-left')

      // Remove Listeners from old middle card and add them to new middle card
      cardLeft.addEventListener('touchstart', handleTouchStart, false)
      cardLeft.addEventListener('touchmove', handleTouchMove, false)
      cardMiddle.removeEventListener('touchstart', handleTouchStart, false)
      cardMiddle.removeEventListener('touchmove', handleTouchMove, false)

      cardMiddle = cardLeft
    }
  } else {
    if (yDiff > 0) {
      /* down swipe */
    } else {
      /* up swipe */
    }
  }
  /* reset values */
  xDown = null
  yDown = null
}
