function stringChop(str, size) {
  if (str === null || size <= 0) return [];

  const result = [];
  size = parseInt(size); // ensure size is treated as a number

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));
