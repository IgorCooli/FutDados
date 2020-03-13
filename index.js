const fs = require('fs');
const leagueService = require('./services/leagueService.js');
const playersService = require('./services/playerService');

// brazil;


// let teams = axios.get('https://api-football-v1.p.rapidapi.com/v2/teams/league/357', {
// headers: {
//     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//     "x-rapidapi-key": "912568d03bmsh4ec2e0fc892ec77p15231bjsn2f96694ddd90"
// }
// })
// .then(function (res) {
//     let teams = JSON.stringify(res.data);
//     fs.writeFileSync('brazil_teams.json',teams)
//     //let rawdata = fs.readFileSync('student.json');
//     console.log(teams);
// })
// .catch(function (error) {
//     // handle error
//     console.log(error);
// })

// teams;




let league = async (countryName, year) => {
    await leagueService.getLeagueByCountryNameAndYear(countryName, year)
        .then((res) => (console.log(res.data)))
        .catch((err) => console.error(err));
}

// league('brazil', '2019');



let players = async (teamId) => {
    await playersService.getPlayersByTeamId(teamId)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err))
}

players('127');