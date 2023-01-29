function Team(name, principalPlayers, age, mascot) {
  this.name = name;
  this.principalPlayers = principalPlayers;
  this.age = age;
  this.mascot = mascot;
  this.playersOnTeam = 0;
  this.addOnTeam = function addOnTeam(quantity) {
    this.playersOnTeam += quantity;
  };
  this.save = function () {
    // Save book to database
  };
}

const name = "Grêmio";
const principalPlayers = ["Suárez", "Danilo", "Igor"];

const team = new Team(name, principalPlayers, 100, "Mosqueteiro");

team.addOnTeam(20);

console.log(team);
