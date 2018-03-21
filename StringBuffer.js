var StringBuffer = function () {
  this.buffer = [];
  this.index = 0;
};

StringBuffer.prototype = {
  append: function (s) {
  this.buffer[this.index] = s;
  this.index++;
  return this;
  },
  toString: function() {
    // return this.buffer.join('');
  },
  length: function(){
    return this.buffer.length;
  }
};


