const numDice = process.argv[1];

if (!numDice || isNaN(numDice) || numDice < 1){
  console.log("Please provide a valid positive number of dide to roll.")
} else {
  const rolls = Array.from({length: numDice}, () => Math.floor(Math.random() * 6) + 1);
  console.log(`Rolled ${numDice} dice: ${rolls.join(", ")}`);
}

