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
      position = 'last'
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
