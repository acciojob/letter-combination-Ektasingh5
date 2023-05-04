const letterCombinations = function(digits) {
  // Create a mapping of digits to their corresponding letters
  const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  
  // If the input is empty, return an empty array
  if (digits === '') {
    return [];
  }
  
  // If the input contains only one digit, return the corresponding letters
  if (digits.length === 1) {
    return mapping[digits].split('');
  }
  
  // For input with more than one digit, recursively calculate letter combinations
  const restCombinations = letterCombinations(digits.slice(1));
  const firstDigitLetters = mapping[digits[0]].split('');
  
  // Combine the first digit's letters with the rest of the combinations
  const combinations = [];
  for (let i = 0; i < firstDigitLetters.length; i++) {
    for (let j = 0; j < restCombinations.length; j++) {
      combinations.push(firstDigitLetters[i] + restCombinations[j]);
    }
  }
  
  // Sort the combinations lexicographically and return
  return combinations.sort();
};

module.exports = letterCombinations;
