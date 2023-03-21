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
    title: 'lecture',
    message: 'Listen to the speakers from various countries.',
    icon: 'assits/lecture.png',
  },
  {
    title: 'exhibition',
    message: 'Listen to the speakers from various countries.',
    icon: 'assits/exhibition.png',
  },
  {
    title: 'forum',
    message: 'Listen to the speakers from various countries.',
    icon: 'assits/forum.png',
  },
  {
    title: 'workshop',
    message: 'Listen to the speakers from various countries.',
    icon: 'assits/workshop.png',
  },
  {
    title: 'ignite',
    message: 'Listen to the speakers from various countries.',
    icon: 'assits/ignite.png',
  },

];

// Creat main programes
document.querySelector('.program-holder').innerHTML = programs.map((program) => `
    <div class="container p-2 ">
        <div class="d-flex align-items-center program-card p-2">
            <img class= "prog-icon" src=${program.icon} width="50px" height="50px" alt="lecture">
            <h4 class="program-title px-2">${program.title}</h4>
            <span class="px-1 text-white">${program.message}</span>
        </div>
    </div>
`).join('');

const speakers = [
  {
    name: 'Oliver Zipse',
    about: 'Chairman of the Board of Management',
    quote: 'He was Member of the Board of Management of BMW AG, Production',
    image: 'assits/speaker1.jpg',
  },
  {
    name: 'ILKA HORSTMEIER',
    about: 'People and Real Estate, Labour Relations Director',
    quote: 'Member of the Board of Management of BMW AG, People and Real Estate, Labour Relations Director',
    image: 'assits/speaker2.jpg',
  },
  {
    name: 'DR. MILAN NEDELJKOVIĆ',
    about: 'Production',
    quote: 'Member of the Board of Management of BMW AG, Production',
    image: 'assits/speaker3.jpg',
  },
];
// console.log(speakers)
document.querySelector('.speaker-holder').innerHTML = speakers.map((speak) => `
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
</div>`).join('');

// Past summits

const summits = [
  {
    year: '2015',
    message: 'CG Global summit 2015 in Berlin',
    background: 'assits/summit1.jpg',
  },
  {
    year: '2020',
    message: 'CG Global summit 2020 in Dubai',
    background: 'assits/summit2.jpg',
  },
];

// Creat summits html
document.querySelector('.summits-holder').innerHTML = summits.map((summit) => `
    <div class="container p-2 ">
        <div class="d-flex align-items-center program-card p-2">
            <img class= "prog-icon" src=${summit.background} width="50px" height="50px" alt="lecture">
            <h4 class="program-title px-2">${summit.year}</h4>
            <span class="px-1 text-white">${summit.message}</span>
        </div>
    </div>
`).join('');