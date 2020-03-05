import jsonData from '../../data/data.js'

export function renderData(data) {
  // Adding the books to the main section
  const mainSection = document.getElementById('main-section')
  const allBooks = data.results

  function aFunction() {
    alert("dit is afunction")
  }
  allBooks.map((item => {
    const AddReadBooks = `
              <article>
              <div class='image'>
              <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
              }">
              </div>
              <div class='info'>
                <h2>${item.titles[0]}</h2>
                <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                <a class='bekijkbutton' href="#${item.isbn[0]}">&#x21e6;</a>
                <a class='save-button'>❤</a>
                <div>
              </article>
            `;


    mainSection.insertAdjacentHTML('beforeend', AddReadBooks)
  }))
}