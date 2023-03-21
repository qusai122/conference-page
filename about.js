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
          <div class="d-flex align-items-center summit-card p-2" style= "background-image: url(${summit.background});">
              <h4 class="summit-year px-2">${summit.year}</h4>
              <span class="px-1 summit-message">${summit.message}</span>
          </div>
      </div>
  `).join('');