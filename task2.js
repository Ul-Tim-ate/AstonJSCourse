function getInterval(arr, from, to) {
  if (!Number.isInteger(from)) {
    throw Error(
      "В функцию getInterval были переданы невалидные параметры. Параметр from должен быть целым числом."
    );
  }
  if (!Number.isInteger(to)) {
    throw Error(
      "В функцию getInterval были переданы невалидные параметры. Параметр to должен быть целым числом."
    );
  }
  arr.forEach((value) => {
    if (typeof value !== "number") {
      throw Error(
        "В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения."
      );
    }
  });
  return arr.splice(Math.min(from, to), Math.max(from, to));
}