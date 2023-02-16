/// Grabbing HTML elements for content display
const contentContainer = document.querySelector('.content-container');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.input');

/// HTML Generator elements 
const div = document.createElement('div');

/// API keys.  SpaceX doesn't require one so we only have the nasa API Key
const NASAKEY = 'rGj6kPIAJIsi3hNRQdIM2RWEGPfyPg6ge2Eqr32Z';

/// Fetch for NASA API.  See: https://api.nasa.gov/
const fetchNASA = () => {
    /// This is fetching a specific object
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASAKEY}`)
        .then(response => response.json()).then(data => {
            console.log('NASA Data:', data);
        })
};

/// Fetch for SpaceX API.  See: https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md
/// Also See: https://docs.spacexdata.com/
const fetchSpaceX = () => {
    fetch(`https://api.spacexdata.com/v3`)
        .then(response => response.json()).then(data => {
            console.log('SpaceX Data:', data);
        })
};

/// Function to catch the capsules data from the api for SpaceX
const fetchCapsules = () => {
    fetch('https://api.spacexdata.com/v4/capsules')
        .then(response => response.json()).then(data => {
            console.log(data)
            const id = document.createElement('p');
            id.innerText = data[0].id;
            div.append(id);
            contentContainer.appendChild(div);
        })
}


/// Calling the functions for testing
fetchNASA();
fetchSpaceX();


/// Search input listener to grab the user input
searchInput.addEventListener('input', e => {
    const value = e.target.value
    console.log(value)
})

/// Search Button event listener
searchButton.addEventListener('click', () => {
   
})