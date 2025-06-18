function stringChop(str, size) {
  // Check for null, empty string, non-numeric size, or invalid size
  if (!str || isNaN(size) || size <= 0) return [];

  const result = [];
  size = parseInt(size); // convert to integer

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));
