d3.json('./data/countries.json')
    .then((data) => {
        d3.select('body')
            .selectAll('h3')
            .data(data.geonames)
            .enter()
            .append('h3')
            .text(d => d.countryName);
    })
    .catch(console.log);

d3.csv('./data/simplemaps-worldcities-basic.csv', function (rawRow) {
    if(+rawRow.pop < 10000) return;
    return {
        cityName: rawRow.city,
        countryCode: rawRow.iso2,
        population: rawRow.pop,
    }
})
    .then((data) => {
        console.log(data);
    })
    .catch(console.log);

// another method d3.text d3.tsv d3.html d3.xml d3.request