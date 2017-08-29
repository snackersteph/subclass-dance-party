// Psuedoclassical

var makeBoringDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="boringdancer"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
};

makeBoringDancer.prototype = Object.create(MakeDancer.prototype);
makeBoringDancer.prototype.constructor = makeBoringDancer;

makeBoringDancer.prototype.step = function() {
  // return;
};

