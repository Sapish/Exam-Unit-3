import fetch from 'node-fetch';

const ALCHEMY_API = "https://alchemy-kd0l.onrender.com/";
const playerId = "oskardb@uia.no";

(async function() {
    const startUrl = `${ALCHEMY_API}start?player=${encodeURIComponent(playerId)}`;
    const startResponse = await fetch(startUrl);
    const startData = await startResponse.json();
    console.log("Challenge started:", startData);
})();

const solutionOne = "Gold, Quicksilver, Silver, Iron, Gold";
const solutionUrl = `${ALCHEMY_API}solution?player=${encodeURIComponent(playerId)}&solution=${encodeURIComponent(solutionOne)}`;


