function deepCopyObject(obj) {
  const propNames = Object.getOwnPropertyNames(obj);
  const newObject = Array.isArray(obj) ? [] : {};
  for (const propName of propNames) {
    if (typeof obj[propName] === "object" && obj[propName] !== null) {
      newObject[propName] = deepCopyObject(obj[propName]);
      continue;
    }
    newObject[propName] = obj[propName];
  }
  return newObject;
}