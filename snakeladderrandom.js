//uc2 roll the dice
console.log("Welcome to Snake and Ladder!");
let first_player_position=0;
console.log("First player at start position " + first_player_position);
//roll the die
let first_player_roll=Math.floor(Math.random()*6)+1;
first_player_position=first_player_roll+first_player_position;
console.log("After rolls the die,first player at position "+first_player_position);