let players = JSON.parse(localStorage.getItem("players")) || [];

function getTierClass(tier){
  return tier.toLowerCase();
}

function addPlayer(){
  const username = document.getElementById("username").value;
  const tier = document.getElementById("tier").value;

  if(username === "" || tier === "") return;

  players.push({ username, tier });

  localStorage.setItem("players", JSON.stringify(players));

  displayPlayers();
}

function displayPlayers(){
  const list = document.getElementById("playerList");
  list.innerHTML = "";

  players.forEach(p => {

    const div = document.createElement("div");
    div.className = "playerCard";

    div.innerHTML = `
      <span>${p.username}</span>
      <span class="${getTierClass(p.tier)}">${p.tier}</span>
    `;

    list.appendChild(div);
  });
}

window.onload = displayPlayers;
window.addPlayer = addPlayer;