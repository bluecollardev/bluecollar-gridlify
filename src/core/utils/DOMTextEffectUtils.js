/**
 * Because we've wrapped the individual letters in span tags, line breaks no longer occur
 * on word boundaries. For example, if our text says "Ipsum lorem dolor", and the viewport
 * is only big enough to accommodate "Ipsum lor", "Ipsum lor" will be displayed on the top
 * line and the rest of the string, "em dolor" would be displayed on the second. The following
 * mechanism ensures that line breaks will only occur at word boundaries, as would occur with
 * normal paragraph text.
 *
 * @param text String Should correspond to the input for the wrapLetters function
 * @param lettersTarget Node The wrapper element
 * @param letterTargets NodeList The individual letters
 */
function wrapLettersOnWordBoundary(text, lettersTarget, letterTargets) {
  let letters = [...letterTargets]; // Map NodeList to array
  let lastLetter = null;
  let currentLetter = null;
  let words = text.innerText.split(/\s/); // Explode text on whitespace

  let letterPos = 1;
  let wordStartPos = null;
  while ((currentLetter = letters.shift()) && letters.length > -1) {
    if (lastLetter !== null) {
      // Is the currentLetter's y position different than lastLetter's?
      if (currentLetter.getBoundingClientRect().y !== lastLetter.getBoundingClientRect().y) {
        // If so, detect if the line break is occurring in the middle of a word!
        let wordLengths = words.map(val => val.length);

        let total = 0;
        let wordLength = 0;
        while ((wordLength = wordLengths.shift()) && wordLengths.length > -1) {
          // If the current letter index is greater than the total word count
          // add the number of letters in the next word and repeat
          if (letterPos > total) {
            let prevTotal = total;
            total += wordLength;

            // What was the starting index
            //console.log('prev total ' + prevTotal);
            //console.log('current index ' + letterPos);
            //console.log('new total ' + total);
            //console.log('-----')

            wordStartPos = prevTotal++;
          } else {
            break;
          }
        }
      }
    }

    lastLetter = currentLetter;
    letterPos++;
  }

  console.log('word start char pos ' + wordStartPos);
  // Insert line break on word boundary
  // Subtract, NodeList is zero-indexed
  if (wordStartPos !== null && lettersTarget.contains(letterTargets.item(wordStartPos))) {
    lettersTarget.insertBefore(document.createElement('br'), letterTargets.item(wordStartPos));
  }
}

/**
 * @param text
 * @param lettersTarget
 * @param letterTargets
 */
function rewrapLettersOnWordBoundary(text, lettersTarget, letterTargets) {
  // Sanitize the text first, clear any <br> elements that we previously inserted
  lettersTarget.querySelectorAll('br').forEach(el => el.remove());
  wrapLettersOnWordBoundary(text, lettersTarget, letterTargets);
}

/**
 * Wraps each character of a text string in span tags so we can animate the individual letters.
 * TODO: Need to fix regex so it picks up on all special chars
 * @param text
 * @returns {string}
 */
function wrapLetters(text) {
  return `<span class="letters">${text.textContent.replace(/([\S\?\']|\w)/g, '<span class="letter">$&</span>')}</span>`;
}

/**
 * Wraps each word of a text string in span tags so we can animate the individual words.
 *
 * @param text
 * @returns {string}
 */
function wrapWords(text) {
  return `<span class="words">${text.textContent.replace(/([\S]+)/g, '<span class="word">$&</span>')}</span>`;
}

export { wrapLettersOnWordBoundary, rewrapLettersOnWordBoundary, wrapLetters, wrapWords };
