import people from './data.js'

const sliderContainer = document.querySelector('.slider-container')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

const renderedPeople = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person
    let position = 'next'

    if (slideIndex === 0) {
      position = 'active'
    }

    if (slideIndex === people.length - 1) {
      position = 'prev'
    }

    return `<article class="slide ${position}">
          <img
            src=${img}
            alt=${name}
            class="img"
          />

          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
             ${text}
          </p>

          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>
        </article>`
  })
  .join('')

sliderContainer.innerHTML = renderedPeople

// const startSlider = type => {
//   const active = document.querySelector('.active')
//   const prev = document.querySelector('.prev')

//   let next = active.nextElementSibling
//   if (!next) {
//     next = sliderContainer.firstElementChild
//   }

//   active.classList.remove(['active'])
//   prev.classList.remove(['prev'])
//   next.classList.remove(['next'])

//   if (type === 'prev') {
//     active.classList.add('next')
//     prev.classList.add('active')
//     next = prev.previousElementSibling

//     if (!next) {
//       next = container.lastElementChild
//     }
//     next.classList.remove(['next'])
//     next.classList.add('last')
//     return
//   }

//   // Add active class to the next slide
//   next.classList.add(['active'])
//   active.classList.add(['prev'])
//   prev.classList.add('next')
// }

nextBtn.addEventListener('click', () => {
  startSlider()
})

prevBtn.addEventListener('click', () => {
  startSlider('prev')
})
