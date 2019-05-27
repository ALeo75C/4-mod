let path  = document.querySelector('.divs')

const ds = document.querySelectorAll('.divs2')
const dArray = Array.from(ds)


document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {
    let a = Math.floor(window.pageYOffset)
    if (a > 600) {
      document.body.style.background = '#CBF3F0'
    } else {
      document.body.style.background   = '#FFFFFF'
    }
    if (a > 1800) {
      document.body.style.background = '#FFBF69'
    }
    if (a > 2900) {
      document.body.style.background = '#FFFFFF'
    }
    if (a > 4200) {
      document.body.style.background = '#FFBF69'
    }
    if (a > 5500) {
      document.body.style.background = '#CBF3F0'
    }
    if (a > 6300) {
      document.body.style.background = '#FFFFFF'
    }
  }
  for (let i = 0; i < 15; i++) {
    let newDiv = document.createElement('div')
    document.querySelector('.divs').appendChild(newDiv).setAttribute('id', 'div' + i)
  }
  for (var j = 0; j < dArray.length; j++) {
    for (let i = 0; i < 5; i++) {
      let newDiv = document.createElement('div')
      dArray[j].appendChild(newDiv).setAttribute('class', 'div2' + j + i)
    }
  }
  style()
  let bot = document.querySelector('.bot')
  bot.onclick = function() {
    bot.classList.toggle('hov')
    document.querySelector('nav').classList.toggle('vue')
  }
})

function style() {
  for (let i = 0; i < 15; i++) {
    let e = document.querySelector('#div' + i)
    e.setAttribute('style', 'z-index: -1; position: absolute; background-color: ' + chengeColor() + '; border-radius: 500px; width: ' + width() + 'px; height: ' + height() + 'px; top:' + pos() + 'vh; left:' + pos() + 'vw; margin: 15vh 15vw 0 0; transform: rotate(-30deg); opacity:' + Math.random() + '; animation: jump' + animate() + ' ' + Math.floor(Math.random() * 10 + 5) + 's linear infinite;')
  }
  for (var j = 0; j < dArray.length; j++) {
    for (let i = 0; i < 5; i++) {
      let e = document.querySelector('.div2' + j + i)
      e.setAttribute('style', 'z-index: -5; position: absolute; background-color: ' + chengeColor() + '; border-radius: 500px; width: ' + Math.floor(Math.random() * 400 + 100) + 'px; height: ' + height() + 'px; top:' + Math.floor(Math.random() * 5 + Math.floor(Math.random() * 10)) + 'vh; left:' + Math.floor(Math.random() + Math.floor(Math.random() * 10)) + 'vw; margin: 15vh 15vw 0 0; transform: rotate(-30deg); opacity:' + Math.random() + '; animation: jump' + animate() + ' ' + Math.floor(Math.random() * 10 + 10) + 's linear infinite;')
    }
  }
}
function pos() {
  return Math.floor(Math.random() * 50 + 10)
}

function width() {
  return Math.floor(Math.random() * 600 + 200)
}

function height() {
  return Math.floor(Math.random() * 80 + 20)
}

function chengeColor() {
  let c0 = '#FE9000'
  let c1 = '#FFBF69'
  let c2 = '#CBF3F0'
  let c3 = '#2EC4B6'
  let f = Math.floor(Math.random() * 3)
  if (f === 0) {
    return c0
  } else if (f === 1) {
    return c1
  } else if (f === 2) {
    return c2
  } else if (f === 3) {
    return c3
  }
}

function animate() {
  let a = Math.floor(Math.random() * 2)
  if (a === 0) {
    return 'Up'
  } else if (a === 1) {
    return 'Down'
  } else {
    animate()
  }
}
