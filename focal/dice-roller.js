const numDice = process.argv[2];

if (!numDice || isNaN(numDice) || numDice < 1){
  console.log("Please provide a valid positive number of dide to roll.")
} else {
  const rolls = array.from({length: numDice}, () = > Math.floor(math.random() * 6) + 1);
  console.log(`Rolled ${numDice} dice: ${rolls.join(", ")}`);
}