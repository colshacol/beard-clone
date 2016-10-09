
const headers = document.getElementById('headers')
const mascot = document.getElementById('mascot')
const header = document.querySelector('header')
const main = document.querySelector('main')

const headerHeight = header.offsetHeight
const mascotHeight = mascot.offsetHeight

mascot.style.top = (headerHeight / 2) - 50
if (window.scrollY >= 300) { headers.style.opacity = 0 }


let lastPositionX = window.scrollTop; 
window.addEventListener('scroll', (e) => {
  if (window.scrollY >= 425) {
    headers.style.display = 'none'
    return;
  }
  
  if (window.scrollY >= 300) {
    headers.style.display = 'flex'
    headers.style.opacity = 0
  }
  else { headers.style.opacity = 1 }
})

const tableItemPs = document.querySelectorAll('#table .item .right p')
for (let i = 0; i < tableItemPs.length; i++) {
  const p = tableItemPs[i]
  p.innerText = (p.innerText.length >= 140) ?
    p.innerText.substr(0, 137).trim() + '...'
  :
    p.innerText
}