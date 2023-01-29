"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosition = exports.isValidNumber = exports.replaceMultiple = exports.commonSubstring = exports.shortestContaining = exports.longestContaining = exports.countWordsInString = exports.endsWith = exports.startsWith = exports.findIndex = exports.joinArray = exports.splitString = exports.removeCharacters = exports.getMatchingWords = exports.getAnagrams = exports.getRandomSubstring = exports.getStringDistance = exports.getCharFrequency = exports.getShortestWord = exports.getLongestWord = exports.getUniqueChars = exports.getLastChar = exports.getFirstChar = exports.getSpecialCharCount = exports.getDigitCount = exports.getLetterCount = exports.getWordCount = exports.countWords = exports.replaceWords = exports.removeWords = exports.removeLast = exports.removeFirst = exports.removeSpecialCharacters = exports.toLowerCaseFirst = exports.toUpperCaseFirst = exports.toPascalCase = exports.toKebabCase = exports.toSnakeCase = exports.toCamelCase = exports.randomize = exports.capitalize = exports.pad = exports.countOccurrences = exports.removeSpaces = exports.reverse = exports.isPalindrome = exports.format = exports.toTitleCase = exports.truncate = exports.replaceAll = void 0;
exports.getLongestCommonSubstring = exports.getCommonSuffix = exports.getCommonPrefix = exports.findAllIndexes = void 0;
const helpers_1 = require("./helpers");
const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(find, 'g'), replace);
};
exports.replaceAll = replaceAll;
const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + '...' : str;
};
exports.truncate = truncate;
const toTitleCase = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    })
        .join(' ');
};
exports.toTitleCase = toTitleCase;
const format = (template, ...args) => {
    return template.replace(/{(\d+)}/g, (match, i) => {
        return typeof args[i] !== 'undefined' ? args[i] : match;
    });
};
exports.format = format;
const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
};
exports.isPalindrome = isPalindrome;
const reverse = (str) => {
    return str.split('').reverse().join('');
};
exports.reverse = reverse;
const removeSpaces = (str) => {
    return str.replace(/\s/g, '');
};
exports.removeSpaces = removeSpaces;
const countOccurrences = (str, substring) => {
    return str.split(substring).length - 1;
};
exports.countOccurrences = countOccurrences;
const pad = (str, length, char) => {
    if (str.length >= length) {
        return str;
    }
    let padding = char.repeat(length - str.length);
    return padding + str;
};
exports.pad = pad;
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
exports.capitalize = capitalize;
const randomize = (str) => {
    let arr = str.split('');
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let j = i + Math.floor(Math.random() * (n - i));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr.join('');
};
exports.randomize = randomize;
function toCamelCase(str) {
    if (str === null) {
        return '';
    }
    function replacer(_, p1) {
        return (0, exports.capitalize)(p1.toLowerCase());
    }
    const RE_WHITESPACE = /\s+/g;
    const RE_SPECIAL = /[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g; // eslint-disable-line no-useless-escape
    const RE_TO_CAMEL = /(?:\s|^)([^\s]+)(?=\s|$)/g;
    const RE_CAMEL = /([a-z0-9])([A-Z])/g;
    str = str.replace(RE_SPECIAL, ' ');
    str = str.replace(RE_WHITESPACE, ' ');
    str = str.replace(RE_CAMEL, '$1 $2');
    str = str.trim();
    str = (0, helpers_1.replace)(str, RE_TO_CAMEL, replacer);
    return str.charAt(0).toLowerCase() + str.slice(1);
}
exports.toCamelCase = toCamelCase;
const toSnakeCase = (str) => {
    if (!str)
        return '';
    str = str.replace(/[\s-]/g, '_');
    str = str.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
    str = str.replace(/__+/g, '_');
    return str.replace(/^_|_$/g, '');
};
exports.toSnakeCase = toSnakeCase;
function toKebabCase(str) {
    if (!str || str.trim() === '') {
        return '';
    }
    return str
        .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
        .replace(/[_ ]/g, '-')
        .replace(/[-]{2,}/g, '-')
        .replace(/^-/, '')
        .replace(/-$/, '');
}
exports.toKebabCase = toKebabCase;
function toPascalCase(str) {
    if (str === null) {
        return '';
    }
    function replacer(_, p1) {
        return (0, exports.capitalize)(p1.toLowerCase());
    }
    const RE_WHITESPACE = /\s+/g;
    const RE_SPECIAL = /[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g; // eslint-disable-line no-useless-escape
    const RE_TO_PASCAL = /(?:\s|^)([^\s]+)(?=\s|$)/g;
    const RE_CAMEL = /([a-z0-9])([A-Z])/g;
    str = str.replace(RE_SPECIAL, ' ');
    str = str.replace(RE_WHITESPACE, ' ');
    str = str.replace(RE_CAMEL, '$1 $2');
    str = str.trim();
    return (0, helpers_1.replace)(str, RE_TO_PASCAL, replacer);
}
exports.toPascalCase = toPascalCase;
const toUpperCaseFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.toUpperCaseFirst = toUpperCaseFirst;
const toLowerCaseFirst = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
};
exports.toLowerCaseFirst = toLowerCaseFirst;
const removeSpecialCharacters = (str) => {
    return str.replace(/[^\w\s]/gi, '');
};
exports.removeSpecialCharacters = removeSpecialCharacters;
const removeFirst = (str, n) => {
    if (typeof str !== 'string' || typeof n !== 'number') {
        return undefined;
    }
    if (!str || typeof str !== 'string' || str.length === 0) {
        throw new Error('A non-empty valid string is required as the first parameter');
    }
    if (!n || typeof n !== 'number' || n < 0) {
        throw new Error('A valid number greater than or equal to 0 is required as the second parameter');
    }
    if (n >= str.length)
        return str;
    return str.slice(n);
};
exports.removeFirst = removeFirst;
const removeLast = (str, n) => {
    if (n <= 0) {
        return str;
    }
    return str.slice(0, -n);
};
exports.removeLast = removeLast;
const removeWords = (str, words) => {
    words.map((word) => {
        str = str.replace(new RegExp(`\\s*\\b${word}\\b\\s*`, 'gi'), ' ');
    });
    return str.trim();
};
exports.removeWords = removeWords;
const replaceWords = (str, words) => {
    for (let word in words) {
        str = str.replace(new RegExp(`\\b${word}\\b`, 'gi'), words[word]);
    }
    return str;
};
exports.replaceWords = replaceWords;
const countWords = (str) => {
    if (str.length === 0)
        return 0;
    return str.split(/\s+/g).length;
};
exports.countWords = countWords;
const getWordCount = (str) => {
    if (!str || /^\s*$/.test(str)) {
        return 0;
    }
    return str.split(/\s+/).length;
};
exports.getWordCount = getWordCount;
const getLetterCount = (str) => {
    return (str.match(/[a-zA-Z]/g) || []).length;
};
exports.getLetterCount = getLetterCount;
const getDigitCount = (str) => {
    return str.replace(/[^0-9]/g, '').length;
};
exports.getDigitCount = getDigitCount;
const getSpecialCharCount = (str) => {
    return (str.match(/[^a-zA-Z0-9\s]/g) || []).length;
};
exports.getSpecialCharCount = getSpecialCharCount;
const getFirstChar = (str) => {
    return str.charAt(0);
};
exports.getFirstChar = getFirstChar;
const getLastChar = (str) => {
    return str.slice(-1);
};
exports.getLastChar = getLastChar;
const getUniqueChars = (str) => {
    return Array.from(new Set(str.split('').filter((char) => char !== ' ')));
};
exports.getUniqueChars = getUniqueChars;
const getLongestWord = (str) => {
    const words = str.split(' ');
    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};
exports.getLongestWord = getLongestWord;
const getShortestWord = (str) => {
    return str
        .split(' ')
        .reduce((a, b) => a.length < b.length ? a : a.length === b.length ? (a < b ? a : b) : b);
};
exports.getShortestWord = getShortestWord;
const getCharFrequency = (str) => {
    let charFrequency = new Map();
    for (let char of str.split('')) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
    return charFrequency;
};
exports.getCharFrequency = getCharFrequency;
const getStringDistance = (str, otherString) => {
    let m = str.length;
    let n = otherString.length;
    let d = [];
    // Initialize the 2D array with 0
    for (let i = 0; i <= m; i++) {
        d[i] = [];
        for (let j = 0; j <= n; j++) {
            d[i][j] = 0;
        }
    }
    // Fill in the first row and first column with the distance
    for (let i = 1; i <= m; i++) {
        d[i][0] = i;
    }
    for (let j = 1; j <= n; j++) {
        d[0][j] = j;
    }
    // Iterate through the 2D array and fill in the distance
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= m; i++) {
            if (str[i - 1] == otherString[j - 1]) {
                d[i][j] = d[i - 1][j - 1];
            }
            else {
                d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + 1);
            }
        }
    }
    return d[m][n];
};
exports.getStringDistance = getStringDistance;
const getRandomSubstring = (str, length) => {
    let start = Math.floor(Math.random() * (str.length - length));
    return str.substring(start, start + length);
};
exports.getRandomSubstring = getRandomSubstring;
const getAnagrams = (str) => {
    let result = [];
    const anagramHelper = (prefix, remaining) => {
        if (remaining.length === 0) {
            if (prefix !== '') {
                result.push(prefix);
            }
        }
        else {
            for (let i = 0; i < remaining.length; i++) {
                let current = remaining.substring(i, i + 1);
                let before = remaining.substring(0, i);
                let after = remaining.substring(i + 1);
                anagramHelper(prefix + current, before + after);
            }
        }
    };
    anagramHelper('', str);
    return result;
};
exports.getAnagrams = getAnagrams;
const getMatchingWords = (str, dictionary) => {
    return dictionary.filter((word) => word.toLowerCase() === str.toLowerCase());
};
exports.getMatchingWords = getMatchingWords;
const removeCharacters = (str, characters) => {
    return str
        .split('')
        .filter((char) => !characters.includes(char))
        .join('');
};
exports.removeCharacters = removeCharacters;
const splitString = (str, delimiter) => {
    return str.split(delimiter);
};
exports.splitString = splitString;
const joinArray = (arr, delimiter) => {
    return arr.join(delimiter);
};
exports.joinArray = joinArray;
const findIndex = (str, substring) => {
    return str.indexOf(substring);
};
exports.findIndex = findIndex;
const startsWith = (str, substring) => {
    return str.startsWith(substring);
};
exports.startsWith = startsWith;
const endsWith = (str, substring) => {
    return str.endsWith(substring);
};
exports.endsWith = endsWith;
const countWordsInString = (str) => {
    return str.split(' ').length;
};
exports.countWordsInString = countWordsInString;
const longestContaining = (str, characters) => {
    let longest = '';
    str.split(' ').forEach((word) => {
        if (characters.split('').every((char) => word.includes(char)) &&
            word.length > longest.length) {
            longest = word;
        }
    });
    return longest;
};
exports.longestContaining = longestContaining;
const shortestContaining = (sentence, search) => {
    let result = '';
    const words = sentence.split(' ');
    for (const word of words) {
        let containsAll = true;
        for (const char of search) {
            if (!word.includes(char)) {
                containsAll = false;
                break;
            }
        }
        if (containsAll && (result === '' || word.length < result.length)) {
            result = word;
        }
    }
    return result;
};
exports.shortestContaining = shortestContaining;
const commonSubstring = (str, n) => {
    if (!str || str.length < n)
        return undefined;
    const substrings = new Map();
    for (let i = 0; i < str.length - n + 1; i++) {
        const substring = str.substring(i, i + n);
        if (substrings.has(substring)) {
            substrings.set(substring, (substrings.get(substring) || 0) + 1);
        }
        else {
            substrings.set(substring, 1);
        }
    }
    let common = '';
    let count = 0;
    substrings.forEach((value, key) => {
        if (value > count) {
            common = key;
            count = value;
        }
    });
    return count > 1 ? common : undefined;
};
exports.commonSubstring = commonSubstring;
const replaceMultiple = (str, replacements) => {
    let newString = str;
    Object.keys(replacements).forEach((key) => {
        newString = newString.split(key).join(replacements[key]);
    });
    return newString;
};
exports.replaceMultiple = replaceMultiple;
const isValidNumber = (str) => {
    return !isNaN(Number(str));
};
exports.isValidNumber = isValidNumber;
const getAllPosition = (str, substring) => {
    let positions = [];
    let position = str.indexOf(substring);
    while (position !== -1) {
        positions.push(position);
        position = str.indexOf(substring, position + 1);
    }
    return positions;
};
exports.getAllPosition = getAllPosition;
const findAllIndexes = (str, substring) => {
    const indexes = [];
    let i = str.indexOf(substring);
    while (i !== -1) {
        indexes.push(i);
        i = str.indexOf(substring, i + 1);
    }
    return indexes;
};
exports.findAllIndexes = findAllIndexes;
const getCommonPrefix = (strings) => {
    if (strings.length === 0) {
        return '';
    }
    if (strings.length === 1) {
        return strings[0];
    }
    let commonPrefix = strings[0];
    for (let i = 1; i < strings.length; i++) {
        const currentString = strings[i];
        let j = 0;
        for (; j < commonPrefix.length; j++) {
            if (commonPrefix[j] !== currentString[j]) {
                break;
            }
        }
        commonPrefix = commonPrefix.slice(0, j);
    }
    return commonPrefix;
};
exports.getCommonPrefix = getCommonPrefix;
const getCommonSuffix = (strings) => {
    if (strings.length === 0) {
        return '';
    }
    let suffix = strings[0];
    for (let i = 1; i < strings.length; i++) {
        while (!strings[i].endsWith(suffix) && suffix.length > 0) {
            suffix = suffix.slice(1);
        }
        if (suffix.length === 0) {
            return '';
        }
    }
    return suffix;
};
exports.getCommonSuffix = getCommonSuffix;
const getLongestCommonSubstring = (str1, str2) => {
    let longestCommonSubstring = '';
    let currentLongest = 0;
    let matrix = new Array(str1.length + 1);
    for (let i = 0; i <= str1.length; i++) {
        matrix[i] = new Array(str2.length + 1).fill(0);
    }
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
                if (matrix[i][j] > currentLongest) {
                    currentLongest = matrix[i][j];
                    let start = str1.substr(i - currentLongest, currentLongest);
                    longestCommonSubstring = start;
                }
            }
        }
    }
    return longestCommonSubstring;
};
exports.getLongestCommonSubstring = getLongestCommonSubstring;
