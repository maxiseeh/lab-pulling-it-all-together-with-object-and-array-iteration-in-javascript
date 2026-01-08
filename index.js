function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName].points;
        }
    }
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName].shoe;
        }
    }
}

function teamColors(teamName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
}

function teamNames() {
    const game = gameObject();
    const names = [];
    for (const team of Object.values(game)) {
        names.push(team.teamName);
    }
    return names;
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.teamName === teamName) {
            const numbers = [];
            for (const player of Object.values(team.players)) {
                numbers.push(player.number);
            }
            return numbers;
        }
    }
}

function playerStats(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName];
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;
    
    for (const team of Object.values(game)) {
        for (const player of Object.values(team.players)) {
            if (player.shoe > largestShoe) {
                largestShoe = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }
    
    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = '';
    
    for (const team of Object.values(game)) {
        for (const playerName in team.players) {
            if (team.players[playerName].points > maxPoints) {
                maxPoints = team.players[playerName].points;
                topPlayer = playerName;
            }
        }
    }
    
    return topPlayer;
}

function winningTeam() {
    const game = gameObject();
    let maxTeamPoints = 0;
    let winningTeamName = '';
    
    for (const team of Object.values(game)) {
        let teamPoints = 0;
        for (const player of Object.values(team.players)) {
            teamPoints += player.points;
        }
        if (teamPoints > maxTeamPoints) {
            maxTeamPoints = teamPoints;
            winningTeamName = team.teamName;
        }
    }
    
    return winningTeamName;
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
    
    for (const team of Object.values(game)) {
        for (const playerName in team.players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }
    
    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName();
    let maxSteals = 0;
    let playerWithMostSteals = '';
    
    for (const team of Object.values(game)) {
        for (const playerName in team.players) {
            if (team.players[playerName].steals > maxSteals) {
                maxSteals = team.players[playerName].steals;
                playerWithMostSteals = playerName;
            }
        }
    }
    
    return longestNamePlayer === playerWithMostSteals;
}

// Make functions available globally for testing
if (typeof global !== 'undefined') {
    global.gameObject = gameObject;
    global.numPointsScored = numPointsScored;
    global.shoeSize = shoeSize;
    global.teamColors = teamColors;
    global.teamNames = teamNames;
    global.playerNumbers = playerNumbers;
    global.playerStats = playerStats;
    global.bigShoeRebounds = bigShoeRebounds;
    global.mostPointsScored = mostPointsScored;
    global.winningTeam = winningTeam;
    global.playerWithLongestName = playerWithLongestName;
    global.doesLongNameStealATon = doesLongNameStealATon;
}