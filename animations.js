const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    // console.log(entry)
    // console.log(entry.intersectionRatio)
    if (entry.isIntersecting) {
      entry.target.classList.add('is-inViewport')
    }
  })
}

//See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
const obsOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}

const Obs = new IntersectionObserver(inViewport, obsOptions)

// Attach observer to section2 title:
const ELs_inViewport = document.querySelectorAll('.grid-title')
// console.log(ELs_inViewport)
ELs_inViewport.forEach((EL) => {
  Obs.observe(EL)
})

const inViewport2 = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('detail-showing')
    }
  })
}

const Obs2 = new IntersectionObserver(inViewport2, obsOptions)

const ELs_inViewport2 = document.querySelectorAll('.detail')
ELs_inViewport2.forEach((EL) => {
  Obs2.observe(EL)
})
