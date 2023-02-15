///Grabbing HTML elements for content display
const contentContainer = document.querySelector('.content-container');

///API keys.  SpaceX doesn't require one so we only have the nasa API
const NASAKEY = 'rGj6kPIAJIsi3hNRQdIM2RWEGPfyPg6ge2Eqr32Z';

//Fetch for NASA API.  See: https://api.nasa.gov/
const fetchNASA = () => {
    ///This is fetching a specific 
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASAKEY}`)
        .then(response => response.json()).then(data => {
            console.log('NASA Data:', data);
        })
};

///Fetch for SpaceX API.  See: https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md
const fetchSpaceX = () => {
    fetch(`https://api.spacexdata.com/v3`)
        .then(response => response.json()).then(data => {
            console.log('SpaceX Data:', data);
        })
};


///Calling the functions for testing
fetchNASA();
fetchSpaceX();