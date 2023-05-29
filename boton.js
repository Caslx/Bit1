
options = ['Oranges','Apples', 'Bananas','Pears'];
index = 0;
palette = ['#f28500','#ff0800','#ffe135','#c4d270'];

let menuEl = document.getElementById('menu');
let nextItem = document.getElementById('next-item');

nextItem.innerText = options[index];
menuEl.style.background = palette[index];

menuEl.onclick = function() {
  index = index < options.length-1?index+1:0;
  nextItem.dataset.next = options[index];

nextItem.innerText = options[index];
menuEl.style.background = palette[index];
  
menuEl.classList.add('anim');
 
setTimeout(() => {
nextItem.innerText = options[index];
menuEl.classList.remove('anim');
    }, 650)};
