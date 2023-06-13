const locations = [
    '🎭', '🎪', '🎢', '🏟️', '🏨',
    '🏤', '🏥', '🏭', '🏢', '🏣',
    '🏰', '🏬', '🗻', '🏦', '🏪'
]

const locationIds = [
    'performingArts',
    'circus',
    'amusementPark',
    'stadium',
    'hotel',
    'euroPostOffice',
    'hospital',
    'factory',
    'office',
    'japanPostOffice',
    'castle',
    'departmentStore',
    'mountFuji',
    'bank',
    'convenienceStore'
]

let people = [
    {
        name: 'Jimbo',
        picture: '🤵',
        isHunter: false,
        location: ''
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        isHunter: false,
        location: ''
    },
    {
        name: 'Michael',
        picture: '👷',
        isHunter: false,
        location: ''
    },
    {
        name: 'Robert',
        picture: '👷',
        isHunter: false,
        location: ''
    },
    {
        name: 'Terry',
        picture: '🤴',
        isHunter: false,
        location: '',
    },
    {
        name: 'Bill',
        picture: '🕵️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        isHunter: false,
        location: '',
    },
    {
        name: 'Mykeal',
        picture: '💂',
        isHunter: false,
        location: '',
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Wilson',
        picture: '🏐',
        isHunter: false,
        location: '',
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        isHunter: false,
        location: '',
    },
    {
        name: 'Mary',
        picture: '👩‍⚖️',
        isHunter: false,
        location: '',
    }
]

const locationCount = 15
let hunterCount = 1
let hasEnded = false

function populateLocationWithIds() {
    for (let index = 0; index < locations.length; index++) {
        const locID = locationIds[index]
        const locIcon = locations[index]
        let locationElement = document.getElementById(locationIds[index])

        locationElement.innerHTML = `
        <h1>${locIcon}</h1>
        <h1 id=${locID}-people></h1>
        <button onclick="attackLocation('${locID}')" class="btn btn-secondary">Attack! ⚔</button>
        `
    }
}

function randomizePeopleLocation() {
    people.forEach(person => {
        let randIndex = Math.floor(Math.random() * locationCount)
        const locId = locationIds[randIndex]
        const locationElement = document.getElementById(`${locId}-people`)
        locationElement.innerHTML += `<span>${person.picture}</span>`
        person.location = `${locId}`
    })
}

function clearLocations() {
    locationIds.forEach(locId => {
        const locationElement = document.getElementById(`${locId}-people`)
        locationElement.innerHTML = `<h1 id=${locId}-people></h1>`
    })
}

function makeVampireHunter() {
    let currentHuntCount = people.filter(person => person.isHunter).length
    while (currentHuntCount < hunterCount) {
        let randIndex = Math.floor(Math.random() * people.length)
        people[randIndex].isHunter = true
        currentHuntCount = people.filter(person => person.isHunter).length
    }
}

function attackLocation(locationId) {
    checkIfLost(locationId)
    if (!hasEnded) {
        changePictureToBats(locationId)
        clearLocations()
        randomizePeopleLocation()
        checkBatsLocation()
    }
}

function changePictureToBats(locationId) {
    people.forEach(person => {
        if (person.location == locationId) {
            person.picture = '🦇'
        }
    })
    checkIfWon()
}

function checkIfLost(locationId) {
    let vampireHunter = people.find(person => person.isHunter)
    if (!isHunterKillable() && vampireHunter.location == locationId && !hasEnded) {
        hasEnded = true
        window.alert(`You've run into the vampire hunter! ${vampireHunter.name} ${vampireHunter.picture} vanquished you!`)
    }
}

function checkBatsLocation() {
    if (!hasEnded) {
        let currentBats = people.filter(person => person.picture == '🦇')
        let vampireHunter = findVampireHunter()
        for (let index = 0; index < currentBats.length; index++) {
            let bat = currentBats[index]
            if (bat.location == vampireHunter.location) {
                window.alert('A Bat 🦇 spotted the vampire hunter!')
                return
            }
        }
    }
}

function findVampireHunter() {
    return people.find(person => person.isHunter)
}

function isHunterKillable() {
    const batArray = people.filter(person => person.picture == '🦇')
    return (batArray.length == people.length - 1)
}

function checkIfWon() {
    const isEveryoneBats = (people.filter(person => person.picture == '🦇').length == people.length)
    if (isEveryoneBats) {
        hasEnded = true
        window.alert(`You've won! The whole town is bats! 🦇🦇🦇`)
    }
}

function adjustHunterCount(type) {
    if (type == '-' && hunterCount > 1) {
        hunterCount--;
        resetGame()
    }

    if (type == '+' && hunterCount < people.length) {
        hunterCount++
        resetGame()
    }
}

function drawHunterCount() {
    document.getElementById('hunterCount').innerText = hunterCount
}

function resetGame() {
    people = [
        {
            name: 'Jimbo',
            picture: '🤵',
            isHunter: false,
            location: ''
        },
        {
            name: 'Sammy',
            picture: '🙆‍♀️',
            isHunter: false,
            location: ''
        },
        {
            name: 'Michael',
            picture: '👷',
            isHunter: false,
            location: ''
        },
        {
            name: 'Robert',
            picture: '👷',
            isHunter: false,
            location: ''
        },
        {
            name: 'Terry',
            picture: '🤴',
            isHunter: false,
            location: '',
        },
        {
            name: 'Bill',
            picture: '🕵️',
            isHunter: false,
            location: '',
        },
        {
            name: 'Marie',
            picture: '👩‍🍳',
            isHunter: false,
            location: '',
        },
        {
            name: 'Mykeal',
            picture: '💂',
            isHunter: false,
            location: '',
        },
        {
            name: 'Phil',
            picture: '🧜‍♂️',
            isHunter: false,
            location: '',
        },
        {
            name: 'Wilson',
            picture: '🏐',
            isHunter: false,
            location: '',
        },
        {
            name: 'Wendy',
            picture: '👩‍⚕️',
            isHunter: false,
            location: '',
        },
        {
            name: 'Jeremy',
            picture: '🦹',
            isHunter: false,
            location: '',
        },
        {
            name: 'Mary',
            picture: '👩‍⚖️',
            isHunter: false,
            location: '',
        }
    ]
    hasEnded = false
    populateLocationWithIds()
    makeVampireHunter()
    randomizePeopleLocation()
    drawHunterCount()
}

// Starting Game on page reload
resetGame()