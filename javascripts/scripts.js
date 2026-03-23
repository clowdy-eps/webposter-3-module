function cursor() {
  let cursor = document.querySelector('.cursor')

  document.addEventListener('mousemove', (event) => {
    cursor.style.top = `${event.pageY}px`
    cursor.style.left = `${event.pageX}px`
  })
}

function changeBlick() {
  let coordX = document.querySelector('.coordX')
  let coordY = document.querySelector('.coordY')
  let sectionWH = document.querySelector('.sectionWH')
  let section = document.querySelector('.changeBlick')

  let img0 = document.querySelector('.blickImg0')
  let img1 = document.querySelector('.blickImg1')
  let img2 = document.querySelector('.blickImg2')
  let img3 = document.querySelector('.blickImg3')

  section.addEventListener('mousemove', (event) => {
    let cursorX = event.pageX
    let cursorY = event.pageY

    coordX.innerText = `cursor X: ${cursorX}`
    coordY.innerText = `cursor Y: ${cursorY}`

    let sectionW = section.getBoundingClientRect().width
    let sectionH = section.getBoundingClientRect().height

    sectionWH.innerText = `section width: ${sectionW}px; section height: ${sectionH}px`

    let halfSectionW = sectionW / 2
    let halfSectionH = sectionH / 2

    if (cursorX < halfSectionW && cursorY < halfSectionH) {
      img0.style.opacity = '1'
    } else {
      img0.style.opacity = '0'
    }
    if (cursorX > halfSectionW && cursorY < halfSectionH) {
      img1.style.opacity = '1'
    } else {
      img1.style.opacity = '0'
    }
    if (cursorX > halfSectionW && cursorY > halfSectionH) {
      img2.style.opacity = '1'
    } else {
      img2.style.opacity = '0'
    }
    if (cursorX < halfSectionW && cursorY > halfSectionH) {
      img3.style.opacity = '1'
    } else {
      img3.style.opacity = '0'
    }
  })
}

function moveProgressBar() {
  let button = document.querySelector('.progressBarButton')
  let progress = document.querySelector('.progressBarLine')
  let number = document.querySelector('.progressBarNumber')
  let isActive = true
  let width = 0

  button.addEventListener('click', () => {
    if (isActive) {
      setInterval(() => {
        progress.style.opacity = 1

        if (width < 100) {
          width++
          progress.style.width = width + '%'
          number.innerText = `${width}%`
        } else {
          isActive = false
        }
      }, 50)
    }
  })
}
