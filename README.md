# String Master Library

<p>This documentation provides an overview of the various string manipulation functions available in the library. These functions cover a wide range of functionality, from simple capitalization and word counting to more advanced operations such as finding anagrams and longest common substrings.</p>
 
 <hr style="margin-bottom: 1rem;">

`capitalize`(str: string) - Capitalizes the first character of the given string.

`commonSubstring`(str1: string, str2: string) - Returns the longest common substring of the two given strings.

`countOccurrences`(str: string, substring: string) - Returns the number of occurrences of the given substring in the given string.

`countWords`(str: string) - Returns the number of words in the given string.

`countWordsInString`(str: string, word: string) - Returns the number of occurrences of the given word in the given string.

`endsWith`(str: string, suffix: string) - Returns true if the given string ends with the given suffix, false otherwise.

`findAllIndexes`(str: string, substring: string) - Returns an array of all indexes at which the given substring appears in the given string.

`findIndex`(str: string, substring: string) - Returns the index of the first occurrence of the given substring in the given string, or -1 if it is not found.

`format`(str: string, args: any[]) - Replaces placeholders in the given string with the corresponding values in the given args array.

`getAllPosition`(str: string, substring: string) - Returns an array of all the indexes of a given substring in a string

`getAnagrams`(str: string) - Returns an array of all the anagrams of the given string.

`getCharFrequency`(str: string) - Returns an object with the frequency of each character in the given string.

`getCommonPrefix`(str1: string, str2: string) - Returns the longest common prefix of the two given strings.

`getCommonSuffix`(str1: string, str2: string) - Returns the longest common suffix of the two given strings.

`getDigitCount`(str: string) - Returns the number of digits in the given string.

`getFirstChar`(str: string) - Returns the first character of the given string.

`getLastChar`(str: string) - Returns the last character of the given string.

`getLetterCount`(str: string) - Returns the number of letters in the given string.

`getLongestCommonSubstring`(str1: string, str2: string) - Returns the longest common substring of the two given strings.

`getLongestWord`(str: string) - Returns the longest word in the given string.

`getMatchingWords`(str: string, dictionary: string[]) - Returns an array of all words in the given dictionary that can be formed using the characters of the given string, 20 by 20, wait my order to continue with the next 20.

`getRandomSubstring`(str: string, length: number) - Returns a random substring of the given length from the given string.

`getShortestWord`(str: string) - Returns the shortest word in the given string.

`getSpecialCharCount`(str: string) - Returns the number of special characters in the given string.

`getStringDistance`(str1: string, str2: string) - Returns the distance between the two given strings, as a number.

`getUniqueChars`(str: string) - Returns an array of all unique characters in the given string.

`getWordCount`(str: string) - Returns the number of words in the given string.

`isPalindrome`(str: string) - Returns true if the given string is a palindrome (a word, phrase, or sequence that reads the same backwards as forwards), false otherwise.

`isValidNumber`(str: string) - Returns true if the given string represents a valid number, false otherwise.

`joinArray`(arr: any[], separator: string) - Joins the elements of the given array into a single string, separated by the given separator.

`longestContaining`(str: string, search: string) - Returns the longest substring of the given string that contains the given search string.

`pad`(str: string, length: number, char: string) - Pads the given string with the given character to the given length.

`removeCharacters`(str: string, characters: string) - Removes all occurrences of the given characters from the given string.

`removeFirst`(str: string, n: number) - Removes the first n characters from the given string.

`removeLast`(str: string, n: number) - Removes the last n characters from the given string.

`removeSpecialCharacters`(str: string) - Removes all special characters from the given string.

`removeSpaces`(str: string) - Removes all spaces from the given string.

`removeWords`(str: string, words: string[]) - Removes all occurrences of the given words from the given string.

`replaceAll`(str: string, search: string, replace: string) - Replaces all occurrences of the given search string with the given replace string in the given string.

`replaceMultiple`(str: string, replace: object) - Replaces multiple strings in the given string according to the given replace object.

`replaceWords`(str: string, search: string, replace: string) - Replaces all occurrences of the given search word with the given replace word in the given string.

`reverse`(str: string) - Returns the reversed version of the given string.

`shortestContaining`(str: string, search: string) - Returns the shortest substring of the given string that contains the given search string.

`splitString`(str: string, separator: string) - Splits the given string into an array of substrings using the given separator.

`startsWith`(str: string, prefix: string) - Returns true if the given string starts with the given prefix, false otherwise.

`toCamelCase`(str: string) - Converts the given string to camel case.

`toKebabCase`(str: string) - Converts the given string to kebab case.

`toLowerCaseFirst`(str: string) - Converts the first character of the given string to lower case.

`toPascalCase`(str: string) - Converts the given string to Pascal case.

`toSnakeCase`(str: string) - Converts the given string to snake case.

`toTitleCase`(str: string) - Converts the given string to title case.

`toUpperCaseFirst`(str: string) - Returns a new string with the first character of the given string converted to uppercase.

`truncate`(str: string, length: number, end: string) - Returns a new string with the given length, truncating the original string and adding the specified end string if the original string was longer than the specified length.

<br>

# Installation

To install the library, simply use npm:

```bash
npm install string-master
```

<br>

# Usage Examples

## `capitalize`

```
import { capitalize } from 'string-master';

capitalize('hello world'); // 'Hello world'
```

## `commonSubstring`

```
import { commonSubstring } from 'string-master';

commonSubstring('hello world', 'hello world'); // 'hello world'
```

## `countOccurrences`

```
import { countOccurrences } from 'string-master';

countOccurrences('hello world', 'l'); // 3
```

## `countWords`

```
import { countWords } from 'string-master';

countWords('hello world'); // 2
```

## `countWordsInString`

```
import { countWordsInString } from 'string-master';

countWordsInString('hello world'); // 2
```

## `endsWith`

```
import { endsWith } from 'string-master';

endsWith('hello world', 'world'); // true
```

## `findAllIndexes`

```
import { findAllIndexes } from 'string-master';

findAllIndexes('hello world', 'l'); // [2, 3, 9]
```

## `findIndex`

```
import { findIndex } from 'string-master';

findIndex('hello world', 'l'); // 2
```

## `format`

```
import { format } from 'string-master';

format('hello {0}', 'world'); // 'hello world'
```

## `getAllPosition`

```
import { getAllPosition } from 'string-master';

getAllPosition('hello world', 'l'); // [2, 3, 9]
```

## `getAnagrams`

```
import { getAnagrams } from 'string-master';

getAnagrams('hello world'); // ['hello world', 'world hello']
```

## `getCharFrequency`

```
import { getCharFrequency } from 'string-master';

getCharFrequency('hello world'); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```

## `getCommonPrefix`

```
import { getCommonPrefix } from 'string-master';

getCommonPrefix('hello world', 'hello world'); // 'hello world'
```

## `getCommonSuffix`

```
import { getCommonSuffix } from 'string-master';

getCommonSuffix('hello world', 'hello world'); // 'hello world'
```

## `getDigitCount`

```
import { getDigitCount } from 'string-master';

getDigitCount('hello world'); // 0
```

## `getFirstChar`

```
import { getFirstChar } from 'string-master';

getFirstChar('hello world'); // 'h'
```

## `getLastChar`

```
import { getLastChar } from 'string-master';

getLastChar('hello world'); // 'd'
```

## `getLetterCount`

```
import { getLetterCount } from 'string-master';

getLetterCount('hello world'); // 10
```

## `getLongestCommonSubstring`

```
import { getLongestCommonSubstring } from 'string-master';

getLongestCommonSubstring('hello world', 'hello world'); // 'hello world'
```

## `getLongestWord`

```
import { getLongestWord } from 'string-master';

getLongestWord('hello world'); // 'hello'
```

## `getMatchingWords`

```
import { getMatchingWords } from 'string-master';

getMatchingWords('hello world', 'hello world'); // ['hello', 'world']
```

## `getRandomSubstring`

```
import { getRandomSubstring } from 'string-master';

getRandomSubstring('hello world'); // 'hello'
```

## `getShortestWord`

```
import { getShortestWord } from 'string-master';

getShortestWord('hello world'); // 'world'
```

## `getSpecialCharCount`

```
import { getSpecialCharCount } from 'string-master';

getSpecialCharCount('hello world'); // 0
```

## `getStringDistance`

```
import { getStringDistance } from 'string-master';

getStringDistance('hello world', 'hello world'); // 0
```

## `getUniqueChars`

```
import { getUniqueChars } from 'string-master';

getUniqueChars('hello world'); // ['h', 'e', 'l', 'o', 'w', 'r', 'd']
```

## `getWordCount`

```
import { getWordCount } from 'string-master';

getWordCount('hello world'); // 2
```

## `isPalindrome`

```
import { isPalindrome } from 'string-master';

isPalindrome('hello world'); // false
```

## `isValidNumber`

```
import { isValidNumber } from 'string-master';

isValidNumber('hello world'); // false
```

## `joinArray`

```
import { joinArray } from 'string-master';

joinArray(['hello', 'world']); // 'hello world'
```

## `longestContaining`

```
import { longestContaining } from 'string-master';

longestContaining('hello world', 'hello world'); // 'hello world'
```

## `pad`

```
import { pad } from 'string-master';

pad('hello world', 20, ' '); // 'hello world         '
```

## `removeCharacters`

```
import { removeCharacters } from 'string-master';

removeCharacters('hello world', 'l'); // 'heo word'
```

## `removeFirst`

```
import { removeFirst } from 'string-master';

removeFirst('hello world', 'l'); // 'heo world'
```

## `removeLast`

```
import { removeLast } from 'string-master';

removeLast('hello world', 'l'); // 'hello worl'
```

## `removeSpecialCharacters`

```
import { removeSpecialCharacters } from 'string-master';

removeSpecialCharacters('hello world'); // 'hello world'
```

## `removeSpaces`

```
import { removeSpaces } from 'string-master';

removeSpaces('hello world'); // 'helloworld'
```

## `removeWords`

```
import { removeWords } from 'string-master';

removeWords('hello world', 'hello'); // 'world'
```

## `replaceAll`

```
import { replaceAll } from 'string-master';

replaceAll('hello world', 'l', 'x'); // 'hexxo worxd'
```

## `replaceMultiple`

```
import { replaceMultiple } from 'string-master';

replaceMultiple('hello world', { l: 'x', o: 'y' }); // 'hexxy wyrd'
```

## `replaceWords`

```
import { replaceWords } from 'string-master';

replaceWords('hello world', 'hello', 'hi'); // 'hi world'
```

## `reverse`

```
import { reverse } from 'string-master';

reverse('hello world'); // 'dlrow olleh'
```

## `shortestContaining`

```
import { shortestContaining } from 'string-master';

shortestContaining('hello world', 'hello world'); // 'hello world'
```

## `split`

```
import { split } from 'string-master';

split('hello world'); // ['hello', 'world']
```

## `startsWith`

```
import { startsWith } from 'string-master';

startsWith('hello world', 'hello'); // true
```

## `toCamelCase`

```
import { toCamelCase } from 'string-master';

toCamelCase('hello world'); // 'helloWorld'
```

## `toKebabCase`

```
import { toKebabCase } from 'string-master';

toKebabCase('hello world'); // 'hello-world'
```

## `toPascalCase`

```
import { toPascalCase } from 'string-master';

toPascalCase('hello world'); // 'HelloWorld'
```

## `toSnakeCase`

```
import { toSnakeCase } from 'string-master';

toSnakeCase('hello world'); // 'hello_world'
```

## `toTitleCase`

```
import { toTitleCase } from 'string-master';

toTitleCase('hello world'); // 'Hello World'
```

## `toUpperCaseFirst`

```
import { toUpperCaseFirst } from 'string-master';

toUpperCaseFirst('hello world'); // 'Hello world'
```

## `truncate`

```
import { truncate } from 'string-master';

truncate('hello world', 5); // 'hello...'
```

# License

This library is released under the MIT License. See the LICENSE file for more details.
