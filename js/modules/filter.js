// Used filter for detail section

// LET OP DATA EN JSONDATA
export function filterData(data, isbn) {

    if (isbn) {
        const result = data.results.filter(object => {
            return object.isbn[0] === isbn
        })

        console.log("de zijn details", result)
        const detailSection = document.getElementById("detail-section");

        result.map((item => {
            const html = `
                        
                          <h2>${item.titles[0]}</h2>
                              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                              <ul>
                            <li>Genre: ${item.genres}</li>
                            <li>Auteur: ${item.authors[0]}</li>
                            <li>Jaar: ${item.year}</li>
                            <li>ISBN: ${item.isbn[0]}</li>
                            </ul>
                            <a href="">doei</a>
                    `;
            detailSection.insertAdjacentHTML('beforeend', html);
            // detailSection.classList.add('active');
        }));
    } else {
        return data
    }
}