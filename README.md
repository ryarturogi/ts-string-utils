# String Utilities Library

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

`filter`(str: string, filter: string | RegExp, replaceWith: string = '', options: string = 'g') - Replaces all occurrences of the specified filter with the given replaceWith string in the input string, and allows for the option to specify RegExp flags for the filter.

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

`splitByWords`(text: string, separator: string = ' ') - Splits a string into an array of words separated by the specified separator.

`splitByLines`(text: string) - Splits a string into an array of lines.

`repeatString`(str: string, count: number) - Repeats the given string the specified number of times.

`insertString`(str: string, index: number, insert: string) - Inserts the given string at the specified index in the given string.

`substringBefore`(str: string, separator: string) - Returns the substring of the given string before the first occurrence of the given separator.

`substringAfter`(str: string, separator: string) - Returns the substring of the given string after the first occurrence of the given separator.

`substringBetween`(str: string, start: string, end: string) - Returns the substring of the given string between the first occurrence of the given start and end strings.

`leftPad`(str: string, length: number, char: string) - Pads the given string with the given character to the given length on the left.

`rightPad`(str: string, length: number, char: string) - Pads the given string with the given character to the given length on the right.

`sliceString`(str: string, start: number, end: number) - Returns a new string with the characters between the specified start and end indices.

`splitAt`(str: string, index: number) - Splits the given string at the specified index.

`getNthIndex`(str: string, search: string, n: number) - Returns the index of the nth occurrence of the given search string in the given string.

`trimLeft`(str: string, chars: string) - Trims the given characters from the left side of the given string.

`trimRight`(str: string, chars: string) - Trims the given characters from the right side of the given string.

`trimBoth`(str: string, chars: string) - Trims the given characters from both sides of the given string.

`removeDuplicates`(str: string) - Removes duplicate characters from the given string.

`contains`(str: string, search: string) - Returns true if the given string contains the given search string, false otherwise.

<br>

# Installation

To install the library, simply use npm:

```bash
npm install ts-string-utilities // yarn add ts-string-utilities
```

<br>

# Usage Examples

## `capitalize`

```
import { capitalize } from 'ts-string-utilities';

capitalize('hello world'); // 'Hello world'
```

## `commonSubstring`

```
import { commonSubstring } from 'ts-string-utilities';

commonSubstring('hello world', 'hello world'); // 'hello world'
```

## `countOccurrences`

```
import { countOccurrences } from 'ts-string-utilities';

countOccurrences('hello world', 'l'); // 3
```

## `countWords`

```
import { countWords } from 'ts-string-utilities';

countWords('hello world'); // 2
```

## `countWordsInString`

```
import { countWordsInString } from 'ts-string-utilities';

countWordsInString('hello world'); // 2
```

## `endsWith`

```
import { endsWith } from 'ts-string-utilities';

endsWith('hello world', 'world'); // true
```

## `findAllIndexes`

```
import { findAllIndexes } from 'ts-string-utilities';

findAllIndexes('hello world', 'l'); // [2, 3, 9]
```

## `findIndex`

```
import { findIndex } from 'ts-string-utilities';

findIndex('hello world', 'l'); // 2
```

## `filterString`

```
import { filterString } from 'ts-string-utilities';

filterString('Hello world', 'l'); // 'Heo word'
filterString('Hello world', /l/g, 'x'); // 'Hexxo worxd'
```

## `format`

```
import { format } from 'ts-string-utilities';

format('hello {0}', 'world'); // 'hello world'
```

## `getAllPosition`

```
import { getAllPosition } from 'ts-string-utilities';

getAllPosition('hello world', 'l'); // [2, 3, 9]
```

## `getAnagrams`

```
import { getAnagrams } from 'ts-string-utilities';

getAnagrams('hello world'); // ['hello world', 'world hello']
```

## `getCharFrequency`

```
import { getCharFrequency } from 'ts-string-utilities';

getCharFrequency('hello world'); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```

## `getCommonPrefix`

```
import { getCommonPrefix } from 'ts-string-utilities';

getCommonPrefix('hello world', 'hello world'); // 'hello world'
```

## `getCommonSuffix`

```
import { getCommonSuffix } from 'ts-string-utilities';

getCommonSuffix('hello world', 'hello world'); // 'hello world'
```

## `getDigitCount`

```
import { getDigitCount } from 'ts-string-utilities';

getDigitCount('hello world'); // 0
```

## `getFirstChar`

```
import { getFirstChar } from 'ts-string-utilities';

getFirstChar('hello world'); // 'h'
```

## `getLastChar`

```
import { getLastChar } from 'ts-string-utilities';

getLastChar('hello world'); // 'd'
```

## `getLetterCount`

```
import { getLetterCount } from 'ts-string-utilities';

getLetterCount('hello world'); // 10
```

## `getLongestCommonSubstring`

```
import { getLongestCommonSubstring } from 'ts-string-utilities';

getLongestCommonSubstring('hello world', 'hello world'); // 'hello world'
```

## `getLongestWord`

```
import { getLongestWord } from 'ts-string-utilities';

getLongestWord('hello world'); // 'hello'
```

## `getMatchingWords`

```
import { getMatchingWords } from 'ts-string-utilities';

getMatchingWords('hello world', 'hello world'); // ['hello', 'world']
```

## `getRandomSubstring`

```
import { getRandomSubstring } from 'ts-string-utilities';

getRandomSubstring('hello world'); // 'hello'
```

## `getShortestWord`

```
import { getShortestWord } from 'ts-string-utilities';

getShortestWord('hello world'); // 'world'
```

## `getSpecialCharCount`

```
import { getSpecialCharCount } from 'ts-string-utilities';

getSpecialCharCount('hello world'); // 0
```

## `getStringDistance`

```
import { getStringDistance } from 'ts-string-utilities';

getStringDistance('hello world', 'hello world'); // 0
```

## `getUniqueChars`

```
import { getUniqueChars } from 'ts-string-utilities';

getUniqueChars('hello world'); // ['h', 'e', 'l', 'o', 'w', 'r', 'd']
```

## `getWordCount`

```
import { getWordCount } from 'ts-string-utilities';

getWordCount('hello world'); // 2
```

## `isPalindrome`

```
import { isPalindrome } from 'ts-string-utilities';

isPalindrome('hello world'); // false
```

## `isValidNumber`

```
import { isValidNumber } from 'ts-string-utilities';

isValidNumber('hello world'); // false
```

## `joinArray`

```
import { joinArray } from 'ts-string-utilities';

joinArray(['hello', 'world']); // 'hello world'
```

## `longestContaining`

```
import { longestContaining } from 'ts-string-utilities';

longestContaining('hello world', 'hello world'); // 'hello world'
```

## `pad`

```
import { pad } from 'ts-string-utilities';

pad('hello world', 20, ' '); // 'hello world         '
```

## `removeCharacters`

```
import { removeCharacters } from 'ts-string-utilities';

removeCharacters('hello world', 'l'); // 'heo word'
```

## `removeFirst`

```
import { removeFirst } from 'ts-string-utilities';

removeFirst('hello world', 'l'); // 'heo world'
```

## `removeLast`

```
import { removeLast } from 'ts-string-utilities';

removeLast('hello world', 'l'); // 'hello worl'
```

## `removeSpecialCharacters`

```
import { removeSpecialCharacters } from 'ts-string-utilities';

removeSpecialCharacters('hello world'); // 'hello world'
```

## `removeSpaces`

```
import { removeSpaces } from 'ts-string-utilities';

removeSpaces('hello world'); // 'helloworld'
```

## `removeWords`

```
import { removeWords } from 'ts-string-utilities';

removeWords('hello world', 'hello'); // 'world'
```

## `replaceAll`

```
import { replaceAll } from 'ts-string-utilities';

replaceAll('hello world', 'l', 'x'); // 'hexxo worxd'
```

## `replaceMultiple`

```
import { replaceMultiple } from 'ts-string-utilities';

replaceMultiple('hello world', { l: 'x', o: 'y' }); // 'hexxy wyrd'
```

## `replaceWords`

```
import { replaceWords } from 'ts-string-utilities';

replaceWords('hello world', 'hello', 'hi'); // 'hi world'
```

## `reverse`

```
import { reverse } from 'ts-string-utilities';

reverse('hello world'); // 'dlrow olleh'
```

## `shortestContaining`

```
import { shortestContaining } from 'ts-string-utilities';

shortestContaining('hello world', 'hello world'); // 'hello world'
```

## `split`

```
import { split } from 'ts-string-utilities';

split('hello world'); // ['hello', 'world']
```

## `startsWith`

```
import { startsWith } from 'ts-string-utilities';

startsWith('hello world', 'hello'); // true
```

## `toCamelCase`

```
import { toCamelCase } from 'ts-string-utilities';

toCamelCase('hello world'); // 'helloWorld'
```

## `toKebabCase`

```
import { toKebabCase } from 'ts-string-utilities';

toKebabCase('hello world'); // 'hello-world'
```

## `toPascalCase`

```
import { toPascalCase } from 'ts-string-utilities';

toPascalCase('hello world'); // 'HelloWorld'
```

## `toSnakeCase`

```
import { toSnakeCase } from 'ts-string-utilities';

toSnakeCase('hello world'); // 'hello_world'
```

## `toTitleCase`

```
import { toTitleCase } from 'ts-string-utilities';

toTitleCase('hello world'); // 'Hello World'
```

## `toUpperCaseFirst`

```
import { toUpperCaseFirst } from 'ts-string-utilities';

toUpperCaseFirst('hello world'); // 'Hello world'
```

## `truncate`

```
import { truncate } from 'ts-string-utilities';

truncate('hello world', 5); // 'hello...'
```

## `splitByWords`

```
import { splitByWords } from 'ts-string-utilities';

splitByWords('hello world'); // ['hello', 'world']
```

## `splitByLines`

```
import { splitByLines } from 'ts-string-utilities';

splitByLines('hello\nworld'); // ['hello', 'world']
```

## `repeatString`

```
import { repeatString } from 'ts-string-utilities';

repeatString('hello', 3); // 'hellohellohello'
```

## `insertString`

```
import { insertString } from 'ts-string-utilities';

insertString('hello world', '!', 5); // 'hello! world'
```

## `wrapString`

```
import { wrapString } from 'ts-string-utilities';

wrapString('hello world', '(', ')'); // '(hello world)'
```

## `substringBefore`

```
import { substringBefore } from 'ts-string-utilities';

substringBefore('hello world', ' '); // 'hello'
```

## `substringAfter`

```
import { substringAfter } from 'ts-string-utilities';

substringAfter('hello world', ' '); // 'world'
```

## `substringBetween`

```
import { substringBetween } from 'ts-string-utilities';

substringBetween('hello world', ' ', ' '); // 'world'
```

## `leftPad`

```
import { leftPad } from 'ts-string-utilities';

leftPad('hello world', 20, ' '); // '         hello world'
```

## `rightPad`

```
import { rightPad } from 'ts-string-utilities';

rightPad('hello world', 20, ' '); // 'hello world         '
```

## `slideString`

```
import { slideString } from 'ts-string-utilities';

slideString('hello world', 3); // 'lo worldh'
```

## `splitAt`

```
import { splitAt } from 'ts-string-utilities';

splitAt('hello world', 3); // ['hel', 'lo world']
```

## `getNthIndex`

```
import { getNthIndex } from 'ts-string-utilities';

getNthIndex('hello world', 'l', 2); // 3
```

## `trimLeft`

```
import { trimLeft } from 'ts-string-utilities';

trimLeft(' hello world'); // 'hello world'
```

## `trimRight`

```
import { trimRight } from 'ts-string-utilities';

trimRight('hello world '); // 'hello world'
```

## `trimBoth`

```
import { trimBoth } from 'ts-string-utilities';

trimBoth(' hello world '); // 'hello world'
```

## `removeDuplicates`

```
import { removeDuplicates } from 'ts-string-utilities';

removeDuplicates('hello world'); // 'helo wrd'
```

## `contains`

```
import { contains } from 'ts-string-utilities';

contains('hello world', 'hello'); // true
```

# License

This library is released under the MIT License. See the LICENSE file for more details.
