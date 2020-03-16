const fs = require('fs');
const leagueService = require('./services/leagueService');
const playersService = require('./services/playerService');
const teamService = require('./services/teamService');





// let league = async (countryName, year) => {
//     await leagueService.getLeagueByCountryNameAndYear(countryName, year)
//         .then((res) => (console.log(res.data)))
//         .catch((err) => console.error(err));
// }

// league('brazil', '2019');




 /*let players = async (teamId) => {
     await playersService.getPlayersByTeamId(teamId)
         .then((res) => {
             console.log(res.data)
         })
        .catch((err) => console.log(err))
 };

 players('127');*/

//let team = async (teamId) => {
//    await teamService.getTeamByTeamId('134')
//    .then((response)=>console.log(JSON.stringify(response.data)))
//    .catch((err)=>console.error(err))
//};

//team();

// let teams = async (leagueId) => {
//     await teamService.getTeamsByLeagueId(leagueId)
//         .then(function (res) {
//             console.log(res.data);
//             let data = JSON.stringify(res.data)
//             fs.writeFileSync('./Files/brazilTeams.json', data)
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
// }

// teams('357');
//357

// 10174 - ID GABIGOL




 let player = async (player_id, year) => {
     await playersService.getStaticsByPlayerAndSeason(player_id,year)
         .then(function (res) {
             console.log(res.data);
             let data = JSON.stringify(res.data)
             fs.writeFileSync('./Files/StaticsPlayerByYear.json', data)
         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })
 }

player('10168','2019');




