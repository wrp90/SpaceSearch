/// Grabbing HTML elements for content display
const contentContainer = document.querySelector('.content-container');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.input');

/// HTML Generator elements 
const div = document.createElement('div');
const img = document.createElement('img');

/// API keys.  SpaceX doesn't require one so we only have the nasa API Key
const NASAKEY = 'rGj6kPIAJIsi3hNRQdIM2RWEGPfyPg6ge2Eqr32Z';

/// Fetch for NASA API.  See: https://api.nasa.gov/
const fetchNASA = () => {
    /// This is fetching a specific object
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASAKEY}`)
        .then(response => response.json()).then(data => {
            console.log('NASA Data:', data);
        });
};

/// Fetch for SpaceX API.  See: https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md
/// Also See: https://docs.spacexdata.com/
const fetchSpaceX = () => {
    fetch(`https://api.spacexdata.com/v3`)
        .then(response => response.json()).then(data => {
            console.log('SpaceX Data:', data);
        });
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
        });
};

/// Function to fetch Company info data
const fetchCompanyInfo = () => {
    fetch('https://api.spacexdata.com/v4/company')
        .then(response => response.json()).then(data => {
            console.log(data)

            const companyName = document.createElement('p');

            companyName.innerText = data.name;

            div.append(companyName);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch the cores data
const fetchCores = () => {
    fetch('https://api.spacexdata.com/v4/cores')
        .then(response => response.json()).then(data => {
            console.log(data)

            const id = document.createElement('p');

            id.innerText = data[0].id;

            div.append(id);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch the crew data
const fetchCrew = () => {
    fetch('https://api.spacexdata.com/v4/crew')
        .then(response => response.json()).then(data => {
            console.log(data);

            const id = document.createElement('p');

            id.innerText = data[0].id;
            img.src = data[0].image;

            div.append(id);
            contentContainer.appendChild(div);
            div.append(img);
        });
};

/// Function to fetch the dragons data
const fetchDragons = () => {
    fetch('https://api.spacexdata.com/v4/dragons')
        .then(response => response.json()).then(data => {
            console.log(data);

            const description = document.createElement('p');

            description.innerText = data[0].description;

            div.append(description)
            contentContainer.appendChild(div);
        });
};

/// Function to bring up landing pad data
const fetchLandingPads = () => {
    fetch('https://api.spacexdata.com/v4/landpads')
        .then(response => response.json()).then(data => {
            console.log(data);    

            const details = document.createElement('p');

            details.innerText = data[0].details;

            div.append(details);
            contentContainer.appendChild(div);
        });
};

/// Function to bring up the launches data
const fetchLaunches = () => {
    fetch('https://api.spacexdata.com/v5/launches')
        .then(response => response.json()).then(data => {
            console.log(data);    

            const name = document.createElement('p');

            name.innerText = data[0].name;

            div.append(name);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch Launch pad info
const fetchLaunchPads = () => {
    fetch('https://api.spacexdata.com/v4/launchpads')
        .then(response => response.json()).then(data => {
            console.log(data);   

            const fullName = document.createElement('p');

            fullName.innerText = data[0].full_name;

            div.append(fullName);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch payload data
const fetchPayLoads = () => {
    fetch('https://api.spacexdata.com/v4/payloads')
        .then(response => response.json()).then(data => {
            console.log(data);   

            const id = document.createElement('p');

            id.innerText = data[0].id;

            div.append(id);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch rocket data
const fetchRockets = () => {
    fetch('https://api.spacexdata.com/v4/rockets')
        .then(response => response.json()).then(data => {
            console.log(data);   

            const id = document.createElement('p');

            id.innerText = data[0].id;

            div.append(id);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch ship data
const fetchShips = () => {
    fetch('https://api.spacexdata.com/v4/ships')
        .then(response => response.json()).then(data => {
            console.log(data);

            const id = document.createElement('p');

            id.innerText = data[0].id;
            img.src = data[0].image;

            div.append(id);
            contentContainer.appendChild(div);
            div.append(img);
        });
};

/// Function to fetch all starlink sattelite data
const fetchStarlink = () => {
    fetch('https://api.spacexdata.com/v4/starlink')
        .then(response => response.json()).then(data => {
            console.log(data);

            const id = document.createElement('p');

            id.innerText = data[0].id;

            div.append(id);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch SpaceX historical events
const fetchHistory = () => {
    fetch('https://api.spacexdata.com/v4/history')
        .then(response => response.json()).then(data => {
            console.log(data);

            const details = document.createElement('p');

            details.innerText = data[0].details;

            div.append(details);
            contentContainer.appendChild(div);
        });
};

/// Calling the functions for testing
// fetchNASA();
// fetchSpaceX();


/// Search Button event listener
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(searchInput.value);
    if (searchInput.value == 'Capsules') {
        fetchCapsules();
    } else if (searchInput.value == 'Company info') {
        fetchCompanyInfo();
    } else if (searchInput.value == 'Cores') {
        fetchCores();
    } else if (searchInput.value == 'Crew') {
        fetchCrew();
    } else if (searchInput.value == 'Dragons') {
        fetchDragons();
    } else if (searchInput.value == 'Landing pads') {
        fetchLandingPads();
    } else if (searchInput.value == 'Launches') {
        fetchLaunches();
    } else if (searchInput.value == 'Launch pads') {
        fetchLaunchPads()
    } else if (searchInput.value == 'Payloads') {
        fetchPayLoads();
    } else if (searchInput.value == 'Rockets') {
        fetchRockets();
    } else if (searchInput.value == 'Ships') {
        fetchShips();
    } else if (searchInput.value == 'Starlink') {
        fetchStarlink();
    } else if (searchInput.value == 'History') {
        fetchHistory();
    } else {
        alert('Please enter a valid search term')
    }
});