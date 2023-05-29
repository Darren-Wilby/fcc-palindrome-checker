function palindrome(str) {
  // Converts string to array of chars, filters for only alphanumerics
  // turns back into string and sets to lowercase
  const phrase = str
      .split("")
      .filter((match) => /[a-zA-Z0-9]/g.test(match))
      .join("")
      .toLowerCase();

  const len = phrase.length;
  // Compares characters from start and end until converging in the middle
  // Returns false as soon as error is found
  for (let i = 0, j = len - 1; i < len / 2; i++, j--) {
    if (phrase[i] !== phrase[j]) return false;
  }

  return true;
}