function deleteElementFromArray(arr, elem) {
  const indexOfDeleteElem = arr.indexOf(elem);
  if (indexOfDeleteElem === -1) {
    return arr;
  }
  return [
    ...arr.slice(0, indexOfDeleteElem),
    ...arr.slice(indexOfDeleteElem + 1),
  ];
}