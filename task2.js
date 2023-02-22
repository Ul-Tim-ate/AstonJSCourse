function addElementsToArray(arr, index) {
  if (index !== undefined && (!Number.isInteger(index) || index < 0)) {
    throw new Error(
      `the index cannot be a negative number or a fractional number`
    );
  }
  return function (...elems) {
    if (index === undefined || index >= arr.length) {
      return [...arr, ...elems];
    }
    return [...arr.slice(0, index), ...elems, ...arr.slice(index)];
  };
}