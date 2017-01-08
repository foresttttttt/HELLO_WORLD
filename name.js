function User() {
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer) {
		targetPlayer.life += 1;
		console.log(this.name + "give 1 life to " + targetPlayer.name);
	}
}

var George = new User();
var Bucky = new User();
George.name = "George";
Bucky.name = "Bucky";

George.giveLife(Bucky);

User.prototype.uppercut = function uppercut(targetPlayer) {
	
}