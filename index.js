function ReadElement(selector) {
  return document.querySelector(selector);
}
const menu = ReadElement('#menu-icon');
const closeNav = ReadElement('.close-button');
const choose = ReadElement('.mobile-nav');
const nav = ReadElement('.mobile-nav');
const hello = ReadElement('#hello-dic');

function Add() {
  nav.classList.add('nav-toggle');
  document.body.classList.add('stop-scrolling');
  hello.classList.add('transparent');
}
function AddMenu(selected) {
  return selected.addEventListener('click', Add);
}
function Remove() {
  nav.classList.remove('nav-toggle');
  document.body.classList.remove('stop-scrolling');
  hello.classList.remove('transparent');
}
function RemoveMenu(selected) {
  return selected.addEventListener('click', Remove);
}
AddMenu(menu);
RemoveMenu(closeNav);
RemoveMenu(choose);
// programe data


const programs = [
    {
        title: 'BMW M3',
        message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
        icon: 'assits/second-car.jpg'
    },
    {
        title: 'BMW M4',
        message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
        icon: 'assits/second-car.jpg'
    },
    {
        title: 'BMW M5',
        message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
        icon: 'assits/second-car.jpg'
    },
    {
        title: 'ALL NEW M8',
        message: 'Listen to the speakers from various countries about the messeges of sharing and opening.',
        icon: 'assits/second-car.jpg'
    },

]


//Creat main programes
document.querySelector('.program-holder').innerHTML = programs.map((program) => `
    <div class="container p-2 ">
        <div class="d-flex align-items-center program-card p-2">
            <img src=${program.icon} width="55" height="55" alt="lecture">
            <h4 class="program-title px-2">${program.title}</h4>
            <span class="px-1 text-white">${program.message}</span>
        </div>
    </div>
`).join('');


const speakers = [
    {
        name: 'Oliver Zipse',
        about: 'Chairman of the Board of Management',
        quote: '',
        image: 'assits/speaker1.jpg'
    },
    {
        name: 'ILKA HORSTMEIER',
        about: 'People and Real Estate, Labour Relations Director',
        quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
        image: 'assits/speaker2.jpg'
    },
    {
        name: 'DR. MILAN NEDELJKOVIĆ',
        about: 'Production',
        quote: 'Benkler studies commons-based peer production, and published his serminal book The Wealth in 2006.',
        image: 'assits/speaker3.jpg'
    },
]
// console.log(speakers)
document.querySelector('.speaker-holder').innerHTML =  speakers.map( speak => `
<div class="container speaker-card mt-4">
<div class="image-holder">
    <img class = "speaker-img" src=${speak.image} width="120" height="90%" alt="speaker 1">
</div>
<div class="speaker-info pl-4">
    <h4 class="speaker-name">${speak.name}</h4>
    <i class="speaker-about">${speak.about}</i>
    <hr class="line-breaker">
    <p class="speaker-quote">${speak.quote}</p>
</div>
</div>`).join('')
