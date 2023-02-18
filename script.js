/// Grabbing HTML elements for content display
const contentContainer = document.querySelector('.content-container');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.input');

/// HTML Generator elements 
const img = document.createElement('img');
const div = document.createElement('div');

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
            div.innerHTML = '';
            for (i = 0; i < data.length; i++) {
                const div = document.createElement('div');
                div.className = 'display-div';
                const id = document.createElement('p');
                const landLandings = document.createElement('p');
                const waterLandings = document.createElement('p');
                const lastUpdates = document.createElement('p');
                const type = document.createElement('p');

                id.innerText = 'ID:' + ' ' + data[i].id;
                type.innerText = 'Type:' + ' ' + data[i].type;
                landLandings.innerText = 'Land Landings:' + ' ' + data[i].land_landings;
                waterLandings.innerText = 'Water Landings:' + ' ' + data[i].water_landings;
                lastUpdates.innerText = 'Latest Update:' + ' ' + data[i].last_update;


                div.append(id, type, landLandings, waterLandings, lastUpdates);
                contentContainer.appendChild(div);
            }
        });
};

/// Function to fetch Company info data
const fetchCompanyInfo = () => {
    fetch('https://api.spacexdata.com/v4/company')
        .then(response => response.json()).then(data => {
            console.log(data)

            const companyName = document.createElement('p');

            companyName.innerText = data.name;
            div.innerHTML = '';

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
            div.innerHTML = '';

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
            div.innerHTML = '';

            img.classList.add('bio-picture')

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
            div.innerHTML = '';

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
            div.innerHTML = '';

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
            div.innerHTML = '';

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
            div.innerHTML = '';

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
            div.innerHTML = '';

            div.append(id);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch rocket data
const fetchRockets = () => {
    fetch('https://api.spacexdata.com/v4/rockets')
        .then(response => response.json()).then(data => {
            console.log(data);
            div.innerHTML = '';
            for (i = 0; i < data.length; i++) {
                const id = document.createElement('p');
                const description = document.createElement('p');

                description.innerText = data[i].description;
                id.innerText = data[i].id;

                div.append(id, description);
                contentContainer.appendChild(div);
            }
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
            div.innerHTML = '';

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
            div.innerHTML = '';

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
            div.innerHTML = '';

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
    const userInput = searchInput.value.toLowerCase();
    if (userInput == 'capsules') {
        fetchCapsules();
    } else if (userInput == 'company info') {
        fetchCompanyInfo();
    } else if (userInput == 'cores') {
        fetchCores();
    } else if (userInput == 'crew') {
        fetchCrew();
    } else if (userInput == 'dragons') {
        fetchDragons();
    } else if (userInput == 'landing pads') {
        fetchLandingPads();
    } else if (userInput == 'launches') {
        fetchLaunches();
    } else if (userInput == 'launch pads') {
        fetchLaunchPads()
    } else if (userInput == 'payloads') {
        fetchPayLoads();
    } else if (userInput == 'rockets') {
        fetchRockets();
    } else if (userInput == 'ships') {
        fetchShips();
    } else if (userInput == 'starlink') {
        fetchStarlink();
    } else if (userInput == 'history') {
        fetchHistory();
    } else {
        alert('Please enter a valid search term')
    }
    searchInput.value = '';
});