// Psuedoclassical

var makeCoolDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="cooldancer"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
};

makeCoolDancer.prototype = Object.create(MakeDancer.prototype);
makeCoolDancer.prototype.constructor = makeCoolDancer;

makeCoolDancer.prototype.step = function() {
  // return;
};