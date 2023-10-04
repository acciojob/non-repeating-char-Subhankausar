function firstNonRepeatedChar(str) {
  // Create an object to store character frequencies
  const charCount = {};

  // Iterate through the string and count the frequency of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
