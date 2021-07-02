function A() {
    this.speed = 0;
}

A.prototype.changeSpeed = function (newSpeed) {
    this.speed = newSpeed;
};

A.prototype.move = function () {
    console.log(
        `this ${this.color} car is moving with the speed of ${this.speed} km/h`
    );
};

export { A };