const axios = require('axios');
const fs    = require('fs');

// let brazil = axios.get('https://api-football-v1.p.rapidapi.com/v2/topscorers/282', {
//  headers: {
//     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
// 	"x-rapidapi-key": "912568d03bmsh4ec2e0fc892ec77p15231bjsn2f96694ddd90"
//  }
// })
// .then(function (response) {
    
//     let string = JSON.stringify(response.data);
//     let json = JSON.parse(string);

//     fs.writeFileSync('Teste01.json',string);
    
//     console.log(string);
// })
// .catch(function (err) {
//     // handle err
//     console.log(err);
// });

// brazil;

// Blodsdasdsalkjfasodil
let data = fs.readFileSync('Teste01.json');
let json = JSON.parse(data);

let player = {};
var players = [];


json.api.topscorers.forEach(element => {
    player = {
        name: element.player_name,
        position: element.position,
        nationality: element.nationality,
        team_name:element.team_name,
        games: [
            {
                appearences: element.games.appearences
            },
            {
                minutes_played: element.games.minutes_played
            }
        ],
        goals: element.goals.total,
        shots: element.shots,
    };
    players.push(player);
});

fs.writeFileSync('players.json', JSON.stringify(players));


console.log(players);