const axios = require('axios');

const getTeamsByLeagueId = (leagueId) => {
    return axios
        .get(`https://api-football-v1.p.rapidapi.com/v2/teams/league/${leagueId}`, 
        {
            headers: 
            {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "912568d03bmsh4ec2e0fc892ec77p15231bjsn2f96694ddd90"
            }
        }
    )
};
module.exports = { getTeamsByLeagueId: getTeamsByLeagueId };


//TESTE IGOR
