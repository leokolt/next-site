// const translit = (slug) =>  {
//     const letters = {
// 		"sch": "щ",
//     	"YO": "Ё",
//     	"I": "Й",
//     	"TS": "Ц",
//     	"U": "У",
//     	"K": "К",
//     	"E": "Е",
//     	"N": "Н",
//     	"G": "Г",
//     	"SH": "Ш",
//     	"Щ": "SCH",
//     	"Z": "З",
//     	"H": "Х",
//     	"Ъ": "'",
//     	"yo": "ё",
//     	"й": "i",
//     	"ts": "ц",
//     	"u": "у",
//     	"k": "к",
//     	"e": "е",
//     	"n": "н",
//     	"g": "г",
//     	"sh": "ш",
//     	"sch": "щ",
//     	"з": "z",
//     	"х": "h",
//     	"ъ": "'",
//     	"Ф": "F",
//     	"Ы": "I",
//     	"В": "V",
//     	"А": "a",
//     	"P": "П",
//     	"Р": "R",
//     	"О": "O",
//     	"Л": "L",
//     	"Д": "D",
//     	"Ж": "ZH",
//     	"Э": "E",
//     	"ф": "f",
//     	"ы": "i",
//     	"в": "v",
//     	"а": "a",
//     	"p": "п",
//     	"р": "r",
//     	"o": "о",
//     	"l": "л",
//     	"д": "d",
//     	"zh": "ж",
//     	"э": "e",
//     	"Ya": "Я",
//     	"Ч": "CH",
//     	"S": "С",
//     	"М": "M",
//     	"И": "I",
//     	"Т": "T",
//     	"Ь": "'",
//     	"Б": "B",
//     	"YU": "Ю",
//     	"ya": "я",
//     	"ч": "ch",
//     	"s": "с",
//     	"m": "м",
//     	"и": "i",
//     	"т": "t",
//     	"ь": "'",
//     	"б": "b",
//     	"yu": "ю"
//     };

//     return slug.split('').map(function (char) {
//         return letters[char] || char;
//     }).join("");
// }

// module.exports.translit = translit

// const translit = (word) => {
// 	var converter = {
// 		'sh': 'ш',   'sch': 'щ',  'ь': '',     'ya': 'я',
// 		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
// 		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
// 		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
// 		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
// 		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
// 		'ы': 'y',    'ъ': '', 'э': 'e',    'ю': 'yu'
// 	};

// 	word = word.toLowerCase();

// 	var answer = '';
// 	for (var i = 0; i < word.length; ++i ) {
// 		if (converter[word[i]] == undefined){
// 			answer += word[i];
// 		} else {
// 			answer += converter[word[i]];
// 		}
// 	}

// 	answer = answer.replace(/[^-0-9а-я]/g, '-');
// 	answer = answer.replace(/[-]+/g, '-');
// 	answer = answer.replace(/^\-|-$/g, '');
// 	return answer;
// }

// module.exports.translit = translit

const translit = (word) =>  {
	const converter = {
		'sch': 'щ',

		'yo': 'ё', 'zh': 'ж', 'ch': 'ч', 'sh': 'ш', 'yu': 'ю', 'ya': 'я', 'ja': 'джа', 'sc': 'ск',

		'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
		'e': 'е', 'z': 'з', 'i': 'и', 'y': 'й', 'k': 'к',
		'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
		'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
		'h': 'х', 'c': 'ц', 'y': 'ы',
	};

	if (word.indexOf("-") >= 0) {

		word = word.toLowerCase();
		word = word.replace(/-/g, ' ');
		//word = word.replace("*", '');

		for (const [key, value] of Object.entries(converter)) {
			word = word.replaceAll(key, value);
		}

		return word;

	} else {
		word = word.toLowerCase();
		return word;
	}
}

module.exports.translit = translit
