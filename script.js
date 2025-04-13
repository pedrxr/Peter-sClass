// Simulando la actualización del leaderboard con datos
const leaderboard = [
    { rank: 1, username: 'Carlos', points: 750, status: 'Colmado Starter 🛒' },
    { rank: 2, username: 'Maria', points: 680, status: 'Merengue Mover 🎶' },
    { rank: 3, username: 'José', points: 600, status: 'Moto-Taxi Pro 🏍️' },
];

function updateLeaderboard() {
    const tableBody = document.querySelector("#leaderboard-table tbody");
    tableBody.innerHTML = ''; // Clear the table

    leaderboard.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.username}</td>
            <td>${entry.points}</td>
            <td>${entry.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

updateLeaderboard(); // Initial population
