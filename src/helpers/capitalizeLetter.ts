function capitalizeLetter(word: string): string {
  const toLower = word.toLowerCase();
  const capLetter = toLower.charAt(0).toUpperCase() + toLower.slice(1);
  return capLetter;
}

export default capitalizeLetter;
