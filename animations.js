// let options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 1.0
// }

const inViewport = (entries, observer) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('is-inViewport', entry.isIntersecting)
    // entries.target.style.opacity = '1'
  })
}

const Obs = new IntersectionObserver(inViewport)
const obsOptions = {} //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('#grid-title')
console.log(ELs_inViewport)
ELs_inViewport.forEach((EL) => {
  Obs.observe(EL, obsOptions)
})
