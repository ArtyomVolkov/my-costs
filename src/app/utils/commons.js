export function getObjectKeyValues (obj) {
  const data = {
    keys: [],
    values: []
  };

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== null) {
      data.keys.push(key);
      data.values.push(obj[key]);
    }
  });

  return data;
}