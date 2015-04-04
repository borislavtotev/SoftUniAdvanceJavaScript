Object.prototype.inherits = function inherits(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};