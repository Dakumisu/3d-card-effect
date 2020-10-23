//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

  card.style.transform = 'rotateY(' + xAxis + 'deg) rotateX(' + yAxis + 'deg)';
});


//Animate In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'all 100ms ease';

  //Popout
  title.style.transform = 'translateZ(150px)';
  sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
  purchase.style.transform = 'translateZ(125px)';
  description.style.transform = 'translateZ(100px)';
  sizes.style.transform = 'translateZ(75px)';
})

//Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 500ms ease';
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';

  //Popback
  title.style.transform = 'translateZ(0)';
  sneaker.style.transform = 'translateZ(0) rotateZ(0)';
  purchase.style.transform = 'translateZ(0)';
  description.style.transform = 'translateZ(0)';
  sizes.style.transform = 'translateZ(0)';
})