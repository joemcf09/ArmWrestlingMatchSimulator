// Utility Functions
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function chooseStyle(wrestler) {
    const rand = Math.random();
    let cumulative = 0;
    for (const [style, prob] of Object.entries(wrestler.styles)) {
        cumulative += prob;
        if (rand <= cumulative) return style;
    }
    return Object.keys(wrestler.styles)[0]; // Fallback
}

function calculateEffectiveStrength(player, style, hand) {
    let base;
    switch (style) {
        case 'hook':
            base = player.attributes[hand].wrist;
            break;
        case 'toproll':
            base = player.attributes[hand].hand;
            break;
        case 'press':
            base = player.attributes[hand].arm;
            break;
        case 'kings':
            base = player.attributes[hand].endurance;
            break;
        default:
            base = player.attributes[hand].strength;
    }
    return base * (player.fatigue / 100);
}

function applyFatigue(player, style) {
    const fatigueCost = {
        'press': 15,
        'hook': 10,
        'toproll': 12,
        'kings': 5
    }[style] || 8;
    player.fatigue = Math.max(0, player.fatigue - fatigueCost);
}

function recoverFatigue(player) {
    const recoveryAmount = 5 * (player.fatigueRecovery || 1.0);
    player.fatigue = Math.min(100, player.fatigue + recoveryAmount);
}

function getRoundWinner(player1, player2, style1, style2, hand) {
    const effective1 = calculateEffectiveStrength(player1, style1, hand) + (Math.random() * 10 - 5);
    const effective2 = calculateEffectiveStrength(player2, style2, hand) + (Math.random() * 10 - 5);
    return effective1 > effective2 ? player1 : player2;
}

// Toggle AI Opponent Selection
function toggleOpponentSelection() {
    const aiPicksOpponent = document.getElementById('aiPicksOpponent').checked;
    const opponentSelectContainer = document.getElementById('opponentSelectContainer');
    const opponentSelect = document.getElementById('opponentSelect');

    if (aiPicksOpponent) {
        opponentSelectContainer.style.display = 'none';
        const playerChoice = document.getElementById('playerSelect').value;
        const weightClassFilter = document.getElementById('weightClassFilter').value;

        let availableOpponents = weightClassFilter
            ? wrestlers.filter(w => w.name !== playerChoice && (Array.isArray(w.weightClass) ? w.weightClass.includes(weightClassFilter) : w.weightClass === weightClassFilter))
            : wrestlers.filter(w => w.name !== playerChoice);

        if (availableOpponents.length > 0) {
            const randomOpponent = availableOpponents[Math.floor(Math.random() * availableOpponents.length)];
            opponentSelect.value = randomOpponent.name;
        } else {
            console.warn("No available opponents for AI selection.");
        }
    } else {
        opponentSelectContainer.style.display = 'block';
    }
}

// Animation and Sound Functions
function animateTable() {
    const table = document.getElementById('matchTable');
    if (table) {
        table.classList.add('shaking');
        setTimeout(() => table.classList.remove('shaking'), 100);
    }
}

function animatePlayerImages(winner) {
    const img1 = document.getElementById('player1Img');
    const img2 = document.getElementById('player2Img');
    if (img1 && img2) {
        img1.classList.add('active');
        img2.classList.add('active');
        setTimeout(() => {
            img1.classList.remove('active');
            img2.classList.remove('active');
            const playerSelectValue = document.getElementById('playerSelect').value;
            if (winner === playerSelectValue) img1.style.transform = 'scale(1.2)';
            else img2.style.transform = 'scale(1.2)';
        }, 300);
    }
}

function playSound(id) {
    const sound = document.getElementById(id);
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(error => console.log(`Audio play failed for ${id}:`, error));
    }
}

// Filter Wrestlers by Weight Class
function filterWrestlers() {
    const weightClassFilter = document.getElementById('weightClassFilter').value;
    const playerSelect = document.getElementById('playerSelect');

    const filteredWrestlers = weightClassFilter
        ? wrestlers.filter(w => Array.isArray(w.weightClass) ? w.weightClass.includes(weightClassFilter) : w.weightClass === weightClassFilter)
        : wrestlers.slice();

    playerSelect.innerHTML = '';
    filteredWrestlers.forEach(wrestler => {
        const option = document.createElement('option');
        option.value = wrestler.name;
        option.textContent = `${wrestler.name} (${Array.isArray(wrestler.weightClass) ? wrestler.weightClass.join(', ') : wrestler.weightClass})`;
        playerSelect.appendChild(option);
    });

    if (filteredWrestlers.length > 0) {
        playerSelect.value = filteredWrestlers[0].name;
    }

    updateOpponentDropdown();
}

// Update Opponent Dropdown
function updateOpponentDropdown() {
    const playerChoice = document.getElementById('playerSelect').value;
    const opponentSelect = document.getElementById('opponentSelect');
    const weightClassFilter = document.getElementById('weightClassFilter').value;

    const availableOpponents = weightClassFilter
        ? wrestlers.filter(w => w.name !== playerChoice && (Array.isArray(w.weightClass) ? w.weightClass.includes(weightClassFilter) : w.weightClass === weightClassFilter))
        : wrestlers.filter(w => w.name !== playerChoice);

    opponentSelect.innerHTML = '';
    availableOpponents.forEach(opponent => {
        const option = document.createElement('option');
        option.value = opponent.name;
        option.textContent = `${opponent.name} (${Array.isArray(opponent.weightClass) ? opponent.weightClass.join(', ') : opponent.weightClass})`;
        opponentSelect.appendChild(option);
    });

    if (availableOpponents.length > 0) {
        opponentSelect.value = availableOpponents[0].name;
    }
}

// Start Match Function
async function startMatch() {
    const playerChoice = document.getElementById('playerSelect').value;
    const aiPicksOpponent = document.getElementById('aiPicksOpponent').checked;
    const hand = document.getElementById('handSelect').value;
    const matchFormat = parseInt(document.getElementById('matchFormat').value, 10);

    const selectedWrestler = wrestlers.find(w => w.name === playerChoice);
    if (!selectedWrestler) {
        console.error("Player selection failed. Wrestler not found.");
        return;
    }
    const player1 = JSON.parse(JSON.stringify(selectedWrestler));

    let player2;
    if (aiPicksOpponent) {
        const weightClassFilter = document.getElementById('weightClassFilter').value;
        const availableOpponents = weightClassFilter
            ? wrestlers.filter(w => w.name !== playerChoice && (Array.isArray(w.weightClass) ? w.weightClass.includes(weightClassFilter) : w.weightClass === weightClassFilter))
            : wrestlers.filter(w => w.name !== playerChoice);

        if (availableOpponents.length === 0) {
            console.error("No available opponents found!");
            return;
        }
        player2 = JSON.parse(JSON.stringify(availableOpponents[Math.floor(Math.random() * availableOpponents.length)]));
    } else {
        const opponentChoice = document.getElementById('opponentSelect').value;
        const selectedOpponent = wrestlers.find(w => w.name === opponentChoice);
        if (!selectedOpponent) {
            console.error("Opponent selection failed. Wrestler not found.");
            return;
        }
        player2 = JSON.parse(JSON.stringify(selectedOpponent));
    }

    document.getElementById('player1Img').src = player1.image || "https://via.placeholder.com/150?text=Player+1";
    document.getElementById('player2Img').src = player2.image || "https://via.placeholder.com/150?text=Player+2";

    const commentary = document.getElementById('matchCommentary');
    commentary.innerHTML = '';

    playSound('refereeStart');
    playSound('crowdCheer');

    await simulateMatch(player1, player2, commentary, hand, matchFormat);
}

// Simulate Match Function
async function simulateMatch(player1, player2, commentary, hand, matchFormat) {
    let commentaryText = `<b>Starting a ${hand}-hand match:</b> ${player1.name} (${Array.isArray(player1.weightClass) ? player1.weightClass.join(', ') : player1.weightClass}) vs ${player2.name} (${Array.isArray(player2.weightClass) ? player2.weightClass.join(', ') : player2.weightClass}) (${matchFormat === 3 ? "Best of 3" : matchFormat === 5 ? "Best of 5" : "Best of 7"})<br><br>`;
    let roundWins1 = 0, roundWins2 = 0;
    const winsNeeded = Math.ceil(matchFormat / 2);

    for (let round = 1; round <= matchFormat && roundWins1 < winsNeeded && roundWins2 < winsNeeded; round++) {
        commentaryText += `<b>Round ${round}:</b><br>`;

        const currentStyle1 = chooseStyle(player1);
        const currentStyle2 = chooseStyle(player2);

        commentaryText += `${getRandomElement(commentaryPhrases.opening[currentStyle1]).replace('{player}', player1.name)}<br>`;
        commentaryText += `${getRandomElement(commentaryPhrases.opening[currentStyle2]).replace('{player}', player2.name)}<br>`;

        applyFatigue(player1, currentStyle1);
        applyFatigue(player2, currentStyle2);

        if (player1.fatigue < 50) commentaryText += `${getRandomElement(commentaryPhrases.fatigue).replace('{player}', player1.name)}<br>`;
        if (player2.fatigue < 50) commentaryText += `${getRandomElement(commentaryPhrases.fatigue).replace('{player}', player2.name)}<br>`;

        const matchupKey = `${currentStyle1} vs ${currentStyle2}`;
        if (commentaryPhrases.counters[matchupKey]) {
            commentaryText += `${getRandomElement(commentaryPhrases.counters[matchupKey])
                .replace('{toproller}', currentStyle2 === 'toproll' ? player2.name : player1.name)
                .replace('{hooker}', currentStyle1 === 'hook' ? player1.name : player2.name)
                .replace('{presser}', currentStyle1 === 'press' ? player1.name : player2.name)
                .replace('{kings}', currentStyle1 === 'kings' ? player1.name : player2.name)}<br>`;
        }

        const effective1 = calculateEffectiveStrength(player1, currentStyle1, hand);
        const effective2 = calculateEffectiveStrength(player2, currentStyle2, hand);
        let roundWinner;

        if (effective1 - effective2 > 20 && Math.random() < 0.7) {
            commentaryText += `${getRandomElement(commentaryPhrases.flashPin).replace('{winner}', player1.name).replace('{loser}', player2.name).replace('{style}', currentStyle1)}<br>`;
            roundWins1++;
            roundWinner = player1;
        } else if (effective2 - effective1 > 20 && Math.random() < 0.7) {
            commentaryText += `${getRandomElement(commentaryPhrases.flashPin).replace('{winner}', player2.name).replace('{loser}', player1.name).replace('{style}', currentStyle2)}<br>`;
            roundWins2++;
            roundWinner = player2;
        } else {
            roundWinner = getRoundWinner(player1, player2, currentStyle1, currentStyle2, hand);
            if (roundWinner === player1) {
                roundWins1++;
                commentaryText += `${getRandomElement(commentaryPhrases.roundWin).replace('{player}', player1.name).replace('{style}', currentStyle1)}<br>`;
            } else {
                roundWins2++;
                commentaryText += `${getRandomElement(commentaryPhrases.roundWin).replace('{player}', player2.name).replace('{style}', currentStyle2)}<br>`;
            }
        }

        commentaryText += `<br>`;
        commentary.innerHTML = commentaryText;
        animateTable();
        animatePlayerImages(roundWinner.name);
        playSound('tableCreak');

        recoverFatigue(player1);
        recoverFatigue(player2);

        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    const matchWinner = roundWins1 > roundWins2 ? player1 : player2;
    const matchLoser = matchWinner === player1 ? player2 : player1;

    commentaryText += `<b>${matchWinner.name} claims victory over ${matchLoser.name} in a brutal ${hand}-hand supermatch!</b><br><br>`;
    commentaryText += `<b>Final Score:</b> ${player1.name} ${roundWins1} - ${roundWins2} ${player2.name}<br>`;

    commentary.innerHTML = commentaryText;
    playSound('crowdCheer');
}

// Initialize on Page Load and Add Event Listeners
window.onload = function() {
    filterWrestlers();
    toggleOpponentSelection();
    document.getElementById('startMatchButton').addEventListener('click', startMatch);
    document.getElementById('weightClassFilter').addEventListener('change', filterWrestlers);
    document.getElementById('playerSelect').addEventListener('change', updateOpponentDropdown);
    document.getElementById('aiPicksOpponent').addEventListener('change', toggleOpponentSelection);
};