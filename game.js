function User() {
	this.name = "";
	this.life = 100;
	this.attack = function attack(targetPlayer) {
		targetPlayer.life -= 1;
		console.log(this.name + "attacked "  + targetPlayer.name + " 1 life.");
	}
}

var George = new User();
var Bucky = new User();
George.name = "George";
Bucky.name = "Bucky";

George.attack(Bucky);

console.log(Bucky.life);

