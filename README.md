# Fill String 1.0.0

Library to create a new Strign with a specific size. If the previous string is less than new specific size, the function **return** a string filled with a **comodin** character.


## Example:

```
import FillString from '@andresciceri/fill-string';

// Text
const fl = new FillString();
const actualText = `hello`;
console.log('New Text:', fl.fill(actualText, 'o', {maxSize: 10, position: 'END'})); // New Text: Helloooooo

// Binary

const fl = new FillString();
const actualBin = `0110`;
console.log('New Bin:', fl.fill(actualBin, '0', {maxSize: 6, position: 'START'})); // New Bin: 000110

```

