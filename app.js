import people from './data.js'

const renderedPeople = people
  .map(person => {
    const { img, name, job, text } = person
    return `<article class="slide">
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

const sliderContainer = document.querySelector('.slider-container')

sliderContainer.innerHTML = renderedPeople
