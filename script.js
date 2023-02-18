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
            contentContainer.innerHTML = '';
            for (i = 0; i < data.length; i++) {
                /// Creating the data elements
                const div = document.createElement('div');
                div.className = 'display-div';
                const id = document.createElement('p');
                const landLandings = document.createElement('p');
                const waterLandings = document.createElement('p');
                const lastUpdates = document.createElement('p');
                const type = document.createElement('p');
                /// Applying the Data
                id.innerText = 'ID:' + ' ' + data[i].id;
                type.innerText = 'Type:' + ' ' + data[i].type;
                landLandings.innerText = 'Land Landings:' + ' ' + data[i].land_landings;
                waterLandings.innerText = 'Water Landings:' + ' ' + data[i].water_landings;
                lastUpdates.innerText = 'Latest Update:' + ' ' + data[i].last_update;
                /// Appending the Data
                div.append(id, type, landLandings, waterLandings, lastUpdates);
                contentContainer.appendChild(div);
            }
        });
};

/// Function to fetch and display Company info data
const fetchCompanyInfo = () => {
    fetch('https://api.spacexdata.com/v4/company')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            /// Creating the elements
            const div = document.createElement('div');
            div.className = 'display-div';
            const companyName = document.createElement('p');
            const ceo = document.createElement('p');
            const cheifTechnologyOfficer = document.createElement('p');
            const ctoPropulsion = document.createElement('p');
            const founded = document.createElement('p');
            const summary = document.createElement('p');
            /// Applying the Data
            companyName.innerText = 'Company Name:' + ' ' + data.name;
            ceo.innerText = 'CEO:' + ' ' + data.ceo;
            cheifTechnologyOfficer.innerText = 'Chief Technology Officer:' + ' ' + data.cto;
            ctoPropulsion.innerText = 'Chief Technology Officer-Propulstion:' + ' ' + data.cto_propulsion;
            founded.innerText = 'Founded:' + ' ' + data.founded;
            summary.innerText = 'Summary:' + ' ' + data.summary;
            /// Appending the data
            div.append(companyName, founded, ceo, cheifTechnologyOfficer, ctoPropulsion, summary);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch and display the cores data
const fetchCores = () => {
    fetch('https://api.spacexdata.com/v4/cores')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            for (i = 0; i < data.length; i++) {
                /// Creating the Elements
                const div = document.createElement('div');
                div.className = 'display-div';
                const id = document.createElement('p');
                const reuse = document.createElement('p');
                const rtlsAttempts = document.createElement('p');
                const rtlsLandings = document.createElement('p');
                const lastUpdate = document.createElement('p');
                /// Applying the Data
                id.innerText = 'ID:' + ' ' + data[i].id;
                reuse.innerText = 'Reuse Count:' + ' ' + data[i].reuse_count;
                rtlsAttempts.innerText = 'Return to Landing Site (Attempts):' + ' ' + data[i].rtls_attempts;
                rtlsLandings.innerText = 'Return to Landing Site (Landings)' + ' ' + data[i].rtls_landings;
                lastUpdate.innerText = 'Last Update:' + ' ' + data[i].last_update;
                /// Appending the Data
                div.append(id, reuse, rtlsAttempts, rtlsLandings, lastUpdate);
                contentContainer.appendChild(div);
            }
        });
};

/// Function to fetch and display the crew data
const fetchCrew = () => {
    fetch('https://api.spacexdata.com/v4/crew')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            for (i = 0; i < data.length; i++) {
                /// Creating the Elements
                const div = document.createElement('div');
                const img = document.createElement('img');
                div.className = 'display-div';
                const id = document.createElement('p');
                const name = document.createElement('p');
                const agency = document.createElement('p');
                const status = document.createElement('p');
                const wiki = document.createElement('p');
                /// Applying the data
                name.innerText = 'Name:' + ' ' + data[i].name;
                agency.innerText = 'Agency:' + ' ' + data[i].agency;
                id.innerText = 'ID:' + data[i].id;
                status.innerText = 'Status:' + ' ' + data[i].status;

                /// Images
                img.src = data[i].image;
                img.classList.add('bio-picture')
                /// Append the data
                div.append(name, agency, status, img);
                contentContainer.appendChild(div);
            }
        });
};

/// Function to fetch and display the dragons data
const fetchDragons = () => {
    fetch('https://api.spacexdata.com/v4/dragons')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            for (i = 0; i < data.length; i++) {
                
                /// Creating the Elements
                const div = document.createElement('div');
                div.className = 'display-div';
                const img = document.createElement('img');
                const name = document.createElement('p');
                const description = document.createElement('p');
                /// Applying the Data
                name.innerText = data[i].name;
                description.innerText = data[i].description;
                /// Images
                img.src = data[i].flickr_images[i];
                img.classList.add('dragon-pictures')
                /// Appending the Data
                div.append(name, description, img)
                contentContainer.appendChild(div);
            }
        });
};

/// Function to bring up landing pad data
const fetchLandingPads = () => {
    fetch('https://api.spacexdata.com/v4/landpads')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            div.className = 'display-div';
            /// Creating the Elements
            const div = document.createElement('div');
            const details = document.createElement('p');
            /// Applying the Data
            details.innerText = data[0].details;
            /// Appending the Data
            div.append(details);
            contentContainer.appendChild(div);
        });
};

/// Function to bring up the launches data
const fetchLaunches = () => {
    fetch('https://api.spacexdata.com/v5/launches')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            div.className = 'display-div';

            /// Creating the Elements
            const div = document.createElement('div');
            const name = document.createElement('p');
            /// Applying the Data
            name.innerText = data[0].name;
            /// Appending the Data
            div.append(name);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch and display Launch pad info
const fetchLaunchPads = () => {
    fetch('https://api.spacexdata.com/v4/launchpads')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'display-div';
            /// Creating the Elements
            const fullName = document.createElement('p');
            /// Applying the Data
            fullName.innerText = data[0].full_name;
            /// Appending the Data
            div.append(fullName);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch and display payload data
const fetchPayLoads = () => {
    fetch('https://api.spacexdata.com/v4/payloads')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'display-div';
            /// Creating the Elements
            const id = document.createElement('p');
            /// Applying the Data
            id.innerText = data[0].id;
            /// Appending the Data
            div.append(id);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch and display rocket data
const fetchRockets = () => {
    fetch('https://api.spacexdata.com/v4/rockets')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            for (i = 0; i < data.length; i++) {
                const div = document.createElement('div');
                div.className = 'display-div';
                /// Creating the Elements
                const id = document.createElement('p');
                const description = document.createElement('p');
                /// Applying the Data
                description.innerText = data[i].description;
                id.innerText = data[i].id;
                /// Appending the Data
                div.append(id, description);
                contentContainer.appendChild(div);
            }
        });
};

/// Function to fetch and display ship data
const fetchShips = () => {
    fetch('https://api.spacexdata.com/v4/ships')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'display-div';
            /// Creating the Elements
            const id = document.createElement('p');
            /// Applying the Data
            id.innerText = data[0].id;
            img.src = data[0].image;
            /// Appending the Data
            div.append(id);
            contentContainer.appendChild(div);
            div.append(img);
        });
};

/// Function to fetch and display all starlink sattelite data
const fetchStarlink = () => {
    fetch('https://api.spacexdata.com/v4/starlink')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'display-div';
            /// Creating the Elements
            const id = document.createElement('p');
            /// Applying the Data
            id.innerText = data[0].id;
            /// Appending the Data
            div.append(id);
            contentContainer.appendChild(div);
        });
};

/// Function to fetch and display SpaceX historical events
const fetchHistory = () => {
    fetch('https://api.spacexdata.com/v4/history')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'display-div';
            /// Creating the Elements
            const details = document.createElement('p');
            /// Applying the Data
            details.innerText = data[0].details;
            /// Appending the Data
            div.append(details);
            contentContainer.appendChild(div);
        });
};

/// Function that handles the input for the input field
const handleInput = () => {
    console.log(searchInput.value);
    /// Converting user input to lower case
    const userInput = searchInput.value.toLowerCase();
    /// Setting the search terms to their respective functions
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
        alert('Invalid Search Term')
    }
    searchInput.value = '';
}

/// Search Button event listener
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    handleInput();
});

/// Input event listener that activates search when pressing enter key
searchInput.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        handleInput();
    }
})