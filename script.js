const range = document.querySelector("#moodrange");
const div = document.querySelector('.moji');
const mojis = ['😄','🙂','😐','😑','☹️','😩','😠','😡','🤢','😤','💩'].reverse();

range.addEventListener('input', (e) => {
  let rangeValue = e.target.value;
  div.textContent = mojis[rangeValue];
});

const sleep = document.querySelector("#hoursslept");
const hoursSleptRange = document.getElementById("hoursSleptRange");

hoursSleptRange.addEventListener('input', (e) => {
    sleep.textContent = e.target.value + ' h';
})

const ozdrankdiv = document.getElementById("ozdrank");
const waterRange = document.getElementById("waterRange");
waterRange.addEventListener('input', (e) => {
    ozdrankdiv.textContent = e.target.value + ' oz';
})
  