import fetch from 'node-fetch';

const ALCHEMY_API = "https://alchemy-kd0l.onrender.com/";
const playerId = "oskardb@uia.no";

const PlanetarySymbolsConverter = code => {
    const ConvertSymbolsToMetal = {
      "☉": "Gold",
      "☿": "Quicksilver",
      "☽": "Silver",
      "♂": "Iron"
    };
    return [...code].map(symbol => ConvertSymbolsToMetal[symbol]);
  };

(async function() {
    const startUrl1 = `${ALCHEMY_API}start?player=${encodeURIComponent(playerId)}`;
    const startResponse1 = await fetch(startUrl1);
    const startData1 = await startResponse1.json();
    console.log("Challenge one started:", startData1);

const symbolsToConvert = "☉☿☽♂☉";
const answer1 = PlanetarySymbolsConverter(symbolsToConvert);
console.log("Converted answer for challenge one: ", answer1);

const answerResponse1 = await fetch(`${ALCHEMY_API}answer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ player: playerId, answer: answer1 })
});

const answerData1 = await answerResponse1.json();
console.log("Answer submitted for challenge one: ", answerData1);

//-------------------------------------Task 2
const startUrl2 = `${ALCHEMY_API}start?player=${encodeURIComponent(playerId)}`;
    const startResponse2 = await fetch(startUrl2);
    const startData2 = await startResponse2.json();
    console.log("Challenge two started:", startData2);

    const answer2 = "SILVER";
    console.log("Answer for challenge two: ", answer2);

    const answerResponse2 = await fetch(`${ALCHEMY_API}answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ player: playerId, answer: answer1 })
    });
    const answerData2 = await answerResponse2.json();
    console.log("Answer submitted for challenge two: ", answerData2);
})();