"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitByWords = exports.splitByLines = exports.shortestContaining = exports.reverse = exports.replaceWords = exports.replaceMultiple = exports.replaceAll = exports.removeWords = exports.removeSpecialCharacters = exports.removeSpaces = exports.removeLast = exports.removeFirst = exports.removeDuplicates = exports.removeCharacters = exports.randomize = exports.pad = exports.longestContaining = exports.joinArray = exports.isValidNumber = exports.isPalindrome = exports.insertString = exports.getWordCount = exports.getUniqueChars = exports.getStringDistance = exports.getSpecialCharCount = exports.getShortestWord = exports.getRandomSubstring = exports.getNthIndex = exports.getMatchingWords = exports.getLongestWord = exports.getLongestCommonSubstring = exports.getLetterCount = exports.getLastChar = exports.getFirstChar = exports.getDigitCount = exports.getCommonSuffix = exports.getCharFrequency = exports.getAnagrams = exports.getAllPosition = exports.format = exports.findIndex = exports.findAllIndexes = exports.filterString = exports.endsWith = exports.countWordsInString = exports.countWords = exports.countOccurrences = exports.contains = exports.commonSubstring = exports.capitalize = void 0;
exports.getCommonPrefix = exports.repeatString = exports.substringBetween = exports.leftPad = exports.rightPad = exports.sliceString = exports.splitAt = exports.wrapString = exports.truncate = exports.trimRight = exports.trimLeft = exports.trimBoth = exports.toUpperCaseFirst = exports.toTitleCase = exports.toSnakeCase = exports.toPascalCase = exports.toLowerCaseFirst = exports.toKebabCase = exports.toCamelCase = exports.substringBefore = exports.substringAfter = exports.startsWith = exports.splitString = void 0;
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
    if (!str)
        return str;
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    })
        .join(' ');
};
exports.toTitleCase = toTitleCase;
const filterString = (str, filter = '', replaceWith = '', options = 'g') => {
    if (!str)
        return str;
    const regex = typeof filter === 'string'
        ? new RegExp(filter, options + (options.includes('g') ? '' : 'g'))
        : filter;
    return str.replace(regex, replaceWith);
};
exports.filterString = filterString;
const format = (template, ...args) => {
    if (!template)
        return template;
    let result = '';
    for (let i = 0; i < template.length; i++) {
        const char = template[i];
        if (char === '{') {
            let placeholder = '';
            i++;
            while (template[i] !== '}') {
                placeholder += template[i];
                i++;
            }
            const argIndex = parseInt(placeholder, 10);
            if (argIndex >= 0 && argIndex < args.length) {
                result += args[argIndex].toString();
            }
            else {
                result += '{' + placeholder + '}';
            }
        }
        else {
            result += char;
        }
    }
    return result;
};
exports.format = format;
const isPalindrome = (str) => {
    let cleaned = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleaned += char;
        }
    }
    let start = 0;
    let end = cleaned.length - 1;
    while (start < end) {
        if (cleaned[start] !== cleaned[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};
exports.isPalindrome = isPalindrome;
const reverse = (str) => {
    if (!str)
        return str;
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};
exports.reverse = reverse;
const removeSpaces = (str) => {
    if (!str)
        return str;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ')
            result += str[i];
    }
    return result;
};
exports.removeSpaces = removeSpaces;
const countOccurrences = (str, substring) => {
    if (!str || !substring)
        return 0;
    let count = 0;
    let substringIndex = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === substring[substringIndex]) {
            substringIndex++;
        }
        else {
            substringIndex = 0;
        }
        if (substringIndex === substring.length) {
            count++;
            substringIndex = 0;
        }
    }
    return count;
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
    if (typeof str !== 'string')
        throw new TypeError('Input must be a string');
    let result = '';
    let capitalizing = true;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === ' ') {
            capitalizing = true;
        }
        else if (capitalizing) {
            result += char.toUpperCase();
            capitalizing = false;
        }
        else {
            result += char.toLowerCase();
        }
    }
    return result;
};
exports.capitalize = capitalize;
const randomize = (str) => {
    let arr = str.split('');
    let n = arr.length;
    for (let i = 0; i < 10; i++) {
        // shuffle the array 10 times
        for (let j = 0; j < n - 1; j++) {
            let k = j + Math.floor(Math.random() * (n - j));
            let tmp = arr[j];
            arr[j] = arr[k];
            arr[k] = tmp;
        }
    }
    return arr.join('');
};
exports.randomize = randomize;
const toCamelCase = (str) => {
    if (str === null) {
        return '';
    }
    const RE_WHITESPACE = /\s+/g;
    const RE_SPECIAL = /[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g; // eslint-disable-line no-useless-escape
    const RE_TO_CAMEL = /(?:\s|^)([^\s]+)(?=\s|$)/g;
    const RE_CAMEL = /([a-z0-9])([A-Z])/g;
    str = str.replace(RE_SPECIAL, ' ');
    str = str.replace(RE_WHITESPACE, ' ');
    str = str.replace(RE_CAMEL, '$1 $2');
    str = str.trim();
    str = (0, helpers_1.replace)(str, RE_TO_CAMEL, helpers_1.replacer);
    return str.charAt(0).toLowerCase() + str.slice(1);
};
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
const toKebabCase = (str) => {
    if (!str || str.trim() === '') {
        return '';
    }
    return str
        .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
        .replace(/[_ ]/g, '-')
        .replace(/[-]{2,}/g, '-')
        .replace(/^-/, '')
        .replace(/-$/, '');
};
exports.toKebabCase = toKebabCase;
const toPascalCase = (str) => {
    if (str === null) {
        return '';
    }
    const RE_WHITESPACE = /\s+/g;
    const RE_SPECIAL = /[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g; // eslint-disable-line no-useless-escape
    const RE_TO_PASCAL = /(?:\s|^)([^\s]+)(?=\s|$)/g;
    const RE_CAMEL = /([a-z0-9])([A-Z])/g;
    str = str.replace(RE_SPECIAL, ' ');
    str = str.replace(RE_WHITESPACE, ' ');
    str = str.replace(RE_CAMEL, '$1 $2');
    str = str.trim();
    return (0, helpers_1.replace)(str, RE_TO_PASCAL, helpers_1.replacer);
};
exports.toPascalCase = toPascalCase;
const toUpperCaseFirst = (str) => {
    if (!str)
        return '';
    const firstChar = str.charCodeAt(0);
    if (firstChar >= 97 && firstChar <= 122) {
        return String.fromCharCode(firstChar - 32) + str.slice(1);
    }
    return str;
};
exports.toUpperCaseFirst = toUpperCaseFirst;
const toLowerCaseFirst = (str) => {
    if (!str)
        return '';
    const firstChar = str.charCodeAt(0);
    if (firstChar >= 65 && firstChar <= 90) {
        return String.fromCharCode(firstChar + 32) + str.slice(1);
    }
    return str;
};
exports.toLowerCaseFirst = toLowerCaseFirst;
const removeSpecialCharacters = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (/^[a-zA-Z0-9\s]+$/.test(str[i])) {
            result += str[i];
        }
    }
    return result;
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
    if (typeof str !== 'string')
        throw new Error('First argument must be string');
    if (typeof n !== 'number')
        throw new Error('Second argument must be number');
    if (str.length === 0)
        return str;
    if (n <= 0)
        return str;
    return str.slice(0, -n);
};
exports.removeLast = removeLast;
const removeWords = (str, words) => {
    if (typeof str !== 'string')
        throw new Error('First argument must be string');
    if (!Array.isArray(words))
        throw new Error('Second argument must be an array of strings');
    for (const word of words) {
        if (typeof word !== 'string')
            throw new Error('Array element must be string');
    }
    if (str.length === 0)
        return str;
    for (const word of words) {
        str = str.replace(new RegExp(`\\s*\\b${word}\\b\\s*`, 'gi'), ' ');
    }
    return str.trim();
};
exports.removeWords = removeWords;
const replaceWords = (str, words) => {
    if (typeof str !== 'string')
        throw new Error('First argument must be string');
    if (typeof words !== 'object')
        throw new Error('Second argument must be an object');
    for (const word in words) {
        if (typeof words[word] !== 'string')
            throw new Error('Object values must be string');
    }
    for (const word in words) {
        str = str.replace(new RegExp(`\\b${word}\\b`, 'gi'), words[word]);
    }
    return str;
};
exports.replaceWords = replaceWords;
const countWords = (str) => {
    if (typeof str !== 'string')
        throw new Error('Input must be a string');
    if (str.length === 0)
        return 0;
    const words = str.match(/\b\w+\b/g) || [];
    return words.length;
};
exports.countWords = countWords;
const getWordCount = (str) => {
    if (typeof str !== 'string')
        throw new Error('Input must be a string');
    if (!str || !str.trim().length)
        return 0;
    const words = str.match(/\b\w+\b/g) || [];
    return words.length;
};
exports.getWordCount = getWordCount;
const getLetterCount = (str) => {
    if (!str) {
        return 0;
    }
    let count = 0;
    for (const char of str) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            count++;
        }
    }
    return count;
};
exports.getLetterCount = getLetterCount;
const getDigitCount = (str) => {
    if (!str) {
        return 0;
    }
    let count = 0;
    for (const char of str) {
        if (char >= '0' && char <= '9') {
            count++;
        }
    }
    return count;
};
exports.getDigitCount = getDigitCount;
const getSpecialCharCount = (str) => {
    if (!str) {
        return 0;
    }
    let count = 0;
    for (const char of str) {
        if (!(char >= 'a' && char <= 'z') &&
            !(char >= 'A' && char <= 'Z') &&
            !(char >= '0' && char <= '9') &&
            char !== ' ') {
            count++;
        }
    }
    return count;
};
exports.getSpecialCharCount = getSpecialCharCount;
const getFirstChar = (str) => {
    if (!str)
        return '';
    return str[0];
};
exports.getFirstChar = getFirstChar;
const getLastChar = (str) => {
    if (!str)
        return '';
    return str[str.length - 1];
};
exports.getLastChar = getLastChar;
const getUniqueChars = (str) => {
    const uniqueChars = new Set();
    for (const char of str) {
        if (char !== ' ') {
            uniqueChars.add(char);
        }
    }
    return Array.from(uniqueChars);
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
    const words = str.split(' ');
    let shortest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    return shortest;
};
exports.getShortestWord = getShortestWord;
const getCharFrequency = (str) => {
    let charFrequency = new Map();
    for (let char of str) {
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
    if (typeof str !== 'string') {
        throw new Error('The first argument must be a string');
    }
    if (typeof length !== 'number') {
        throw new Error('The second argument must be a number');
    }
    if (length < 1 || length > str.length) {
        throw new Error('The length argument must be within the range [1, str.length]');
    }
    const randomIndex = Math.floor(Math.random() * (str.length - length + 1));
    let result = '';
    for (let i = 0; i < length; i++) {
        result += str[randomIndex + i];
    }
    return result;
};
exports.getRandomSubstring = getRandomSubstring;
const getAnagrams = (str) => {
    if (typeof str !== 'string') {
        throw new Error('The argument must be a string');
    }
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
    if (typeof str !== 'string' || !Array.isArray(dictionary)) {
        throw new Error('The first argument must be a string, the second argument must be an array');
    }
    const lowerCaseStr = str.toLowerCase();
    const matchingWords = [];
    for (let i = 0; i < dictionary.length; i++) {
        if (dictionary[i].length !== str.length) {
            continue;
        }
        let isMatch = true;
        const lowerCaseWord = dictionary[i].toLowerCase();
        for (let j = 0; j < str.length; j++) {
            if (lowerCaseStr[j] !== lowerCaseWord[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            matchingWords.push(dictionary[i]);
        }
    }
    return matchingWords;
};
exports.getMatchingWords = getMatchingWords;
const removeCharacters = (str, characters) => {
    if (typeof str !== 'string' || typeof characters !== 'string') {
        throw new Error('Both arguments must be strings');
    }
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (!characters.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
};
exports.removeCharacters = removeCharacters;
const splitString = (str, delimiter) => {
    if (typeof str !== 'string' || typeof delimiter !== 'string') {
        throw new Error('Both arguments must be strings');
    }
    const result = [];
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + delimiter.length) === delimiter) {
            result.push(str.slice(start, i));
            start = i + delimiter.length;
        }
    }
    result.push(str.slice(start));
    return result;
};
exports.splitString = splitString;
const joinArray = (arr, delimiter) => {
    if (!Array.isArray(arr) || typeof delimiter !== 'string') {
        throw new Error('First argument must be an array of strings and the second argument must be a string');
    }
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'string') {
            throw new Error('All elements in the array must be strings');
        }
        result += arr[i];
        if (i < arr.length - 1) {
            result += delimiter;
        }
    }
    return result;
};
exports.joinArray = joinArray;
const findIndex = (str, substring) => {
    if (typeof str !== 'string' || typeof substring !== 'string') {
        throw new Error('Both arguments must be strings');
    }
    if (substring.length > str.length) {
        return -1;
    }
    for (let i = 0; i < str.length - substring.length + 1; i++) {
        let j = 0;
        for (; j < substring.length; j++) {
            if (str[i + j] !== substring[j]) {
                break;
            }
        }
        if (j === substring.length) {
            return i;
        }
    }
    return -1;
};
exports.findIndex = findIndex;
const startsWith = (str, substring) => {
    if (typeof str !== 'string' || typeof substring !== 'string') {
        throw new Error('Both arguments must be strings');
    }
    if (substring.length > str.length) {
        return false;
    }
    return substring === str.slice(0, substring.length);
};
exports.startsWith = startsWith;
const endsWith = (str, substring) => {
    let i = str.length - 1, j = substring.length - 1;
    while (j >= 0 && i >= 0) {
        if (str[i] !== substring[j])
            return false;
        i--;
        j--;
    }
    return j < 0;
};
exports.endsWith = endsWith;
const countWordsInString = (str) => {
    let count = 0, word = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' || str[i] === '\t' || str[i] === '\n') {
            if (word)
                count++;
            word = false;
        }
        else {
            word = true;
        }
    }
    if (word)
        count++;
    return count;
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
    if (str === '')
        return false;
    let i = 0, n = str.length;
    while (i < n && str[i] === ' ')
        i++;
    if (i < n && (str[i] === '+' || str[i] === '-'))
        i++;
    let num = 0, valid = false;
    while (i < n && str[i] >= '0' && str[i] <= '9') {
        num = num * 10 + Number(str[i]) - Number('0');
        i++;
        valid = true;
    }
    if (i < n && str[i] === '.') {
        i++;
        let tmp = 0, div = 1;
        while (i < n && str[i] >= '0' && str[i] <= '9') {
            tmp = tmp * 10 + Number(str[i]) - Number('0');
            div *= 10;
            i++;
            valid = true;
        }
        num += tmp / div;
    }
    if (i < n && (str[i] === 'e' || str[i] === 'E')) {
        i++;
        let sign = 1;
        if (i < n && str[i] === '+') {
            i++;
        }
        else if (i < n && str[i] === '-') {
            i++;
            sign = -1;
        }
        let exp = 0;
        while (i < n && str[i] >= '0' && str[i] <= '9') {
            exp = exp * 10 + Number(str[i]) - Number('0');
            i++;
            valid = true;
        }
        num *= Math.pow(10, exp * sign);
    }
    while (i < n && str[i] === ' ')
        i++;
    return valid && i === n;
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
const splitByWords = (text, separator = ' ') => {
    let currentWord = '';
    const words = [];
    for (let i = 0; i < text.length; i++) {
        const currentChar = text.charAt(i);
        if (currentChar === separator) {
            words.push(currentWord);
            currentWord = '';
        }
        else {
            currentWord += currentChar;
        }
    }
    if (currentWord)
        words.push(currentWord);
    return words;
};
exports.splitByWords = splitByWords;
const splitByLines = (text, separator = '\n') => {
    let start = 0;
    const lines = [];
    const separatorLength = separator.length;
    for (let i = 0; i < text.length; i++) {
        if (text.slice(i, i + separatorLength) === separator) {
            lines.push(text.substring(start, i));
            start = i + separatorLength;
        }
    }
    lines.push(text.substring(start));
    return lines;
};
exports.splitByLines = splitByLines;
const repeatString = (text, count) => {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += text;
    }
    return result;
};
exports.repeatString = repeatString;
const insertString = (text, insertion, index) => index > text.length
    ? text + insertion
    : text.slice(0, index) + insertion + text.slice(index);
exports.insertString = insertString;
const wrapString = (text, wrapLength, wrapWith = '\n') => {
    const words = text.split(' ');
    let line = '';
    let result = '';
    for (const word of words) {
        if (line.length + word.length + wrapWith.length > wrapLength) {
            result += line + wrapWith;
            line = '';
        }
        line += word + ' ';
    }
    result += line;
    return result.trim();
};
exports.wrapString = wrapString;
const substringBefore = (text, search) => {
    let result = '';
    let searchIndex = -1;
    for (let i = 0; i < text.length; i++) {
        result += text[i];
        if (text[i] === search[0] && text.slice(i, i + search.length) === search) {
            searchIndex = i;
            break;
        }
    }
    return searchIndex === -1 ? text : result.slice(0, searchIndex);
};
exports.substringBefore = substringBefore;
const substringAfter = (text, search) => {
    let searchIndex = -1;
    for (let i = 0; i < text.length; i++) {
        let isMatch = true;
        for (let j = 0; j < search.length; j++) {
            if (text[i + j] !== search[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            searchIndex = i;
            break;
        }
    }
    if (searchIndex === -1) {
        return text;
    }
    return text.slice(searchIndex + search.length);
};
exports.substringAfter = substringAfter;
const substringBetween = (text, start, end) => {
    let startIndex = -1;
    let endIndex = -1;
    let startLen = start.length;
    let endLen = end.length;
    let textLen = text.length;
    for (let i = 0; i < textLen - startLen + 1; i++) {
        let j = 0;
        for (; j < startLen; j++) {
            if (text[i + j] !== start[j]) {
                break;
            }
        }
        if (j === startLen) {
            startIndex = i;
            break;
        }
    }
    if (startIndex === -1) {
        return '';
    }
    for (let i = startIndex + startLen; i < textLen - endLen + 1; i++) {
        let j = 0;
        for (; j < endLen; j++) {
            if (text[i + j] !== end[j]) {
                break;
            }
        }
        if (j === endLen) {
            endIndex = i;
            break;
        }
    }
    if (endIndex === -1) {
        return '';
    }
    let result = '';
    for (let i = startIndex + startLen; i < endIndex; i++) {
        result += text[i];
    }
    return result;
};
exports.substringBetween = substringBetween;
const leftPad = (text, length, padWith = ' ') => {
    let result = '';
    let paddingLength = length - text.length;
    while (paddingLength > 0) {
        result += padWith;
        paddingLength--;
    }
    result += text;
    return result;
};
exports.leftPad = leftPad;
const rightPad = (text, length, padWith = ' ') => {
    let result = text;
    let paddingLength = length - text.length;
    while (paddingLength > 0) {
        result += padWith;
        paddingLength--;
    }
    return result;
};
exports.rightPad = rightPad;
const sliceString = (text, start, end = text.length) => {
    let sliced = '';
    for (let i = start; i < end && i < text.length; i++) {
        sliced += text[i];
    }
    return sliced;
};
exports.sliceString = sliceString;
const splitAt = (text, index) => {
    let first = '';
    let second = '';
    for (let i = 0; i < text.length; i++) {
        if (i < index) {
            first += text[i];
        }
        else {
            second += text[i];
        }
    }
    return [first, second];
};
exports.splitAt = splitAt;
const getNthIndex = (text, searchString, n) => {
    let index = text.indexOf(searchString);
    let count = 1;
    while (index !== -1 && count < n) {
        index = text.indexOf(searchString, index + searchString.length);
        count++;
    }
    return index;
};
exports.getNthIndex = getNthIndex;
const trimLeft = (text) => {
    let start = 0;
    while (start < text.length && (text[start] === ' ' || text[start] === '\t')) {
        start++;
    }
    return text.substring(start);
};
exports.trimLeft = trimLeft;
const trimRight = (text) => {
    let end = text.length - 1;
    while (end >= 0 && (text[end] === ' ' || text[end] === '\t')) {
        end--;
    }
    return text.substring(0, end + 1);
};
exports.trimRight = trimRight;
const trimBoth = (text) => trimRight(trimLeft(text));
exports.trimBoth = trimBoth;
const removeDuplicates = (text) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (!result.includes(text[i])) {
            result += text[i];
        }
    }
    return result;
};
exports.removeDuplicates = removeDuplicates;
const contains = (text, search) => {
    let i = 0;
    let j = 0;
    while (i < text.length && j < search.length) {
        if (text[i] === search[j]) {
            j++;
        }
        i++;
    }
    return j === search.length;
};
exports.contains = contains;
