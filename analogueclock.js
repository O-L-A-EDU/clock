const secE1 = document.querySelector('.sec');
const minE1 = document.querySelector('.min');
const hourE1 = document.querySelector('.hour');
const clock = document.querySelector('.clock');


for (let i = 0; i < 12; i++) {
  
  const tick = document.createElement('div');
  tick.classList.add('tick');
  tick.style.transform = `rotate(${i * 30}deg)`;
  clock.appendChild(tick);

  
  const number = document.createElement('div');
  number.classList.add('number');
  const angle = i * 30;
  const radius = 160;
  const x = 200 + radius * Math.cos((angle - 90) * Math.PI / 180);
  const y = 200 + radius * Math.sin((angle - 90) * Math.PI / 180);
  number.style.left = `${x}px`;
  number.style.top = `${y}px`;
  number.textContent = (i === 0 ? 12 : i);
  clock.appendChild(number);
}


setInterval(() => {
  const date = new Date();
  const secDeg = (date.getSeconds() / 60) * 360 - 90;
  const minDeg = (date.getMinutes() / 60) * 360 - 90;
  const hourDeg = (date.getHours() / 12) * 360 - 90;

  secE1.style.transform = `rotate(${secDeg}deg)`;
  minE1.style.transform = `rotate(${minDeg}deg)`;
  hourE1.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
