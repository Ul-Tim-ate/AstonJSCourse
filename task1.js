Array.prototype.filterArray = function (cb, thisArg = this) {
  const newArr = [];
  this.forEach((el, index, arr) => {
    if (cb.call(thisArg, el, index, arr)) {
      newArr.push(this[index]);
    }
  });
  return newArr;
};