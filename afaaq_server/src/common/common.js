
function search(data, query, keys) {
    return data.filter((item) => 
        keys.some((key) => item[key].toLowerCase().includes(query))
    )
}

module.exports = {
    search
}