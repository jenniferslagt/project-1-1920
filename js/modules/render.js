export function renderData(data) {
  // Adding the books to the main section
  const mainSection = document.getElementById('main-section')
  console.log('daaaataaaaaa', data)
  // const allBooks = "";

  // if (data.results) {
  //   allBooks = data.results
  // } else {
  // }

  function aFunction() {
    alert("dit is afunction")
  }

  data.map((item => {
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
                <a class='bekijkbutton' href="#${item.id}">&#x21e6;</a>
                <a class='save-button'>❤</a>
                <div>
              </article>
            `;


    mainSection.insertAdjacentHTML('beforeend', AddReadBooks)
  }))
}
export function renderDetails(data) {
  // Adding the books to the main section
  const detailSection = document.getElementById('detail-section')
  console.log('daaaataaaaaa', data)
  // const allBooks = "";

  // if (data.results) {
  //   allBooks = data.results
  // } else {
  // }

  function aFunction() {
    alert("dit is afunction")
  }

  data.map((item => {
    const AddReadBook = `
              <h2>${item.titles[0]}</h2>
                              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                              <ul>
                            <li>Genre: ${item.genres}</li>
                            <li>Auteur: ${item.authors[0]}</li>
                            <li>Jaar: ${item.year}</li>
                            <li>ISBN: ${item.isbn[0]}</li>
                            <a class='bekijkbutton' href="#main"> x</a>
                <a class='save-button'>❤</a>
                            </ul>
            `;


    detailSection.insertAdjacentHTML('beforeend', AddReadBook)
  }))
}