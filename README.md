# Map-Case

Map the casing of one word to another.


## Installation 

```sh
$ npm install map-case
```

## API

#### `map(from, to)`
Exact, character to character case mapping.
    
* `from` - Word with target case.
* `to` - Targeted word.

```js
const mapCase = require('map-case');

mapCase.map('AaaA', 'bbbb') === 'BbbB';

// Ignores non-letters
mapCase.map('Aaa A', 'b1 bb') === 'B1 bB';
```

Maps at most as many letters as `from` contains, ignoring the rest.


#### `upper(from, to)`
Same as `map`, but only tries to upper case letters in `to` according to the upper case letters in `from`.

```js
const mapCase = require('map-case');

mapCase.upper('AaaA', 'bBbB') === 'BBbB';
```

#### `lower(from, to)`
Same as `map`, but only tries to lower case letters in `to` according to the lower case letters in `from`.

```js
const mapCase = require('map-case');

mapCase.lower('AaaA', 'bBbB') === 'bbbB';
```