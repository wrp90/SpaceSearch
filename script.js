const APIKey = 'NzX4QtjpAEpf5pgpmAvgpPdsO5ytlTsU';

//API call 
const fetchRequest = () => {
    fetch(`https://api.tomtom.com/search/2/search/pizza.json?key=${APIKey}&lat=37.8085&lon=-122.4239`)
        .then(response => response.json()).then(data => {
            console.log(data)
        })
}

fetchRequest();