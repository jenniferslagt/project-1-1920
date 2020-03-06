// Used filter for detail section

// LET OP DATA EN JSONDATA
export function filterData(data, id) {
    const detailSection = document.getElementById("detail-section");
    console.log('helloooooo', data)
    const result = data.filter(object => {
        return object.id == id
    })
    return result
}