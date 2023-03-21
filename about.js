
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