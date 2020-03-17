const fs = require('fs');
const leagueService = require('./services/leagueService');
const playersService = require('./services/playerService');
const teamService = require('./services/teamService');



let brazilSerieA = JSON.parse(fs.readFileSync('./Files/brazilTeamsSerieA.json'))


let teams = []
let team = {}
let player = {}
let players = []
let playersAux = {}


let getPlayers = async (teamId, teamName) => {
    await playersService.getPlayersByTeamId(teamId)
        .then(function (res) {
            let data = res.data.api.players
            console.log(data)
            fs.writeFileSync(`./Files/SerieA/JogadoresPorTimeSerieA/${teamName}.json`, JSON.stringify(data));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

brazilSerieA.api.teams.forEach(e => {
    team = {
        team_id: e.team_id,
        name: e.name,
        logo: e.logo,
        country: e.country,
        founded: e.founded,
        venue_name: e.venue_name,
        venue_city: e.venue_city,
        venue_capacity: e.venue_capacity
    }
    teams.push(team)
    // console.log(team)

});

fs.writeFileSync('./Files/SerieA/timesSerieA.json', JSON.stringify(teams))

// let x = getPlayers(`${teams[0].team_id}`);


// getPlayers(`${teams[0].team_id}`, `${teams[0].team_name}`)



teams.forEach(e => {
    setTimeout(()=>{
        getPlayers(`${e.team_id}`, `${e.name}`)
    }, 5000)
});







