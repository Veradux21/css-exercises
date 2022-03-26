//MDN Calendar

const selecta = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

    let days = 31;
    switch(choice){
        case 'February':
            days = '28';
            break;
        case 'April' || 'June' || 'September' || 'November':
            days = '30';
            break;
        default:
            days = 31;
/* Provided solution:
  let days = 31;
  if (choice === 'February') {
    days = 28;
  } else if (choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
    days = 30;
  }*/

}

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');

//MDN Theme Choices. Select renamed due to error
const selectb = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  let bgColor
  let textColor

  switch(choice){
    case 'black':
        update('black','white')
        break;
    case 'purple':
        update('purple','orange')
        break;
    case 'yellow':
        update('tan','brown')
        break;
    case 'psychedelic':
        update('green', 'purple')
        break;
    default:
        update('white','black')
        break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

//TOP Practice
let firstName = "Inigo";
let lastName = "Montoya";
let currentYear = 2022;
let birthYear = 2011;

let greeting = 'Hello, my name is ' + firstName + lastName +  ' You killed my father when I was' +  (currentYear - birthYear) + ' prepare to die.';

console.log(greeting);

