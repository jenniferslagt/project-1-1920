import jsonData from '../../data/data.js'

const jsonDataResults = jsonData.results;
const filterOnSearch = getInputValueAndSearch(jsonDataResults);

// Make function which gets the input and filters on the data
export function getInputValueAndSearch(theData) {
    document.querySelector("button").addEventListener("click", function () {
        const inputForm = document.querySelector('input').value;
        if (inputForm) {
            const result = theData.filter(object => {
                return object.titles[0] === inputForm
            })
            // console.log(result);
            const filteredSection = document.getElementById("filtered-section");
            document.getElementById('main-section').classList.remove('active');

            result.map((item => {
                const html = `
                          <article>
                            <div class='image'> <img src="${
                                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                              }"> </div>
                              <div class='info'> 
                              <h2>${item.titles[0]}</h2>
                                  <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                                  <a id='bekijkbutton' href="#${item.id}">&#x21e6;</a>
                              </div>
                          </article>
                        `;
                filteredSection.insertAdjacentHTML('beforeend', html);
                filteredSection.classList.add('active');
            }));
        } else {
            alert("Geen resultaten")
        }
    });
}