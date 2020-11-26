"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/** Used to compose unicode character classes. */
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f";
var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange = "\\u20d0-\\u20ff";
var rsComboMarksExtendedRange = "\\u1ab0-\\u1aff";
var rsComboMarksSupplementRange = "\\u1dc0-\\u1dff";
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
var rsDingbatRange = "\\u2700-\\u27bf";
var rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff';
var rsMathOpRange = '\\xac\\xb1\\xd7\\xf7';
var rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
var rsPunctuationRange = "\\u2000-\\u206f";
var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
var rsVarRange = "\\ufe0e\\ufe0f";
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
/** Used to compose unicode capture groups. */

var rsApos = "['\u2019]";
var rsBreak = "[".concat(rsBreakRange, "]");
var rsCombo = "[".concat(rsComboRange, "]");
var rsDigit = '\\d';
var rsDingbat = "[".concat(rsDingbatRange, "]");
var rsLower = "[".concat(rsLowerRange, "]");
var rsMisc = "[^".concat(rsAstralRange).concat(rsBreakRange + rsDigit + rsDingbatRange + rsLowerRange + rsUpperRange, "]");
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
var rsNonAstral = "[^".concat(rsAstralRange, "]");
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsUpper = "[".concat(rsUpperRange, "]");
var rsZWJ = "\\u200d";
/** Used to compose unicode regexes. */

var rsMiscLower = "(?:".concat(rsLower, "|").concat(rsMisc, ")");
var rsMiscUpper = "(?:".concat(rsUpper, "|").concat(rsMisc, ")");
var rsOptContrLower = "(?:".concat(rsApos, "(?:d|ll|m|re|s|t|ve))?");
var rsOptContrUpper = "(?:".concat(rsApos, "(?:D|LL|M|RE|S|T|VE))?");
var reOptMod = "".concat(rsModifier, "?");
var rsOptVar = "[".concat(rsVarRange, "]?");
var rsOptJoin = "(?:".concat(rsZWJ, "(?:").concat([rsNonAstral, rsRegional, rsSurrPair].join('|'), ")").concat(rsOptVar + reOptMod, ")*");
var rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])';
var rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsEmoji = "(?:".concat([rsDingbat, rsRegional, rsSurrPair].join('|'), ")").concat(rsSeq);
var reUnicodeWords = RegExp(["".concat(rsUpper, "?").concat(rsLower, "+").concat(rsOptContrLower, "(?=").concat([rsBreak, rsUpper, '$'].join('|'), ")"), "".concat(rsMiscUpper, "+").concat(rsOptContrUpper, "(?=").concat([rsBreak, rsUpper + rsMiscLower, '$'].join('|'), ")"), "".concat(rsUpper, "?").concat(rsMiscLower, "+").concat(rsOptContrLower), "".concat(rsUpper, "+").concat(rsOptContrUpper), rsOrdUpper, rsOrdLower, "".concat(rsDigit, "+"), rsEmoji].join('|'), 'g');
/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */

function unicodeWords(string) {
  return string.match(reUnicodeWords);
}

var _default = unicodeWords;
exports["default"] = _default;