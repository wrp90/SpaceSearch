/// Grabbing HTML elements for content display
const contentContainer = document.querySelector('.content-container');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.input');

/// HTML Generator elements 
const img = document.createElement('img');
const div = document.createElement('div');

/*An array containing all the country names in the world:*/
var searchTerms = ['capsules', 'company info', 'cores', 'crew', 'dragons', 'landing pads', 'launches', 'launch pads', 'mars photos', 'payloads', 'picture of the day', 'rockets', 'ships', 'starlink', 'history']

/// API keys.  SpaceX doesn't require one so we only have the nasa API Key
const NASAKEY = 'rGj6kPIAJIsi3hNRQdIM2RWEGPfyPg6ge2Eqr32Z';

/// Fetches for NASA API.  See: https://api.nasa.gov/
const imgOfTheDay = () => {
    /// This is fetching a specific object
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASAKEY}`)
        .then(response => response.json()).then(data => {
            /// Clearing content container
            contentContainer.innerHTML = '';
            console.log('NASA Data:', data);
            /// Creating HTML elements
            const div = document.createElement('p');
            const img = document.createElement('img');
            /// Setting the img source
            img.src = data.url;
            img.classList.add('pic-of-the-day')
            /// Appending the content
            div.append(img);
            contentContainer.appendChild(div);
        });
};

/// Mars images from the NASA API
const marsImgs = () => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${NASAKEY}`)
        .then(response => response.json()).then(data => {
            console.log('NASA Data:', data);
            contentContainer.innerHTML = '';
            /// Looping through the pictures array
            for (i = 0; i < data.photos.length; i++) {
                /// Creating HTML elements
                const div = document.createElement('div');
                const img = document.createElement('img');
                /// Setting the img source
                img.src = data.photos[i].img_src;
                img.classList.add('mars-imgs');
                div.classList.add('mars-div');
                /// Appending the content
                div.append(img);
                contentContainer.appendChild(div);
            }
        });
};

/// These are all fetches for the SpaceX API
/// *******************************************

/// Function to catch the capsules data from the api for SpaceX
const fetchCapsules = () => {
    fetch('https://api.spacexdata.com/v4/capsules')
        .then(response => response.json()).then(data => {
            console.log(data)
            contentContainer.innerHTML = '';
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                /// Creating the HTML elements
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
            /// Creating the HTML elements
            const div = document.createElement('div');
            div.className = 'display-div-company-info';
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
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                /// Creating the HTML elements
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
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                /// Creating the HTML elements
                const div = document.createElement('div');
                const img = document.createElement('img');
                div.className = 'display-div';
                const id = document.createElement('p');
                const name = document.createElement('p');
                const agency = document.createElement('p');
                const status = document.createElement('p');

                /// Make the image clickable to link to Wikipedia
                const wiki = document.createElement('a');
                wiki.href = data[i].wikipedia;
                wiki.setAttribute('target', '_blank');
                /// Applying the data
                name.innerText = 'Name:' + ' ' + data[i].name;
                agency.innerText = 'Agency:' + ' ' + data[i].agency;
                id.innerText = 'ID:' + data[i].id;
                status.innerText = 'Status:' + ' ' + data[i].status;
                /// Images
                img.src = data[i].image;
                img.setAttribute('title','Visit Wiki Link on Click');
                img.classList.add('bio-picture');

                wiki.appendChild(img);
                /// Append the data
                div.append(name, agency, status,wiki);
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
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {

                /// Creating the HTML elements
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
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                /// Creating the HTML elements
                const div = document.createElement('div');
                div.className = 'display-div';
                const img = document.createElement('img');
                const details = document.createElement('p');
                const name = document.createElement('p');
                const landingAttempts = document.createElement('p');
                const landingSuccesses = document.createElement('p');
                /// Applying the Data
                details.innerText = 'Details:' + ' ' + data[i].details;
                name.innerText = 'Name:' + ' ' + data[i].full_name;
                landingAttempts.innerText = 'Landing Attempts:' + ' ' + data[i].landing_attempts;
                landingSuccesses.innerText = 'Landing Successes:' + ' ' + data[i].landing_successes;
                /// Images
                img.src = data[i].images.large[0];
                img.classList.add('landing-pad-imgs')
                /// Appending the Data
                div.append(name, landingAttempts, landingSuccesses, details, img);
                contentContainer.appendChild(div);
            }
        });
};

/// Function to bring up the launches data
const fetchLaunches = () => {
    fetch('https://api.spacexdata.com/v5/launches')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                /// Creating the HTML elements
                const div = document.createElement('div');
                div.className = 'display-div';
                const name = document.createElement('p');
                const details = document.createElement('p');
                const success = document.createElement('p');
                const date = document.createElement('p');
                const jsDate = new Date(data[i].date_local).toString().substring(4, 15)
                /// Applying the Data
                name.innerText = 'Name:' + ' ' + data[i].name;
                success.innerText = 'Success:' + ' ' + data[i].success;
                date.innerText = 'Date:' + ' ' + jsDate;
                details.innerText = data[i].details ? 'Details:' + ' ' + data[i].details : 'Details: No information given';
                /// Appending the Data
                div.append(name, date, success, details);
                contentContainer.appendChild(div);
            }
        });
};

/// Function to fetch and display Launch pad info
const fetchLaunchPads = () => {
    fetch('https://api.spacexdata.com/v4/launchpads')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                /// Creating the HTML elements
                const div = document.createElement('div');
                div.className = 'display-div';
                const img = document.createElement('img');
                const fullName = document.createElement('p');
                const details = document.createElement('p');
                const region = document.createElement('p');
                const status = document.createElement('p');
                /// Applying the Data
                fullName.innerText = 'Name:' + ' ' + data[i].name;
                details.innerText = 'Details:' + ' ' + data[i].details;
                region.innerText = 'Region:' + ' ' + data[i].region;
                status.innerText = 'Operation Status:' + ' ' + data[i].status;
                /// Images
                img.src = data[i].images.large;
                img.classList.add('launch-pad-imgs')
                /// Appending the Data
                div.append(fullName, region, status, details, img);
                contentContainer.appendChild(div);
            }
        });
};

/// Function to fetch and display payload data
const fetchPayLoads = () => {
    fetch('https://api.spacexdata.com/v4/payloads')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                /// Creating the HTML elements
                const div = document.createElement('div');
                div.className = 'display-div';
                const id = document.createElement('p');
                const name = document.createElement('p');
                const orbit = document.createElement('p');
                const regime = document.createElement('p');
                const reused = document.createElement('p');
                const lifespan = document.createElement('p');
                const type = document.createElement('p');
                /// Applying the Data
                name.innerText = 'Name:' + ' ' + data[i].name;
                orbit.innerText = 'Orbit:' + ' ' + data[i].orbit;
                regime.innerText = 'Regime:' + ' ' + data[i].regime;
                reused.innerText = 'Reused:' + ' ' + data[i].reused;
                lifespan.innerText = data[i].lifespan ? 'Lifespan:' + ' ' + data[i].lifespan : 'Lifespan: No information given';
                type.innerText = 'Type:' + ' ' + data[i].type;
                id.innerText = data[i].id;
                /// Appending the Data
                div.append(name, type, lifespan, regime, orbit, reused);
                contentContainer.appendChild(div);
            }
        });
};

/// Function to fetch and display rocket data
const fetchRockets = () => {
    fetch('https://api.spacexdata.com/v4/rockets')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                const div = document.createElement('div');
                div.className = 'display-div';
                const img = document.createElement('img');
                /// Creating the HTML elements
                const id = document.createElement('p');
                const description = document.createElement('p');
                const name = document.createElement('p');
                const activeStatus = document.createElement('p');
                const country = document.createElement('p');
                const company = document.createElement('p');
                /// Applying the Data
                name.innerText = 'Name:' + ' ' + data[i].name;
                country.innerText = 'Country:' + ' ' + data[i].country;
                company.innerText = 'Company:' + ' ' + data[i].company;
                activeStatus.innerText = 'Active:' + ' ' + data[i].active;
                description.innerText = 'Description:' + ' ' + data[i].description;
                id.innerText = data[i].id;
                /// Images
                img.src = data[i].flickr_images[i];
                img.classList.add('rocket-imgs');
                /// Appending the Data
                div.append(name, company, country, activeStatus, description, img);
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
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                /// Creating the HTML elements
                const div = document.createElement('div');
                div.className = 'display-div';
                
                /// Applying the Data
                const id = document.createElement('p');
                id.innerText = 'ID:' + ' ' + data[i].id;
                
                const name = document.createElement('p');
                name.innerText = 'Name:' + ' ' + data[i].name;
                
                const activeStatus = document.createElement('p');
                activeStatus.innerText = 'Active:' + ' ' + data[i].active;
                
                const homePort = document.createElement('p');
                homePort.innerText = 'Home Port:' + ' ' + data[i].home_port;
                
                /// Images
                const img = document.createElement('img');
                img.src = data[i].image ? data[i].image : "https://via.placeholder.com/150"
                img.classList.add('ships-imgs');
                
                const yearP = document.createElement('p');
                yearP.innerText = `Year Built: ${data[i].year_built}`;
                
                div.append(img,name, activeStatus,homePort,yearP);
                
                /// Appending the Data
                contentContainer.appendChild(div);
            }
        });
};

/// Function to fetch and display all starlink sattelite data
const fetchStarlink = () => {
    fetch('https://api.spacexdata.com/v4/starlink')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                /// Creating the HTML elements
                const div = document.createElement('div');
                div.className = 'display-div';
                const id = document.createElement('p');
                const version = document.createElement('p');
                /// Applying the Data
                id.innerText = 'ID:' + ' ' + data[i].id;
                version.innerText = 'Version:' + ' ' + data[i].version;
                /// Appending the Data
                div.append(id, version);
                contentContainer.appendChild(div);
            }
        });
};

/// Function to fetch and display SpaceX historical events
const fetchHistory = () => {
    fetch('https://api.spacexdata.com/v4/history')
        .then(response => response.json()).then(data => {
            console.log(data);
            contentContainer.innerHTML = '';
            /// Looping through the data array
            for (i = 0; i < data.length; i++) {
                /// Creating the HTML elements
                const div = document.createElement('div');
                div.className = 'display-div';
                const details = document.createElement('p');
                const title = document.createElement('p');
                const date = document.createElement('p');
                const jsDate = new Date(data[i].event_date_utc).toString().substring(4, 15);
                /// Applying the Data
                details.innerText = 'Details:' + ' ' + data[i].details;
                title.innerText = 'Title:' + ' ' + data[i].title;
                date.innerText = jsDate;
                /// Appending the Data
                div.append(title, date, details);
                contentContainer.appendChild(div);
            }
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
    } else if (userInput == 'picture of the day') {
        imgOfTheDay();
    } else if (userInput == 'mars photos') {
        marsImgs();
    } else {
        alert('Invalid Search Term');
    }
    searchInput.value = '';
}

/// Autocomplete function pulled from w3schools
const autocomplete = (inp, arr) => {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    const addActive = (x) => {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    const removeActive = (x) => {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    const closeAllLists = (elmnt) => {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*initiate the autocomplete function on the "myInput" element, and pass along the searchTerms array as possible autocomplete values:*/
autocomplete(searchInput, searchTerms);

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
});