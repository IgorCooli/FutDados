const axios = require('axios');

const getPlayersByTeamId = (teamId) => {
    return axios
        .get(
            `https://api-football-v1.p.rapidapi.com/v2/players/team/${teamId}`,
            {
                headers: {
                    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                    "x-rapidapi-key": "87cacce77dmshb30bd3b74abbc59p10ba96jsnea7f9d04dca2"
                }
            }
        )
};

const getStaticsByPlayerAndSeason = (player_id, year) => {
    return axios
        .get(
            `https://api-football-v1.p.rapidapi.com/v2/players/player/${player_id}/${year}`,
            {
                headers: {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "912568d03bmsh4ec2e0fc892ec77p15231bjsn2f96694ddd90"
                }
            }
        )
};


module.exports = { 
    getPlayersByTeamId: getPlayersByTeamId, 
    getStaticsByPlayerAndSeason: getStaticsByPlayerAndSeason
};

