/*первая буква заглавная*/
export const firstToUpperCase = ( str ) => {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}

/*обратный транслит*/
export const translit = (word) =>  {
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

/*обычный транслит*/
export const transliterate = (slug) =>  {
    const letters = {"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"};

    return slug.split('').map(function (char) {
        return letters[char] || char;
    }).join("");
}

//module.exports.transliterate = transliterate
