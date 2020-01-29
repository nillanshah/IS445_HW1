const pics = []
let counter = 0

pics.push('imgs/kitty_basket.JPG')
pics.push('imgs/kitty_bed.JPG')
pics.push('imgs/kitty_door.JPG')
pics.push('imgs/kitty_laptop.JPG')
pics.push('imgs/kitty_sink.JPG')
pics.push('imgs/kitty_wall.JPG')

const button = document.querySelector('button')
const img = document.querySelector('img')

button.addEventListener('click', function(){

  if (counter === pics.length){
    counter = 0
  }
  img.src = pics[counter]
  counter += 1  
})