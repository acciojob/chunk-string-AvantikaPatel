function stringChop(str, size) {
  // If the input string is falsy (null, undefined, empty), return an empty array
  if (!str) return [];
  // Initialize an empty array to store the chunks
  let chunks = [];
  // Loop through the string with steps of 'size'
  for (let i = 0; i < str.length; i = i + size) {
    // Extract a substring from the current position up to i+size (but not exceeding the string length)
    let subStr = str.slice(i, i + size);
    // Add the substring chunk to the chunks array
    chunks.push(subStr);
  }
  // Return the array containing all the chunks
  return chunks;
}

// Test the function with an example input and chunk size of 5
console.log(stringChop("Hello, world!", 5));

// Do not change the code below
//const str = prompt("Enter String.");
//const size = prompt("Enter Chunk Size.");
//alert(stringChop(str, size));
