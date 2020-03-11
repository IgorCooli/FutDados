const axios = require('axios');
const fs = require('fs');


let brazil = axios.get('https://api-football-v1.p.rapidapi.com/v2/leagues/country/brazil/2019', {
 headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	"x-rapidapi-key": "912568d03bmsh4ec2e0fc892ec77p15231bjsn2f96694ddd90"
 }
})
.then(function (response) {
    let brazilData = JSON.stringify(response.data);
    fs.writeFileSync('brazil.json',brazilData)
    //let rawdata = fs.readFileSync('student.json');
    console.log(brazilData);
})
.catch(function (error) {
    // handle error
    console.log(error);
})
brazil;


let teams = axios.get('https://api-football-v1.p.rapidapi.com/v2/teams/league/357', {
headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": "912568d03bmsh4ec2e0fc892ec77p15231bjsn2f96694ddd90"
}
})
.then(function (response) {
    let teams = JSON.stringify(response.data);
    fs.writeFileSync('brazil_teams.json',teams)
    //let rawdata = fs.readFileSync('student.json');
    console.log(teams);
})
.catch(function (error) {
    // handle error
    console.log(error);
})

teams;


let players_by_team = axios.get('https://api-football-v1.p.rapidapi.com/v2/players/team/127', {
headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": "912568d03bmsh4ec2e0fc892ec77p15231bjsn2f96694ddd90"
}
})
.then(function (response) {
    let players = JSON.stringify(response.data);
    fs.writeFileSync('player_by_team.json',players)
    
    let nomes = [];

    //Pegando somente os jogares de 2019
    JSON.parse(players).api.players.forEach(element => {
        if(element.season == "2019"){
            nomes.push([element.player_name, element.goals.total])
        }
        console.log(element.player_name)
    });

    //Filtrando as duplicatas
    let novoNomes = [];
    nomes.forEach(element => {
        if(novoNomes.indexOf(element) === -1){
            novoNomes.push(element);
        }
    });    

    console.log(novoNomes);
})
.catch(function (error) {
    //handle error
    console.log(error);
})

players_by_team;