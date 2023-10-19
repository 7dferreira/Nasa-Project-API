const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Alpha b',
    rocket: 'Explorer S2',
    launchDate: new Date('December 27, 2030'),
    target:  'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            flightNumber: latestFlightNumber,
            customers: ['ZTM', 'NASA'],
        })
    );
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
};