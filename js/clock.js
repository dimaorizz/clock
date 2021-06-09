const hours = document.querySelectorAll('.hour');
const secondsArrow = document.querySelector('.seconds-arrow');
const minutesArrow = document.querySelector('.minutes-arrow');
const hoursArrow = document.querySelector('.hours-arrow');
console.log(hours)

hours.forEach((hour, index) => {
  const radius = 230;
  const angle = index * 30 * (Math.PI/180);
  const position = {
    x: radius * Math.sin(angle),
    y: -radius * Math.cos(angle)
  }

  if(hour.innerHTML.length > 1) {
    position.x = position.x - 15;
  }

  console.log()

  console.log(position);
  
  hour.style.transform = `translate(${position.x}px, ${position.y}px)`;
});

const getTime = () => {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  };
}

const moveArrows = () => {
  const time = getTime();
  secondsArrow.style.transform = `rotate(${time.seconds*6+180}deg)`;
  console.log(time);
  minutesArrow.style.transform = `rotate(${(60 * time.minutes + time.seconds) * 0.1 + 180}deg)`;
  hoursArrow.style.transform = `rotate(${(360 * time.hours + 60 * time.minutes + time.seconds) * 0.01 + 180}deg)`;
}

setInterval(moveArrows, 1000);