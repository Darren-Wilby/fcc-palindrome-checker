function palindrome(str) {
  const phrase = str
      .split("")
      .filter((match) => /[a-zA-Z0-9]/g.test(match))
      .join("")
      .toLowerCase();

  const len = phrase.length;

  for (let i = 0, j = len - 1; i < len / 2; i++, j--) {
    if (phrase[i] !== phrase[j]) return false;
  }
  
  return true;
}